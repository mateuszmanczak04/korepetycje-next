// TODO

import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  req: NextRequest,
  { params: { _id } }: { params: { _id: string } }
) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: 'Niepoprawny token.' });
    }

    await dbConnect();

    const review = await Review.findOne({ _id });

    if (!review) {
      return NextResponse.json({ message: 'Nie istnieje taka opinia.' });
    }

    if (review.author.toString() !== token._id) {
      return NextResponse.json({
        message: 'Nie możesz usunąć czyjejś opinii.',
      });
    }

    await Review.deleteOne({ _id });

    return NextResponse.json({});
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
