import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string;
      email: string | undefined;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id: string;
  }
}
