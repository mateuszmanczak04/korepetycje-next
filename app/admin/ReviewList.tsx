import { useEffect, useState } from 'react';
import appAxios from '@/lib/appAxios';
import ReviewItem from './ReviewItem';
import LoadingComponent from '../(common)/LoadingComponent';

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    appAxios
      .get('/api/reviews/get-all')
      .then((res) => {
        setReviews(res.data.reviews);
      })
      .catch()
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingComponent size={128} />;

  return (
    <div>
      {reviews.map((review: Review) => (
        <ReviewItem
          key={review._id}
          title={review.title}
          author={review.author}
          createdAt={review.createdAt}
          rating={review.rating}
          _id={review._id}
          hidden={review.hidden}
        />
      ))}
    </div>
  );
};

export default ReviewList;
