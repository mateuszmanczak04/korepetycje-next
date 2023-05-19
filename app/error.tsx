'use client';

const page = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className='w-full flex flex-col gap-8 my-16 items-center'>
      <h2>{error.message}</h2>
      <button className='btn-primary' onClick={reset}>
        Spróbuj ponownie
      </button>
    </div>
  );
};

export default page;
