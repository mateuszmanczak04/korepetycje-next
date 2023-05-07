import React, { ReactNode } from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import CookiesConsent from './cookies/CookiesConsent';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='w-screen flex flex-col items-center gap-8'>
      <TopBar />
      <div className='flex-1 min-h-screen w-full max-w-3xl px-4 py-36'>
        {children}
      </div>
      <Footer />
      <CookiesConsent />
    </div>
  );
};

export default Layout;
