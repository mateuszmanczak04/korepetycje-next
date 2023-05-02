import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import User from '../../../models/User';
// import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '../../../lib/dbConnect';
// import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    // credentials provider disabled
    // CredentialsProvider({
    //   name: 'Credentials',
    //   async authorize(credentials) {
    //     const { email, password } = credentials;

    //     await dbConnect();

    //     const user = await User.findOne({ email }).select('email password');

    //     if (!user) {
    //       throw new Error('Niepoprawne dane logowania.');
    //     }

    //     if (!user.password || user.password.length === 0) {
    //       throw new Error('Niepoprawne dane logowania.');
    //     }

    //     const passwordsMatch = await bcrypt.compare(password, user.password);
    //     if (!passwordsMatch) {
    //       throw new Error('Niepoprawne dane logowania.');
    //     }

    //     return {
    //       email: user.email,
    //     };
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        await dbConnect();

        const exists = await User.exists({ email: user.email });

        if (exists) {
          return true;
        }

        await User.create({
          email: user.email,
          username: user.name,
          imgUrl: user.image,
        });
      }

      return true;
    },
    async jwt({ token }) {
      await dbConnect();
      const user = await User.findOne({ email: token.email }).select('_id');
      token._id = user._id;
      token.name = undefined;
      token.picture = undefined;
      // token.email = undefined;
      return token;
    },
    async session({ session, token }) {
      session.user._id = token._id;
      session.user.email = undefined;
      return session;
    },
  },
};

export default NextAuth(authOptions);
