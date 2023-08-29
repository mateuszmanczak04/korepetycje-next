export {};

declare global {
  interface Review {
    author: string;
    content: string;
    rating: number;
    id: number;
  }
}
