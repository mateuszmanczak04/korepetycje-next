import dbConnect from '@/lib/dbConnect';
import Chat from '@/models/Chat';
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

    const { userId } = req.query;

    if (!userId) {
      return res
        .status(400)
        .json({ message: 'Podaj _id użytkownika z chatu.' });
    }

    await dbConnect();

    const chat = await Chat.find({ users: { $in: [userId, token._id] } });

    return res.status(200).json({ chat });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
