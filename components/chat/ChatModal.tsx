import React, { useState } from 'react';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen)
    return (
      <button
        className='fixed bottom-4 right-4 p-2 bg-orange-500 text-white rounded-full shadow-xl hover:bg-orange-400 transition z-50'
        onClick={handleOpen}>
        Open chat
      </button>
    );

  return (
    <div className='w-screen h-screen flex justify-center items-center p-8 fixed bg-black bg-opacity-70'>
      <div className='w-full h-full bg-white shadow-xl border-4 border-orange-500  rounded-xl flex flex-col gap-4 overflow-hidden'>
        <div className='flex justify-between bg-orange-100 py-4 px-8 items-center'>
          <p>Napisz wiadomość prywatną do Mateusza</p>
          <button onClick={handleClose} className='text-orange-500'>
            Close
          </button>
        </div>
        <MessagesList />
        <MessageForm />
      </div>
    </div>
  );
};
export default ChatModal;
