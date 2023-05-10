import React, { ReactNode, useEffect } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import CookiesConsent from './cookies/CookiesConsent';
import { useAppDispatch } from '@/redux/store';
import { fetchUserData } from '@/redux/user';
import ChatModal from './chat/ChatModal';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  // redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className='w-screen flex flex-col md:flex-row md:items-start items-center gap-8'>
      <TopBar />
      <div className='flex-col flex gap-8 w-full items-center md:ml-60 lg:ml-80'>
        <div className='flex-1 min-h-screen w-full max-w-3xl px-4 py-24 md:py-16'>
          {children}
        </div>
        <Footer />
        <CookiesConsent />
      </div>
    </div>
  );
};

export default Layout;
