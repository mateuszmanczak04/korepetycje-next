import ChatTopBar from '@/components/chat/ChatTopBar';
import MessageForm from '@/components/chat/MessageForm';
import MessagesList from '@/components/chat/MessagesList';
import ChatsList from '@/components/chat/ChatsList';
import React from 'react';
import Head from 'next/head';

const Chat = () => {
  return (
    <div className='w-full h-full flex mt-12 md:mt-0 md:ml-60 lg:ml-80'>
      <Head>
        <title>Chat - Korepetycje - Mateusz Mańczak</title>
      </Head>
      <div className='hidden sm:flex flex-1 flex-col h-screen justify-center items-center'>
        <p className='text-gray-600 text-lg'>Wybierz chat, aby pisać</p>
      </div>
      <div className='w-full sm:w-60 md:w-80'>
        <ChatsList />
      </div>
    </div>
  );
};

export default Chat;
