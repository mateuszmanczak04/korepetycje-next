import Image from 'next/image';
import React from 'react';

const Loading = ({ size }: { size: number }) => {
  return (
    <div className='w-full flex justify-center'>
      <Image
        src='/loading-spinner.svg'
        alt='loading spinner'
        width={size}
        height={size}
      />
    </div>
  );
};

export default Loading;
