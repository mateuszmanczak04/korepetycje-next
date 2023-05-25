'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

type Props = {
  chatId: string;
};

const MessagesList = ({ chatId }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // session
  const { data: session } = useSession();

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
