import ChatsList from './ChatsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Napisz prywatną wiadomość do innych użytkowników.',
};

const Page = () => {
  return <p>Strona w budowie</p>;

  return (
    <div className='w-full h-full flex mt-12 md:mt-0 md:ml-60 lg:ml-80'>
      <div className='hidden sm:flex flex-1 flex-col h-screen justify-center items-center'>
        <p className='text-gray-600 text-lg'>Wybierz chat, aby pisać</p>
      </div>
      <div className='w-full sm:w-60 md:w-80'>
        <ChatsList chatId='' />
      </div>
    </div>
  );
};

export default Page;
