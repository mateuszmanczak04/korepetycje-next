import AddReviewForm from '@/components/opinie/AddReviewForm';
import Head from 'next/head';
import React, { useEffect } from 'react';
import ReviewList from '@/components/opinie/ReviewList';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import {
  checkIfMayAddReview,
  fetchAllReviews,
  getReviewsError,
  getReviewsLoading,
} from '@/redux/review';

const Opinie = () => {
  // redux
  const error = useAppSelector(getReviewsError);
  const loading = useAppSelector(getReviewsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkIfMayAddReview());
    dispatch(fetchAllReviews());
  }, [dispatch]);

  if (loading)
    return (
      <div className='flex flex-col items-center w-full gap-8'>
        <Head>
          <title>Opinie - Korepetycje - Mateusz Mańczak</title>
        </Head>
        <p className='w-full text-center'>Ładowanie...</p>;
      </div>
    );

  if (error)
    return (
      <div className='flex flex-col items-center w-full gap-8'>
        <Head>
          <title>Opinie - Korepetycje - Mateusz Mańczak</title>
        </Head>
        <p className='text-red-500 w-full text-center'>{error}</p>;
      </div>
    );

  return (
    <div className='flex flex-col items-center w-full gap-8'>
      <Head>
        <title>Opinie - Korepetycje - Mateusz Mańczak</title>
      </Head>
      <AddReviewForm />
      <ReviewList />
    </div>
  );
};

export default Opinie;
