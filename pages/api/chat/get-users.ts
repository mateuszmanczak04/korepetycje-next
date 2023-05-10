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

    await dbConnect();

    const users = await User.find({ _id: { $ne: token._id } }).select(
      'email imgUrl username'
    );

    return res.status(200).json({ users });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
