import { getServerSession } from 'next-auth';
import ChatsList from './ChatsList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat',
  description: 'Napisz prywatną wiadomość do innych użytkowników.',
};

const page = async () => {
  const session = await getServerSession();

  if (!session)
    return (
      <div className='w-full h-full grid place-items-center'>
        <p className='text-gray-600 text-lg'>
          Dostęp do chatu mają tylko osoby zalogowane.
        </p>
      </div>
    );

  return (
    <div className='w-full h-full flex'>
      <div className='w-full hidden md:flex flex-1 h-full justify-center items-center'>
        <p className='text-gray-600 text-lg'>Wybierz chat, aby pisać</p>
      </div>
      {/* @ts-expect-error Server Component */}
      <ChatsList />
    </div>
  );
};

export default page;
