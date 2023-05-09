import React, { ReactNode } from 'react';

const Error = ({ children }: { children: ReactNode }) => {
  return <div className='text-red-500 w-full text-center'>{children}</div>;
};

export default Error;
