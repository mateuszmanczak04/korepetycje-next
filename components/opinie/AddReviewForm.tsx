import React, { useState } from 'react';
import Rating from './Rating';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { addReview, getMayAddReview } from '@/redux/review';

const AddReviewForm = () => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(5);

  // redux
  const dispatch = useAppDispatch();
  const mayAdd = useAppSelector(getMayAddReview);

  const handleSubmit = async () => {
    dispatch(addReview({ title, rating }));
  };

  if (mayAdd)
    return (
      <div className='bg-white w-full flex flex-col gap-4 items-center p-4 rounded-xl shadow-xl'>
        <p className='text-xl sm:text-3xl font-bold text-center'>
          Dodaj swoją opinię
        </p>
        <textarea
          className='border-2 border-orange-500 bg-white resize-none rounded-lg  w-full p-4 outline-none focus:shadow-md'
          value={title}
          onChange={(e) => setTitle(e.target.value)}></textarea>
        <Rating
          setRating={setRating}
          rating={rating}
          changeable={true}
          size={8}
          gap={1}
        />
        <button
          className='w-full bg-orange-500 text-white text-md sm:text-xl p-1 sm:p-2 rounded-lg shadow-md hover:bg-opacity-80'
          onClick={handleSubmit}>
          Dodaj
        </button>
      </div>
    );

  return null;
};

export default AddReviewForm;
