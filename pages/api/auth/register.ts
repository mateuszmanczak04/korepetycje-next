import dbConnect from '@/lib/dbConnect';
import validateEmail from '@/lib/validateEmail';
import User from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { email, username, password } = req.body;

    if (!email.trim() || !username.trim() || !password.trim()) {
      return res
        .status(400)
        .json({ message: 'Brakujący email, nazwa użytkownika lub hasło.' });
    }

    if (password.trim().length < 6) {
      return res
        .status(400)
        .json({ message: 'Hasło musi mieć co najmniej 6 znaków.' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Niepoprawny email.' });
    }

    await dbConnect();

    const userExists = await User.exists({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ message: 'Taki email istnieje już w naszej bazie danych.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email: email.trim(),
      username: username.trim(),
      password: hashedPassword,
    });

    return res.status(200).json({ message: 'Pomyślnie utworzono konto.' });
  } catch (err) {
    return res.status(500).json({ message: 'Błąd serwera.' });
  }
}
