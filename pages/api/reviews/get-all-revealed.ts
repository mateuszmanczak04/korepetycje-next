import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import mongoose from 'mongoose';
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

    await dbConnect();
    let reviews = [];

    if (token) {
      reviews = await Review.find({
        $or: [{ hidden: false }, { author: token._id }],
      })
        .populate('author', 'username _id email imgUrl')
        .sort({ createdAt: -1 });
    } else {
      reviews = await Review.find({ hidden: false })
        .populate('author', 'username _id email imgUrl')
        .sort({ createdAt: -1 });
    }

    return res.status(200).json({ reviews });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
