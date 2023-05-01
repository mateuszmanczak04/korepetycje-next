import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(400).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Niepoprawny token.' });
    }

    dbConnect();

    const review = await Review.findOne({ _id: req.query._id });

    if (review.author.toString() !== token._id) {
      return res
        .status(400)
        .json({ message: 'Nie możesz usunąć czyjejś opinii.' });
    }

    await Review.deleteOne({ _id: req.query._id });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
