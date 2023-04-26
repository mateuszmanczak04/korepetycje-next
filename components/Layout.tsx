import React, { ReactNode } from 'react';
import TopBar from './TopBar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='w-screen flex flex-col items-center px-4 py-40 gap-8'>
      <TopBar />
      <div className='flex-1 w-full max-w-3xl'>{children}</div>
    </div>
  );
};

export default Layout;
