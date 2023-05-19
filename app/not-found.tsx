'use client';

import Link from 'next/link';

const page = () => {
  return (
    <div className='w-full flex flex-col gap-8 items-center my-16'>
      <h2>Nie znaleziono strony</h2>
      <a href='/' className='btn-primary'>
        Wróć do strony głównej
      </a>
    </div>
  );
};

export default page;
