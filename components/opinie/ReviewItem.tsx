import { ReviewType } from '@/models/Review';
import React, { useRef, useState } from 'react';
import Rating from './Rating';
import { getDateSlug } from '@/lib/getDateSlug';
import { BsThreeDotsVertical } from 'react-icons/bs';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useSession } from 'next-auth/react';
import { useAppDispatch } from '@/redux/store';
import { deleteReview } from '@/redux/review';

const ReviewItem = ({ title, author, createdAt, rating, _id }: ReviewType) => {
  // session
  const { data: session } = useSession();

  // redux
  const dispatch = useAppDispatch();

  const [openMenu, setOpenMenu] = useState(false);
  BsThreeDotsVertical;

  const handleCloseMenu = () => setOpenMenu(false);
  const handleToggleMenu = () => setOpenMenu((prev) => !prev);

  const handleDelete = () => dispatch(deleteReview({ _id }));

  // close menu after clicking outside
  const menuRef: any = useRef();
  useOnClickOutside(menuRef, handleCloseMenu);

  return (
    <div className='w-full shadow-lg p-4 rounded-xl flex flex-col gap-2 '>
      <div className='w-full flex justify-between items-center'>
        <p className='text-gray-500'>{author.username}</p>
        {session && session?.user?.email === author?.email && (
          <div className='relative' ref={menuRef}>
            <button>
              <BsThreeDotsVertical
                className='w-6 h-6'
                onClick={handleToggleMenu}
              />
            </button>

            <div
              className={`bg-white p-1 rounded-md absolute right-8 -top-2 shadow-md transition overflow-hidden ${
                openMenu ? 'opacity-100' : 'opacity-0'
              }`}>
              <button
                onClick={handleDelete}
                className='hover:bg-gray-100 py-1 px-2 rounded'>
                Usuń
              </button>
            </div>
          </div>
        )}
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
    </div>
  );
};

export default ReviewItem;
