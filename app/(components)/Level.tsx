import ListItem from '@/app/(components)/ListItem';
import ViewObserver from './ViewObserver';

/** Level of the school I can teach. */
const Level = () => {
  return (
    <ViewObserver id='level'>
      <section className='flex flex-col gap-2'>
        <h2>Poziom</h2>
        <ListItem text='Cała szkoła podstawowa' />
        <ListItem text='Cała szkoła średnia - podstawa i rozszerzenie' />
      </section>
    </ViewObserver>
  );
};

export default Level;
