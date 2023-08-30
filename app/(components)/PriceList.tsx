import ListItem from '@/app/(components)/ListItem';
import ViewObserver from './ViewObserver';

/** A list of possible prices for a lesson. */
const PriceList = () => {
  return (
    <ViewObserver id='price-list'>
      <section className='flex flex-col gap-2'>
        <h2>Cennik</h2>
        <ListItem text='50 zł za 60 minut' />
        <ListItem text='90 zł za 120 minut' smallText='Oszczędzasz 10 zł' />
      </section>
    </ViewObserver>
  );
};

export default PriceList;
