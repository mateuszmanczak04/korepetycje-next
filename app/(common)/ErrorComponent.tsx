'use client';

const ErrorComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className='text-red-500 w-full text-center'>{children}</div>;
};

export default ErrorComponent;
