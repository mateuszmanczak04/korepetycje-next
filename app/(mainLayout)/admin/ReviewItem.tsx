import { useState } from 'react';
import Rating from '@/app/Rating';
import { getDateSlug } from '@/lib/getDateSlug';

import Image from 'next/image';
import appAxios from '@/lib/appAxios';
import ErrorComponent from '@/app/(commonComponents)/ErrorComponent';

const ReviewItem = ({
  title,
  author,
  createdAt,
  rating,
  _id,
  hidden: initialHidden,
}: Review) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hidden, setHidden] = useState(initialHidden);

  const handleHide = () => {
    setLoading(true);
    setError('');
    appAxios
      .put('/api/reviews/hide', { reviewId: _id })
      .then((res) => {
        setLoading(false);
        setHidden(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });
  };

  const handleReveal = () => {
    setLoading(true);
    setError('');
    appAxios
      .put('/api/reviews/reveal', { reviewId: _id })
      .then((res) => {
        setLoading(false);
        setHidden(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });
  };

  return (
    <div className='w-full shadow-lg p-4 rounded-xl flex flex-col gap-2'>
      <div className='w-full flex justify-between items-center max-w-full'>
        <div className='flex gap-2 items-center bg-gray-100 rounded-full pr-4 w-max'>
          <Image
            src={author.imgUrl || '/default-avatar.avif'}
            alt='avatar'
            width={60}
            height={60}
            className='w-8 h-8 rounded-full object-cover'
          />
          <p className='text-gray-500 overflow-ellipsis whitespace-nowrap overflow-hidden'>
            {author.username}
          </p>
        </div>
      </div>
      <p className='w-full'>{title}</p>
      <Rating
        rating={rating}
        setRating={() => {}}
        changeable={false}
        size={5}
        gap={0}
      />
      <p className='text-gray-500 text-sm'>
        {getDateSlug(new Date(createdAt))}
      </p>
      {hidden && !loading && (
        <button className='btn-primary' onClick={handleReveal}>
          Opublikuj
        </button>
      )}
      {!hidden && !loading && (
        <button className='btn-secondary' onClick={handleHide}>
          Ukryj
        </button>
      )}
      {/* {loading && <Loading size={40} />} */}
      {error && <ErrorComponent>{error}</ErrorComponent>}
    </div>
  );
};

export default ReviewItem;
