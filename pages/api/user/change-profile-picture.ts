import dbConnect from '@/lib/dbConnect';
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

    const { imgUrl } = req.body;

    if (!imgUrl) {
      return res.status(400).json({ message: 'Brakujące zdjęcie.' });
    }

    await dbConnect();

    await User.findOneAndUpdate({ _id: token._id }, { imgUrl });

    return res.status(200).end();
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
