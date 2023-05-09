import Head from 'next/head';
import React from 'react';
import { useSession } from 'next-auth/react';
import LoginWithGoogle from '@/components/konto/LoginWithGoogle';
import EditUserData from '@/components/konto/EditUserData';
import { useAppSelector } from '@/redux/store';
import { getUserError, getUserLoading } from '@/redux/user';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

const Konto = () => {
  // session
  const { data: session } = useSession();

  // redux
  const loading = useAppSelector(getUserLoading);
  const error = useAppSelector(getUserError);

  if (!session) {
    return (
      <div className='w-full justify-center flex'>
        <Head>
          <title>Konto - Korepetycje - Mateusz Mańczak</title>
        </Head>
        <LoginWithGoogle />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Konto - Korepetycje - Mateusz Mańczak</title>
        </Head>
        <Error>{error}</Error>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Head>
          <title>Konto - Korepetycje - Mateusz Mańczak</title>
        </Head>
        <Loading size={120} />
      </>
    );
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
