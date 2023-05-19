import ReviewItem from './ReviewItem';

type Props = { reviews: Review[] };

const ReviewList = ({ reviews }: Props) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      {reviews.length === 0 && (
        <div className='w-full flex flex-col items-center'>
          <p className='text-center'>
            Pusto tu trochę, może podzielisz się wrażeniami z lekcji?
          </p>
          <p className='text-center text-sm text-gray-500'>
            (Aby to zrobić, musisz założyć konto)
          </p>
        </div>
      )}
      {reviews.map((review: Review) => (
        <ReviewItem
          _id={review._id}
          key={review._id}
          title={review.title}
          author={review.author}
          createdAt={review.createdAt}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default ReviewList;
