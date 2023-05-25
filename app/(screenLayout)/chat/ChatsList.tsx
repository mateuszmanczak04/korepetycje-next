import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import dbConnect from '@/lib/dbConnect';
import Chat from '@/models/Chat';
import Image from 'next/image';

const ChatsList = async () => {
  let chats: Chat[] = [];
  const session = await getServerSession(authOptions);

  try {
    await dbConnect();

    if (session) {
      chats = await Chat.find({}).populate('members', 'username imgUrl');
    }

    chats = chats.map((chat) => {
      chat.members = chat.members.filter(
        (member) => member._id.toString() !== session?.user._id.toString()
      );
      chat.name = chat.members.map((member) => member.username).join(', ');
      chat.images = chat.members.map((member) => member.imgUrl);
      return chat;
    });
  } catch (err) {
    throw new Error('Błąd serwera.');
  }

  return (
    <div className='w-full md:w-60 lg:w-80 border-l'>
      {chats &&
        chats.map((chat: any) => (
          <Link
            href={`/chat/${chat._id}`}
            key={chat._id}
            className='flex items-center gap-2 p-2 border-b hover:bg-gray-100 cursor-pointer w-full'>
            {chat.images.slice(0, 3).map((imgUrl: string) => (
              <Image
                key={imgUrl}
                src={imgUrl}
                alt='avatar'
                width={24}
                height={24}
                className='aspect-square rounded-full object-cover'
              />
            ))}
            <p className='whitespace-nowrap truncate flex-1'>{chat.name}</p>
          </Link>
        ))}
    </div>
  );
};

export default ChatsList;
