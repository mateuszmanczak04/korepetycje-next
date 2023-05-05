import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH') {
    return res.status(400).json({ message: 'Nieodpowiednia metoda.' });
  }

  try {
    const token = await getToken({ req });

    if (!token) {
      return res.status(400).json({ message: 'Niepoprawny token.' });
    }

    await dbConnect();

    const { username }: { username: string } = req.body;

    if (!username || username.trim().length === 0) {
      return res.status(400).json({ message: 'Niepoprawna nazwa użytkownika' });
    }

    if (username.length > 30) {
      return res.status(400).json({
        message: 'Maksymalna długość nazwy użytkownika to 30 znaków.',
      });
    }

    await User.findOneAndUpdate({ _id: token._id }, { username });

    return res
      .status(200)
      .json({ message: 'Pomyślnie zmieniono nazwę użytkownika.' });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera' });
  }
}
