'use client';

import Head from 'next/head';
import { useSession } from 'next-auth/react';
import LoginWithGoogle from './LoginWithGoogle';
import EditUserData from './EditUserData';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getUserError, getUserLoading, logout } from '@/redux/user';
import ErrorComponent from '@/app/(commonComponents)/ErrorComponent';
import LoadingComponent from '@/app/(commonComponents)/LoadingComponent';

const Account = () => {
  // session
  const { data: session } = useSession();

  // redux
  const error = useAppSelector(getUserError);
  const loading = useAppSelector(getUserLoading);
  const dispatch = useAppDispatch();

  if (error) return error && <ErrorComponent>{error}</ErrorComponent>;

  if (loading) return <LoadingComponent size={128} />;

  if (!session)
    return (
      <div className='w-full justify-center flex'>
        <LoginWithGoogle />
      </div>
    );

  return (
    <div className='w-full flex flex-col gap-4'>
      <h2>Konto</h2>
      <EditUserData />
      {session && (
        <button
          onClick={() => dispatch(logout())}
          className='text-orange-500 bg-orange-100 rounded px-2 py-1 hover:bg-orange-200 transition'>
          Wyloguj
        </button>
      )}
    </div>
  );
};

export default Account;
