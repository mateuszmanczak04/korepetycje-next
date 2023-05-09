import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  Bars3Icon,
  BuildingStorefrontIcon,
  GlobeAltIcon,
  HomeIcon,
  PhoneIcon,
  StarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { HiOutlineCog } from 'react-icons/hi';
import { signOut, useSession } from 'next-auth/react';
import { useAppSelector } from '@/redux/store';
import { getCookiesAccepted } from '@/redux/settings';
import { getIsAdmin } from '@/redux/user';

const TopBar = () => {
  const linkClasses = 'p-2 rounded hover:bg-gray-100 flex gap-1 items-center';
  const activeLinkClasses = 'bg-gray-50 text-orange-500';
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  // redux
  const cookiesAccepted = useAppSelector(getCookiesAccepted);
  const isAdmin = useAppSelector(getIsAdmin);

  // session
  const { data: session } = useSession();

  return (
    <div className='fixed top-0 left-0 right-0 w-full flex justify-center bg-white shadow-lg z-100 overflow-hidden'>
      <div className='max-w-4xl w-full flex flex-col'>
        <div className='items-center bg-white w-full flex justify-end text-sm border-b z-20 gap-2 p-1'>
          <Link
            href='/ustawienia'
            className={
              'flex items-center gap-1 py-1 px-2 rounded-sm ' +
              (pathname.includes('/ustawienia') &&
                'text-orange-500 bg-gray-100')
            }>
            <HiOutlineCog className='w-5 h-5' />
            Ustawienia
          </Link>
          {cookiesAccepted === 'true' ? (
            <Link
              href='/konto'
              className={
                'flex items-center gap-1 py-1 px-2 rounded-sm ' +
                (pathname.includes('/konto') && 'text-orange-500 bg-gray-100')
              }
              onClick={handleClose}>
              <UserCircleIcon className='w-5 h-5' />
              Konto
            </Link>
          ) : (
            <p className='flex items-center gap-1 py-1 px-2 rounded-sm text-gray-300 cursor-not-allowed'>
              <UserCircleIcon className='w-5 h-5' />
              Konto
            </p>
          )}
          {session && (
            <button
              onClick={() => signOut({ redirect: false })}
              className='text-orange-500 bg-orange-100 rounded px-2 py-1 hover:bg-orange-200 transition'>
              Wyloguj
            </button>
          )}
          {isAdmin && <Link href='/admin'>Admin</Link>}
        </div>
        <button
          className={linkClasses + ' flex justify-center z-20 md:hidden'}
          onClick={() => setIsOpen((prev) => !prev)}>
          <Bars3Icon className='w-8 h-8' />
        </button>
        <div
          className={`${
            isOpen ? 'h-60' : 'h-0'
          } bg-white transition-all md:h-min`}>
          <nav
            className={`px-2 py-2 h-full flex-col justify-between flex md:flex-row w-full  md:justify-between`}>
            <Link
              href='/'
              className={
                linkClasses + ' ' + (pathname === '/' && activeLinkClasses)
              }
              onClick={handleClose}>
              <HomeIcon className='w-5 h-5' />
              Strona główna
            </Link>
            <Link
              href='/opinie'
              className={
                linkClasses +
                ' ' +
                (pathname.includes('/opinie') && activeLinkClasses)
              }
              onClick={handleClose}>
              <StarIcon className='w-5 h-5' />
              Opinie
            </Link>
            <Link
              href='/kontakt'
              className={
                linkClasses +
                ' ' +
                (pathname.includes('/kontakt') && activeLinkClasses)
              }
              onClick={handleClose}>
              <PhoneIcon className='w-5 h-5' />
              Kontakt
            </Link>
            <Link
              href='/sklep'
              className={
                linkClasses +
                ' ' +
                (pathname.includes('/sklep') && activeLinkClasses)
              }
              onClick={handleClose}>
              <BuildingStorefrontIcon className='w-5 h-5' />
              Sklep
            </Link>
            <Link
              href='/strony-internetowe'
              className={
                linkClasses +
                ' ' +
                (pathname.includes('/strony-internetowe') && activeLinkClasses)
              }
              onClick={handleClose}>
              <GlobeAltIcon className='w-5 h-5' />
              Strony internetowe
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
