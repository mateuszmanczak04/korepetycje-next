'use client';

import ChatTopBar from '../ChatTopBar';
import MessageForm from '../MessageForm';
import MessagesList from '../MessagesList';
import ChatsList from '../ChatsList';
import { useEffect, useState } from 'react';
import appAxios from '@/lib/appAxios';
import ErrorComponent from '../../(common)/ErrorComponent';

const Page = ({ params }: { params: { chatId: string } }) => {
  const [error, setError] = useState('');
  const [chat, setChat] = useState<any>(null);

  useEffect(() => {
    if (!params) {
      return;
    }
    setError('');
    appAxios
      .get(`/api/chat/get-chat-data/${params.chatId}`)
      .then((res) => {
        setChat(res.data.chat);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });

    appAxios.get(`/`);
  }, [params]);

  if (error) {
    return <ErrorComponent>{error}</ErrorComponent>;
  }

  if (chat)
    return (
      <div className='w-full h-full flex mt-12 md:mt-0 md:ml-60 lg:ml-80'>
        <div className='flex flex-1 flex-col h-screen'>
          <ChatTopBar username={chat._id} imgUrl={''} chatId={params.chatId} />
          <MessagesList chatId={params.chatId} />
          <MessageForm chatId={params.chatId} />
        </div>
        <div className='hidden md:flex w-60 lg:w-80'>
          <ChatsList chatId={params.chatId} />
        </div>
      </div>
    );

  return null;
};

export default Page;
