import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

type Props = {
  rating: number;
  setRating: (n: number) => void;
  changeable: boolean;
  size: number;
  gap: number;
};

const Rating = ({ rating, setRating, changeable, size, gap }: Props) => {
  const [hoverRating, setHoverRating] = useState<null | number>(null);

  const handleMouseEnter = (index: number) => {
    if (changeable) setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    if (changeable) setHoverRating(null);
  };

  const handleClick = (index: number) => {
    if (changeable) setRating(index + 1);
  };

  const stars = new Array(5).fill(0);

  return (
    <div className='flex gap-${gap}'>
      {stars.map((_, index) => {
        return (
          <AiFillStar
            key={index}
            className={`w-${size} h-${size} transition cursor-pointer ${
              hoverRating
                ? index + 1 <= hoverRating
                  ? 'fill-orange-500'
                  : 'fill-gray-400'
                : index + 1 <= rating
                ? 'fill-orange-500'
                : 'fill-gray-400'
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Rating;
