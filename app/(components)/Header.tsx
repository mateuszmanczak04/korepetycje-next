import Image from 'next/image';

/** My image with a big header "Korepetycje Mateusz Mańczak". */
const Header = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row-reverse bg-primary-500 rounded-md overflow-hidden pt-4 pr-4'>
      <div className='flex flex-col w-full ml-4 sm:ml-0'>
        <h1 className='text-4xl font-extrabold text-primary-800 bg-primary-200 py-2 px-4 rounded-md w-fit'>
          Korepetycje
        </h1>
        <h3 className='text-xl text-primary-900 w-fit ml-4 mt-1 py-1 px-2 rounded-md bg-primary-300'>
          Mateusz Mańczak
        </h3>
      </div>
      <Image
        src='/images/me-without-background.png'
        alt='me'
        width={500}
        height={500}
        className='w-full max-w-xs aspect-square object-cover object-top'
      />
    </div>
  );
};

export default Header;
