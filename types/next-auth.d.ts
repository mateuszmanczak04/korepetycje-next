import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string;
    };
  }
}