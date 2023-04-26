import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navigation = () => {
  const linkClasses = 'p-2 rounded hover:bg-gray-100';
  const activeLinkClasses = 'bg-gray-50 text-orange-500';
  const { pathname } = useRouter();

  return (
    <aside className='fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-5xl  gap-4 flex flex-col bg-white shadow-lg py-2 px-4 rounded-md'>
      <div className='flex w-full justify-between gap-4'>
        <Link
          href='/'
          className={
            linkClasses + ' ' + (pathname === '/' && activeLinkClasses)
          }>
          Strona główna
        </Link>
        <Link
          href='/opinie'
          className={
            linkClasses +
            ' ' +
            (pathname.includes('/opinie') && activeLinkClasses)
          }>
          Opinie
        </Link>
        <Link
          href='/kontakt'
          className={
            linkClasses +
            ' ' +
            (pathname.includes('/kontakt') && activeLinkClasses)
          }>
          Kontakt
        </Link>
        <Link
          href='/sklep'
          className={
            linkClasses +
            ' ' +
            (pathname.includes('/sklep') && activeLinkClasses)
          }>
          Sklep
        </Link>
        <Link
          href='/strony-internetowe'
          className={
            linkClasses +
            ' ' +
            (pathname.includes('/strony-internetowe') && activeLinkClasses)
          }>
          Strony internetowe
        </Link>
        <Link
          href='/konto'
          className={
            linkClasses +
            ' ' +
            (pathname.includes('/konto') && activeLinkClasses)
          }>
          Konto
        </Link>
      </div>
    </aside>
  );
};

export default Navigation;
