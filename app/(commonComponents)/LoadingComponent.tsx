'use client';

import Image from 'next/image';

const LoadingComponent = ({ size }: { size: number }) => {
  return (
    <div className='w-full flex justify-center'>
      <Image
        src='/loading-spinner.svg'
        alt='loading spinner'
        width={size || 64}
        height={size || 64}
      />
    </div>
  );
};

export default LoadingComponent;
