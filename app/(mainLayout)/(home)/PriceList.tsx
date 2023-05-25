import ListItem from '@/app/ListItem';

const PriceList = () => {
  return (
    <section className='flex flex-col gap-2'>
      <h3 className='bg-orange-300'>Cennik</h3>
      <ListItem text='70 zł za 60 minut' />
      <ListItem text='130 zł za 120 minut' smallText='Oszczędzasz 10 zł' />
      <ListItem
        text='Zestaw 5 dni korepetycji z rzędu za 300 zł'
        smallText='Oszczędzasz 50 zł'
      />
    </section>
  );
};

export default PriceList;