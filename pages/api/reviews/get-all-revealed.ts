import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    await dbConnect();
    const reviews = await Review.find({ hidden: false })
      .populate('author', 'username _id email imgUrl')
      .sort({ createdAt: -1 });

    return res.status(200).json({ reviews });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
