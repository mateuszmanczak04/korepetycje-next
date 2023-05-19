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
  if (req.method !== 'GET') {
    return res.status(400).end();
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Brakujący token.' });
    }

    const { _id } = req.query;

    if (!_id) {
      return res.status(400).json({ message: 'Podaj _id chatu.' });
    }

    await dbConnect();

    // const messages = await Message.find({ chat: _id }).sort({ timestamp: 1 });
    const messages = await Message.find();

    return res.status(200).json({ messages });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
