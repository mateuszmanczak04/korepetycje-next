'use client';

import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useSession } from 'next-auth/react';
import appAxios from '@/lib/appAxios';
import { useRef, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

type Props = {
  _id: string;
  author: string;
};

const ReviewItemMenu = ({ author, _id }: Props) => {
  // session
  const { data: session } = useSession();

  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseMenu = () => setOpenMenu(false);
  const handleToggleMenu = () => setOpenMenu((prev) => !prev);

  const handleDelete = async () => {
    await appAxios.delete(`/api/reviews/delete/${_id}`);
    location.reload();
  };

  // close menu after clicking outside
  const menuRef: any = useRef();
  useOnClickOutside(menuRef, handleCloseMenu);

  return (
    <>
      {session && session?.user?._id === author && (
        <div className='relative' ref={menuRef}>
          <button className='bg-white w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition rounded-full'>
            <BsThreeDotsVertical
              className='w-6 h-6'
              onClick={handleToggleMenu}
            />
          </button>

          <div
            className={`bg-white p-1 rounded-md absolute right-10 top-0 shadow-md transition overflow-hidden ${
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
    </>
  );
};

export default ReviewItemMenu;
