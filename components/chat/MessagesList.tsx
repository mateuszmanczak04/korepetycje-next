import React, { useEffect } from 'react';

const messages = [
  { _id: '1', sender: 'Mateusz', content: 'Hej, co tam u ciebie słychać?' },
  {
    _id: '2',
    sender: 'me',
    content: 'Bardzo dobrze, jestem zainteresowany lekcjami matematyki.',
  },
  {
    _id: '3',
    sender: 'Mateusz',
    content:
      'Korepetycji udzielam od wielu miesięcy i pod swoimi skrzydłami miałem wielu zadowolonych klientów. Mam nadzieję, że będziesz kolejnym.',
  },
  {
    _id: '4',
    sender: 'me',
    content: 'Ja również mam taką nadzieję, jaki jest cennik?',
  },
  { _id: '5', sender: 'Mateusz', content: 'Hej, co tam u ciebie słychać?' },
  {
    _id: '6',
    sender: 'me',
    content: 'Bardzo dobrze, jestem zainteresowany lekcjami matematyki.',
  },
  {
    _id: '7',
    sender: 'Mateusz',
    content:
      'Korepetycji udzielam od wielu miesięcy i pod swoimi skrzydłami miałem wielu zadowolonych klientów. Mam nadzieję, że będziesz kolejnym.',
  },
  {
    _id: '8',
    sender: 'me',
    content: 'Ja również mam taką nadzieję, jaki jest cennik?',
  },
  { _id: '9', sender: 'Mateusz', content: 'Hej, co tam u ciebie słychać?' },
  {
    _id: '10',
    sender: 'me',
    content: 'Bardzo dobrze, jestem zainteresowany lekcjami matematyki.',
  },
  {
    _id: '11',
    sender: 'Mateusz',
    content:
      'Korepetycji udzielam od wielu miesięcy i pod swoimi skrzydłami miałem wielu zadowolonych klientów. Mam nadzieję, że będziesz kolejnym.',
  },
  {
    _id: '12',
    sender: 'me',
    content: 'Ja również mam taką nadzieję, jaki jest cennik?',
  },
];

const MessagesList = () => {
  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, []);

  return (
    <div className='flex flex-col gap-10 p-8 rounded-md flex-1 overflow-y-scroll scrollbar-hide w-full max-w-4xl m-auto'>
      {/* {messages.map((message) => {
        if (message.sender === 'me') {
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
      })} */}
      <p className='text-gray-500'>Strona w budowie</p>
    </div>
  );
};

export default MessagesList;
