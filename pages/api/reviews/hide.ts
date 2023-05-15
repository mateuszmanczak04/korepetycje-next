import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import User from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    return res.status(400).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Niepoprawny token.' });
    }

    await dbConnect();

    const user = await User.findOne({ _id: token._id }).select('isAdmin');

    if (!user.isAdmin) {
      return res
        .status(400)
        .json({ message: 'Tylko administrator może to zrobić.' });
    }

    const { reviewId } = req.body;

    if (!reviewId) {
      return res.status(400).json({ message: 'Brak _id opinii.' });
    }

    const reviewExists = await Review.exists({ _id: reviewId });

    if (!reviewExists) {
      return res.status(400).json({ message: 'Opinia nie istnieje.' });
    }

    await Review.updateOne({ _id: reviewId }, { hidden: true });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
