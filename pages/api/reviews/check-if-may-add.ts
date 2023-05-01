import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(200).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(200).json({ mayAdd: false });
    }

    await dbConnect();

    const reviewExists = await Review.exists({
      author: token._id,
    });

    return res.status(200).json({ mayAdd: !reviewExists });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
