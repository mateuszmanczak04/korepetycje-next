import ListItem from '@/app/ListItem';

const PriceList = () => {
  return (
    <section className='flex flex-col gap-2'>
      <h3 className='bg-orange-300'>Cennik</h3>
      <ListItem text='50 zł za 50 minut' />
      <ListItem text='90 zł za 100 minut' smallText='Oszczędzasz 10 zł' />
      <ListItem
        text='Zestaw 5 dni korepetycji z rzędu za 200 zł'
        smallText='Oszczędzasz 50 zł'
      />
    </section>
  );
};

export default PriceList;
