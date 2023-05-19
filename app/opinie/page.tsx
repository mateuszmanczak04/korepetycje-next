import AddReviewForm from '@/app/opinie/AddReviewForm';
import ReviewList from '@/app/opinie/ReviewList';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import dbConnect from '@/lib/dbConnect';
import Review from '@/models/Review';

export const metadata: Metadata = {
  title: 'Opinie',
  description: 'Sprawdź, co inni myślą o naszych lekcjach',
};

const page = async () => {
  let mayAdd = false;
  let reviews: Review[] = [];

  const session = await getServerSession(authOptions);

  try {
    await dbConnect();

    if (!session) {
      mayAdd = false;

      reviews = await Review.find({ hidden: false })
        .populate('author', 'username _id email imgUrl')
        .sort({ createdAt: -1 })
        .exec();
    } else {
      const reviewExists = await Review.exists({
        author: session.user._id,
      });
      mayAdd = !reviewExists;

      reviews = await Review.find({
        $or: [{ hidden: false }, { author: session.user._id }],
      })
        .populate('author', 'username _id email imgUrl')
        .sort({ createdAt: -1 })
        .exec();
    }
  } catch (err) {
    console.log(err);
    throw new Error('Błąd serwera.');
  }

  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <h2 className='w-full'>Opinie</h2>
      {mayAdd && <AddReviewForm />}
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default page;
