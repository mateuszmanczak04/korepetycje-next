export {};

declare global {
  interface User {
    email?: string;
    username?: string;
    password?: string;
    _id?: string;
    imgUrl: string;
  }

  interface Review {
    title: string;
    rating: number;
    author: User;
    _id: string;
    createdAt: number;
  }
}
