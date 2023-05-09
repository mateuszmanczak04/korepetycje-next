import React, { useEffect, useState } from 'react';
import appAxios from '../../lib/appAxios';
import { useAppSelector } from '@/redux/store';
import { getReviews } from '@/redux/review';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    appAxios
      .get('/api/reviews/get-all')
      .then((res) => {
        console.log(res);
        setReviews(res.data.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
