import dbConnect from '@/lib/dbConnect';
import Chat from '@/models/Chat';
import User from '@/models/User';
import UserInChat from '@/models/UserInChat';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params: { _id } }: { params: { _id: string } }
) {
  try {
    const token = await getToken({ req });

    if (!token) {
      return NextResponse.json({ message: 'Brakujący token.' });
    }

    if (!_id) {
      return NextResponse.json({ message: 'Podaj _id chatu.' });
    }

    await dbConnect();

    const isItMyChat = await UserInChat.exists({ user: token._id, chat: _id });

    if (!isItMyChat) {
      return NextResponse.json({
        message:
          'Nie możesz zdobyć informacje o chacie, do którego nie należysz.',
      });
    }

    const chat = await Chat.findById(_id);

    return NextResponse.json({ chat });
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Błąd serwera' }), {
      status: 500,
    });
  }
}
