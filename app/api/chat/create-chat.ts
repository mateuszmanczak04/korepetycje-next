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
  if (req.method !== 'POST') {
    return res.status(400).end();
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Brakujący token.' });
    }

    const { _id } = req.body;

    if (!_id) {
      return res
        .status(400)
        .json({ message: 'Podaj _id użytkownika do chatu.' });
    }

    await dbConnect();

    const chat = await Chat.create({ users: [token._id, _id] });

    return res.status(200).json({ chat });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
