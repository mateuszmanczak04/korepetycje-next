import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });

    if (!token) {
      return NextResponse.json({ message: 'Niepoprawny token.' });
    }

    await dbConnect();

    const user = await User.findById(token._id).select(
      'username _id email imgUrl isAdmin'
    );

    return NextResponse.json({ user });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
