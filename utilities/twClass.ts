import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/** A combination of clsx and tailwind-merge packages */
const twClass = (input: any[]) => {
  return twMerge(clsx(input));
};

export default twClass;
