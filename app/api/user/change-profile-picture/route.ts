import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: 'Niepoprawny token.' });
    }

    const { imgUrl } = await req.json();

    if (!imgUrl) {
      return NextResponse.json({ message: 'Brakujące zdjęcie.' });
    }

    await dbConnect();

    await User.findOneAndUpdate({ _id: token._id }, { imgUrl });

    return NextResponse.json({});
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
