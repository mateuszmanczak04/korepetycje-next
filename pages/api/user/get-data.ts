import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Niepoprawny token.' });
    }

    await dbConnect();

    const user = await User.findById(token._id).select(
      'username _id email imgUrl'
    );

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
