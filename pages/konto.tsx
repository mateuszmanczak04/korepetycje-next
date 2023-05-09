import Head from 'next/head';
import React, { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import LoginWithGoogle from '@/components/konto/LoginWithGoogle';
import EditUserData from '@/components/konto/EditUserData';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fetchUserData, getUserError, getUserLoading } from '@/redux/user';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

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

  if (!session) {
    return (
      <div className='w-full justify-center flex'>
        <LoginWithGoogle />
      </div>
    );
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  if (loading) {
    // return <p className='w-full text-center'>Ładowanie...</p>;
    return <Loading />;
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <Head>
        <title>Konto - Korepetycje - Mateusz Mańczak</title>
      </Head>
      <h2>Konto</h2>
      <EditUserData />
    </div>
  );
};

export default Konto;
