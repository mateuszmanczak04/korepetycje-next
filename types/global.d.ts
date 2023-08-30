export {};

declare global {
  type Rating = 1 | 2 | 3 | 4 | 5;

  interface Review {
    author: string;
    content: string;
    rating: Rating;
    id: number;
  }

  /** A type globally accessible which represents 
  all possible sections in the app */
  type PossibleSection =
    | 'introduction'
    | 'process'
    | 'level'
    | 'reviews'
    | 'price-list'
    | 'location'
    | 'contact'
    | '';

  interface Section {
    id: PossibleSection;
    name: string;
  }
}
