import ChatTopBar from '@/components/chat/ChatTopBar';
import MessageForm from '@/components/chat/MessageForm';
import MessagesList from '@/components/chat/MessagesList';
import ChatsList from '@/components/chat/ChatsList';
import React, { useEffect, useState } from 'react';
import appAxios from '../../lib/appAxios';
import { useRouter } from 'next/router';
import Error from '@/components/Error';
import Loading from '@/components/Loading';

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const [chat, setChat] = useState<any>(null);

  useEffect(() => {
    if (!router.query) {
      return;
    }
    setError('');
    setLoading(true);
    appAxios
      .get(`/api/chat/get-chat-data/${router.query.chatId}`)
      .then((res) => {
        setLoading(false);
        setChat(res.data.chat);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
      });

    appAxios.get(`/`);
  }, [router]);

  if (error) {
    return <Error>{error}</Error>;
  }

  if (loading) {
    return <Loading size={120} />;
  }

  if (chat)
    return (
      <div className='w-full h-full flex mt-12 md:mt-0 md:ml-60 lg:ml-80'>
        <div className='flex flex-1 flex-col h-screen'>
          <ChatTopBar username={chat._id} imgUrl={''} />
          <MessagesList />
          <MessageForm />
        </div>
        <div className='hidden md:flex w-60 lg:w-80'>
          <ChatsList />
        </div>
      </div>
    );

  return null;
};

export default Chat;
