import ListItem from '@/app/(components)/ListItem';

const PriceList = () => {
  return (
    <section className='flex flex-col gap-2'>
      <h2>Cennik</h2>
      <ListItem text='50 zł za 60 minut' />
      <ListItem text='90 zł za 120 minut' smallText='Oszczędzasz 10 zł' />
    </section>
  );
};

export default PriceList;
