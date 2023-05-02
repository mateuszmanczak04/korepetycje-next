import Head from 'next/head';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import LoginWithGoogle from '@/components/konto/LoginWithGoogle';
import EditUserData from '@/components/konto/EditUserData';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fetchUserData, getUserError, getUserLoading } from '@/redux/user';

const Konto = () => {
  // session
  const { data: session } = useSession();

  // redux
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getUserLoading);
  const error = useAppSelector(getUserError);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (error) {
    return <p className='text-red-500 w-full text-center'>{error}</p>;
  }

  if (loading) {
    return <p className='w-full text-center'>Loading...</p>;
  }

  if (!session) {
    return (
      <div className='w-full justify-center flex'>
        <LoginWithGoogle />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Konto - Korepetycje - Mateusz Mańczak</title>
      </Head>
      <EditUserData />
    </div>
  );
};

export default Konto;
