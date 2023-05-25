export {};

declare global {
  interface User {
    email?: string;
    username?: string;
    password?: string;
    _id?: string;
    imgUrl?: string;
    isAdmin?: boolean;
  }

  interface Review {
    title: string;
    rating: number;
    author: User;
    _id: string;
    createdAt: number;
    hidden?: boolean;
  }

  interface Message {
    _id: string;
    content: string;
    sender: string | mongoose.Schema.Types.ObjectId;
    chat: string | mongoose.Schema.Types.ObjectId;
    timestamp: number;
  }

  interface Chat {
    _id: string;
    name?: string;
    images?: string[];
    members: User[] | mongoose.Schema.Types.ObjectId[] | string[];
  }
}
