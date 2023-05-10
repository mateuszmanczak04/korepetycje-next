import React, { useState } from 'react';

const MessageForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {};

  return (
    <div className='w-full p-4 bg-white gap-2 shadow-xl'>
      <form className='flex items-center w-full max-w-4xl m-auto gap-2'>
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
