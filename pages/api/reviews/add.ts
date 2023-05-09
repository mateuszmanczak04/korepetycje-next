import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    const { title, rating } = req.body;

    if (!rating) {
      return res.status(400).json({ message: 'Brakuje oceny.' });
    }

    const token = await getToken({ req });

    if (!token) {
      return res
        .status(400)
        .json({ message: 'Niepoprawny lub brakujący token.' });
    }

    await dbConnect();

    const reviewExists = await Review.exists({ author: token._id });

    if (reviewExists) {
      return res
        .status(400)
        .json({ message: 'Nie możesz dodawać wielokrotnych opinii.' });
    }

    const now = Date.now();

    const newReview = await Review.create({
      title,
      author: token._id,
      rating,
      createdAt: now,
      hidden: true,
    });

    const populatedReview = await newReview.populate(
      'author',
      'email username imgUrl'
    );

    return res.status(200).json({ review: populatedReview });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
