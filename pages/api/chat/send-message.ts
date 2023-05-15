import dbConnect from '@/lib/dbConnect';
import Chat from '@/models/Chat';
import Message from '@/models/Message';
import User from '@/models/User';
import UserInChat from '@/models/UserInChat';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(400).end();
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Brakujący token.' });
    }

    const { content, chatId } = req.body;

    if (!content || !chatId) {
      return res
        .status(400)
        .json({ message: 'Brakująca treść lub _id chatu.' });
    }

    await dbConnect();

    const message = await Message.create({
      sender: token._id,
      chat: chatId,
      content: content,
      timestamp: Date.now(),
    });

    return res.status(200).json({ message });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
