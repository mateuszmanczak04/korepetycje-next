import Rating from '@/app/Rating';
import { getDateSlug } from '@/lib/getDateSlug';
import Image from 'next/image';
import ReviewItemMenu from './ReviewItemMenu';

const ReviewItem = ({ title, author, createdAt, rating, _id }: Review) => {
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
            {author.username || 'unknown'}
          </p>
        </div>
        <ReviewItemMenu _id={_id} author={author._id!} />
      </div>
      <p className='w-full'>{title}</p>
      <Rating rating={rating} size={5} />
      <p className='text-gray-500 text-sm'>
        {getDateSlug(new Date(createdAt))}
      </p>
    </div>
  );
};

export default ReviewItem;
