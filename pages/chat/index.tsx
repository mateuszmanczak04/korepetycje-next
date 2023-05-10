import ChatTopBar from '@/components/chat/ChatTopBar';
import MessageForm from '@/components/chat/MessageForm';
import MessagesList from '@/components/chat/MessagesList';
import UsersList from '@/components/chat/UsersList';
import React from 'react';

const Chat = () => {
  return (
    <div className='w-full h-full flex mt-12 md:mt-0 md:ml-60 lg:ml-80'>
      <div className='flex flex-1 flex-col h-screen justify-center items-center'>
        <p className='text-gray-600 text-lg'>Wybierz chat, aby pisać</p>
      </div>
      <UsersList />
    </div>
  );
};

export default Chat;
