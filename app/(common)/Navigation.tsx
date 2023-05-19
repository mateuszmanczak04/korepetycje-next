'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Bars3Icon,
  HomeIcon,
  PhoneIcon,
  StarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { HiOutlineCog } from 'react-icons/hi';
import { CgDanger } from 'react-icons/cg';
import { AiOutlineMessage } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getCookiesAccepted } from '@/redux/settings';
import { fetchUserData, getIsAdmin } from '@/redux/user';

const Navigation = () => {
  const linkClasses =
    'p-4 rounded hover:bg-gray-100 flex gap-1 items-center text-center whitespace-nowrap';
  const activeLinkClasses = 'bg-gray-50 text-orange-500';
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  // redux
  const cookiesAccepted = useAppSelector(getCookiesAccepted);
  const isAdmin = useAppSelector(getIsAdmin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className='fixed top-0 left-0 w-full md:w-60 lg:w-80 md:h-full border-b md:border-r md:border-b-0 flex justify-center z-50 overflow-hidden flex-col'>
      {/* toggle button */}
      <button
        className={
          'p-2 hover:bg-white bg-gray-50 transition flex justify-center z-20 md:hidden'
        }
        onClick={() => setIsOpen((prev) => !prev)}>
        <Bars3Icon className='w-8 h-8' />
      </button>
      {/* bottom of the top */}
      <nav
        className={`px-2 py-2 h-full flex-col w-full bg-white ${
          isOpen ? 'flex' : 'hidden md:flex'
        }`}>
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
            (pathname && pathname.includes('/opinie') && activeLinkClasses)
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
            (pathname && pathname.includes('/kontakt') && activeLinkClasses)
          }
          onClick={handleClose}>
          <PhoneIcon className='w-5 h-5' />
          Kontakt
        </Link>
        <Link
          href='/chat'
          className={
            linkClasses +
            ' ' +
            (pathname && pathname.includes('/chat') && activeLinkClasses)
          }
          onClick={handleClose}>
          <AiOutlineMessage className='w-5 h-5' />
          Chat
        </Link>
        <Link
          href='/ustawienia'
          className={
            linkClasses +
            (pathname && pathname.includes('/ustawienia') && activeLinkClasses)
          }
          onClick={handleClose}>
          <HiOutlineCog className='w-5 h-5' />
          Ustawienia
        </Link>
        {cookiesAccepted === 'true' ? (
          <Link
            href='/konto'
            className={
              linkClasses +
              (pathname && pathname.includes('/konto') && activeLinkClasses)
            }
            onClick={handleClose}>
            <UserCircleIcon className='w-5 h-5' />
            Konto
          </Link>
        ) : (
          <p className='flex items-center gap-1 p-4 rounded-sm text-gray-300 cursor-not-allowed'>
            <UserCircleIcon className='w-5 h-5' />
            Konto
          </p>
        )}
        {isAdmin && (
          <Link
            href='/admin'
            className={
              linkClasses +
              (pathname && pathname.includes('/admin') && activeLinkClasses)
            }
            onClick={handleClose}>
            <CgDanger className='w-5 h-5' />
            Admin
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
