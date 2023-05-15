export {};

declare global {
  interface User {
    email?: string;
    username?: string;
    password?: string;
    _id?: string;
    imgUrl: string;
    isAdmin: boolean;
  }

  interface Review {
    title: string;
    rating: number;
    author: User;
    _id: string;
    createdAt: number;
    hidden?: boolean;
  }

  interface CustomGetTokenResult extends GetTokenResult {
    _id: string;
  }
}
