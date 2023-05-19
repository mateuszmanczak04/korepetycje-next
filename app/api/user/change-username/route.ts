import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: 'Niepoprawny token.' });
    }

    await dbConnect();

    const { username }: { username: string } = await req.json();

    if (!username || username.trim().length === 0) {
      return NextResponse.json({ message: 'Niepoprawna nazwa użytkownika' });
    }

    if (username.length > 30) {
      return NextResponse.json({
        message: 'Maksymalna długość nazwy użytkownika to 30 znaków.',
      });
    }

    await User.findOneAndUpdate({ _id: token._id }, { username });

    return NextResponse.json({
      message: 'Pomyślnie zmieniono nazwę użytkownika.',
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
