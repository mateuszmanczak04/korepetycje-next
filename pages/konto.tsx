import Head from 'next/head';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import LoginOrRegister from '@/components/konto/LoginOrRegister';

const Konto = () => {
  // session
  const { data: session } = useSession();

  if (!session) {
    return <LoginOrRegister />;
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
