import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className='w-full flex justify-center'>
      <Image
        src='/loading-spinner.svg'
        alt='loading spinner'
        width={120}
        height={120}
      />
    </div>
  );
};

export default Loading;
