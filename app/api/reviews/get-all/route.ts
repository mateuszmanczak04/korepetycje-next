import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });

    if (!token) {
      return NextResponse.json({ message: 'Brakujący token.' });
    }

    await dbConnect();
    const user = await User.findOne({ _id: token._id }).select('isAdmin');

    if (!user.isAdmin) {
      return NextResponse.json({
        message: 'Tylko administrator może to odczytać.',
      });
    }

    const reviews = await Review.find()
      .populate('author', 'username _id email imgUrl')
      .sort({ createdAt: -1 });

    return NextResponse.json({ reviews });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
