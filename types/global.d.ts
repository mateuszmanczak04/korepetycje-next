export {};

declare global {
  type Rating = 1 | 2 | 3 | 4 | 5;

  interface Review {
    author: string;
    content: string;
    rating: Rating;
    id: number;
  }

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
    element: HTMLElement | null;
  }
}
