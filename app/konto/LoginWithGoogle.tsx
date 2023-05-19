'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const LoginWithGoogle = () => {
  const handleClick = async () => {
    await signIn('google');
  };

  return (
    <button
      className='bg-white shadow-md flex items-center gap-2 p-2 rounded hover:shadow-lg'
      onClick={handleClick}>
      <Image src='/google-logo.svg' alt='google logo' width={28} height={28} />
      <p>Zaloguj się z Google</p>
    </button>
  );
};

export default LoginWithGoogle;
