type Props = { text: string; smallText?: string };

const ListItem = ({ text, smallText }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-1'>
        <svg
          className='bg-primary-500 rounded w-4 h-4 text-white'
          fill='none'
          stroke='currentColor'
          strokeWidth='3'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12.75l6 6 9-13.5'></path>
        </svg>
        <p>{text}</p>
      </div>
      <p className='text-gray-500 text-sm'>{smallText}</p>
    </div>
  );
};

export default ListItem;
