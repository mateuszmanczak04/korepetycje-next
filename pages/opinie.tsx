import AddReviewForm from '@/components/opinie/AddReviewForm';
import Head from 'next/head';
import React, { useEffect } from 'react';
import ReviewList from '@/components/opinie/ReviewList';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import {
  checkIfMayAddReview,
  fetchAllRevealedReviews,
  getReviewsError,
  getReviewsLoading,
} from '@/redux/review';
import Error from '@/components/Error';
import Loading from '@/components/Loading';

const Opinie = () => {
  // redux
  const error = useAppSelector(getReviewsError);
  const loading = useAppSelector(getReviewsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkIfMayAddReview());
    dispatch(fetchAllRevealedReviews());
  }, [dispatch]);

  if (loading)
    return (
      <div className='flex flex-col items-center w-full gap-8'>
        <Head>
          <title>Opinie - Korepetycje - Mateusz Mańczak</title>
        </Head>
        <Loading size={120} />
      </div>
    );

  if (error)
    return (
      <div className='flex flex-col items-center w-full gap-8'>
        <Head>
          <title>Opinie - Korepetycje - Mateusz Mańczak</title>
        </Head>
        <Error>{error}</Error>
      </div>
    );

  return (
    <div className='flex flex-col items-center w-full gap-4'>
      <Head>
        <title>Opinie - Korepetycje - Mateusz Mańczak</title>
      </Head>
      <h2 className='w-full'>Opinie</h2>
      <AddReviewForm />
      <ReviewList />
    </div>
  );
};

export default Opinie;
