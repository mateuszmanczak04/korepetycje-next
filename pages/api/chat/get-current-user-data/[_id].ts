import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
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
      return res.status(400).json({ message: 'Podaj _id użytkownika.' });
    }

    await dbConnect();

    const user = await User.findById(_id).select('email imgUrl username');

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
