import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/User';
import dbConnect from '@/lib/dbConnect';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
      delete token.name;
      delete token.picture;
      // token.name = undefined;
      // token.picture = undefined;
      return token;
    },
    async session({ session, token }) {
      if (!token) return session;
      session.user._id = token._id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
