import dbConnect from '@/lib/dbConnect';
import Message from '@/models/Message';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });

    console.log(token);

    if (!token) {
      return NextResponse.json({ message: 'Brakujący token.' });
    }

    const { content, chatId } = await req.json();

    if (!content || !chatId) {
      return NextResponse.json({ message: 'Brakująca treść lub _id chatu.' });
    }

    await dbConnect();

    const message = await Message.create({
      sender: token._id,
      chat: chatId,
      content: content,
      timestamp: Date.now(),
    });

    return NextResponse.json({ message });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
