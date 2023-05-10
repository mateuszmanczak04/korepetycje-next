import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';

type Props = {
  imgUrl: string;
  username: string;
};

const ChatTopBar = ({ imgUrl, username }: Props) => {
  return (
    <div className='w-full flex items-center gap-2 font-medium border-b py-2 px-4 justify-between'>
      <div className='flex items-center gap-2'>
        <Image
          src={imgUrl}
          alt='avatar'
          width={40}
          height={40}
          className='aspect-square rounded-full object-cover'
        />
        <p>{username}</p>
      </div>
      <Link href='/chat' className='block md:hidden'>
        <BsArrowCounterclockwise className='w-6 h-6' />
      </Link>
    </div>
  );
};

export default ChatTopBar;
