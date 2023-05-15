import dbConnect from '@/lib/dbConnect';
import Chat from '@/models/Chat';
import User from '@/models/User';
import UserInChat from '@/models/UserInChat';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(400).end();
  }

  try {
    const token: any = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Brakujący token.' });
    }

    await dbConnect();

    const meInChats = await UserInChat.find({ user: token._id });

    let chats: any[] = [];

    await Promise.all(
      meInChats.map(async (meInChat) => {
        const chat = await Chat.findById(meInChat.chat);
        chats.push(chat);
        chats = chats.sort((a, b) =>
          a.lastMessageTimestamp > b.lastMessageTimestamp ? 1 : -1
        );
      })
    );

    // TODO add names to chats

    return res.status(200).json({ chats });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
