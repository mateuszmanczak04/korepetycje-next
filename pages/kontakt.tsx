import Head from 'next/head';
import React from 'react';
import { AiFillPhone, AiFillMail, AiFillFacebook } from 'react-icons/ai';

const Kontakt = () => {
  const itemClasses =
    'flex items-center gap-2 p-2 bg-white shadow-lg rounded-md';

  return (
    <div className='flex flex-col gap-4 items-center'>
      <Head>
        <title>Kontakt - Korepetycje - Mateusz Mańczak</title>
      </Head>
      <h2 className='text-center'>Kontakt</h2>
      <div className={itemClasses}>
        <AiFillPhone className='w-6 h-6' />
        <p>725 726 901</p>
      </div>
      <div className={itemClasses}>
        <AiFillMail className='w-6 h-6' />
        <p>mateuszmanczak16@gmail.com</p>
      </div>
      <a
        href='https://www.facebook.com/mateusz.mancxzak/'
        target='_blank'
        rel='noreferrer'
        className={itemClasses}>
        <AiFillFacebook className='w-6 h-6' />
        Facebook
      </a>
    </div>
  );
};

export default Kontakt;
