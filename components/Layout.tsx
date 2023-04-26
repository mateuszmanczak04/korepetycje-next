import React, { ReactNode } from 'react';
import Navigation from './Navigation';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='w-screen flex flex-col items-center px-4 py-32 gap-8'>
      <Navigation />
      <div className='flex-1 w-full max-w-3xl'>{children}</div>
    </div>
  );
};

export default Layout;
