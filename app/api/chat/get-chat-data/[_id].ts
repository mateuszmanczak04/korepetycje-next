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
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Brakujący token.' });
    }

    const { _id } = req.query;

    if (!_id) {
      return res.status(400).json({ message: 'Podaj _id chatu.' });
    }

    await dbConnect();

    const isItMyChat = await UserInChat.exists({ user: token._id, chat: _id });

    if (!isItMyChat) {
      return res
        .status(400)
        .json({
          message:
            'Nie możesz zdobyć informacje o chacie, do którego nie należysz.',
        });
    }

    const chat = await Chat.findById(_id);

    return res.status(200).json({ chat });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
