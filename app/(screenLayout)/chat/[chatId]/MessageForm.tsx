'use client';

import { FormEvent, useState } from 'react';
import appAxios from '@/lib/appAxios';
import { useSession } from 'next-auth/react';

const MessageForm = ({ chatId }: { chatId: string }) => {
  const [content, setContent] = useState('');
  const { data: session } = useSession();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    appAxios.post('/api/chat/send-message', {
      content,
      chatId,
    });
  };

  return (
    <div className='w-full p-4 bg-white gap-2 shadow-xl border-t'>
      <form
        className='flex items-center w-full max-w-4xl m-auto gap-2'
        onSubmit={handleSubmit}>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className='btn-primary'>Send</button>
      </form>
    </div>
  );
};

export default MessageForm;
