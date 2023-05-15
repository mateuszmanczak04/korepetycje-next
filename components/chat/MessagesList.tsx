import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import appAxios from '../../lib/appAxios';
import { useSession } from 'next-auth/react';

const MessagesList = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { data: session } = useSession();

  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    appAxios
      .get(`/api/chat/get-chat-messages/${router.query._id}`)
      .then((res) => {
        setMessages(res.data.messages);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  }, [router]);

  return (
    <div className='flex flex-col gap-1 p-8 rounded-md flex-1 overflow-y-scroll scrollbar-hide w-full max-w-4xl m-auto'>
      {messages.map((message) => {
        if (message.sender === session?.user._id) {
          return (
            <div
              key={message._id}
              className='bg-orange-500 text-white w-fit ml-auto p-2 rounded-lg shadow max-w-[400px]'>
              {message.content}
            </div>
          );
        }
        return (
          <div
            key={message._id}
            className='bg-white text-gray-900 w-fit mr-auto p-2 rounded-lg shadow max-w-[400px]'>
            {message.content}
          </div>
        );
      })}
    </div>
  );
};

export default MessagesList;
