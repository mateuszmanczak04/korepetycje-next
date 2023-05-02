import Head from 'next/head';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import LoginOrRegister from '@/components/konto/LoginOrRegister';
import appAxios from '../lib/appAxios';
import LoginWithGoogle from '@/components/konto/LoginWithGoogle';

const Konto = () => {
  // session
  const { data: session } = useSession();

  if (!session) {
    // return <LoginOrRegister />;
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
      <p>Strona w budowie</p>
      <p>{session && session?.user?.email}</p>
      <button
        onClick={() => signOut({ redirect: false })}
        className='btn-primary'>
        Wyloguj
      </button>
    </div>
  );
};

export default Konto;
