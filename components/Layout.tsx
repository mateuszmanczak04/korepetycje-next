import React, { ReactNode, useEffect } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import CookiesConsent from './cookies/CookiesConsent';
import { useAppDispatch } from '@/redux/store';
import { fetchUserData } from '@/redux/user';
import DefaultPageLayout from './DefaultPageLayout';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  // redux
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const router = useRouter();

  return (
    <div className='w-screen flex flex-col md:flex-row md:items-start items-center gap-8'>
      <TopBar />
      {router.pathname.includes('/chat') ? (
        <>{children}</>
      ) : (
        <DefaultPageLayout>{children}</DefaultPageLayout>
      )}
    </div>
  );
};

export default Layout;
