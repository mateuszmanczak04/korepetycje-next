import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { title, rating } = await req.json();

    if (!rating) {
      return NextResponse.json({ message: 'Brakuje oceny.' });
    }

    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: 'Niepoprawny lub brakujący token.' });
    }

    await dbConnect();

    const reviewExists = await Review.exists({ author: token._id });

    if (reviewExists) {
      return NextResponse.json({
        message: 'Nie możesz dodawać wielokrotnych opinii.',
      });
    }

    const now = Date.now();

    const newReview = await Review.create({
      title,
      author: token._id,
      rating,
      createdAt: now,
      hidden: true,
    });

    const populatedReview = await newReview.populate(
      'author',
      'email username imgUrl'
    );

    return NextResponse.json({ review: populatedReview });
  } catch (err) {
    return NextResponse.json({ message: 'Błąd serwera.' });
  }
}
