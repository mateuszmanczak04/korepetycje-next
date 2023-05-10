import React, { ReactNode } from 'react';
import Footer from './Footer';
import CookiesConsent from './cookies/CookiesConsent';

const DefaultPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex-col flex gap-8 w-full items-center md:ml-60 lg:ml-80'>
      <div className='flex-1 min-h-screen w-full max-w-3xl px-4 py-16 md:py-8'>
        {children}
      </div>
      <Footer />
      <CookiesConsent />
    </div>
  );
};

export default DefaultPageLayout;
