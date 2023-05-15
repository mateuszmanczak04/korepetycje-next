import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
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
      return res.status(400).json({ message: 'Brakujący token.' });
    }

    await dbConnect();

    const user = await User.findOne({ _id: token._id }).select('isAdmin');

    if (!user.isAdmin) {
      return res
        .status(400)
        .json({ message: 'Tylko administrator może to odczytać.' });
    }

    const reviews = await Review.find()
      .populate('author', 'username _id email imgUrl')
      .sort({ createdAt: -1 });

    return res.status(200).json({ reviews });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
