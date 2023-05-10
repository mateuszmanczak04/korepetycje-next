import ChatTopBar from '@/components/chat/ChatTopBar';
import MessageForm from '@/components/chat/MessageForm';
import MessagesList from '@/components/chat/MessagesList';
import UsersList from '@/components/chat/UsersList';
import React, { useEffect, useState } from 'react';
import appAxios from '../../lib/appAxios';
import { useRouter } from 'next/router';
import Error from '@/components/Error';
import Loading from '@/components/Loading';

const Chat = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const [chat, setChat] = useState<{ users: User[]; _id: string } | null>(null);

  useEffect(() => {
    setError('');
    setLoading(true);
    appAxios
      .get(`/api/chat/get-current-user-data/${router.query.userId}`)
      .then((res) => {
        setLoading(false);
        setCurrentUser(res.data.user);
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

  if (currentUser && currentUser.username && currentUser.imgUrl)
    return (
      <div className='w-full h-full flex mt-12 md:mt-0 md:ml-60 lg:ml-80'>
        <div className='flex flex-1 flex-col h-screen'>
          <ChatTopBar
            username={currentUser.username}
            imgUrl={currentUser.imgUrl}
          />
          <MessagesList />
          <MessageForm />
        </div>
        <div className='hidden md:flex w-60 lg:w-80'>
          <UsersList />
        </div>
      </div>
    );

  return null;
};

export default Chat;
