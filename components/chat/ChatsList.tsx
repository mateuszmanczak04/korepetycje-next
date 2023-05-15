import React, { useEffect, useState } from 'react';
import appAxios from '../../lib/appAxios';
import Image from 'next/image';
import Link from 'next/link';

const ChatsList = () => {
  const [chats, setChats] = useState<any[]>([]);

  useEffect(() => {
    appAxios
      .get('/api/chat/get-my-chats')
      .then((res) => {
        setChats(res.data.chats);
      })
      .catch();
  }, []);

  return (
    <div className='flex flex-col bg-white border-l w-full h-screen overflow-y-scroll scrollbar-hide'>
      {chats &&
        chats.map((chat: any) => (
          <Link
            href={`/chat/${chat._id}`}
            key={chat._id}
            className='flex items-center gap-2 p-2 border-b hover:bg-gray-100 cursor-pointer'>
            {/* <Image
              src={chat.imgUrl}
              alt='avatar'
              width={40}
              height={40}
              className='aspect-square rounded-full object-cover'
            /> */}
            <p>{chat._id}</p>
          </Link>
        ))}
    </div>
  );
};

export default ChatsList;
