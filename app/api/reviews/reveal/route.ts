import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import User from '@/models/User';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: 'Niepoprawny token.' });
    }

    await dbConnect();

    const user = await User.findOne({ _id: token._id }).select('isAdmin');

    if (!user) {
      return NextResponse.json({ message: 'Nie znaleziono użytkownika.' });
    }

    if (!user.isAdmin) {
      return NextResponse.json({
        message: 'Tylko administrator może to zrobić.',
      });
    }

    const { reviewId } = await req.json();

    if (!reviewId) {
      return NextResponse.json({ message: 'Brak _id opinii.' });
    }

    const reviewExists = await Review.exists({ _id: reviewId });

    if (!reviewExists) {
      return NextResponse.json({ message: 'Opinia nie istnieje.' });
    }

    await Review.updateOne({ _id: reviewId }, { hidden: false });

    return NextResponse.json({});
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
