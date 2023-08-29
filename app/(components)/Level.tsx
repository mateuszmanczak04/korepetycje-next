import ListItem from '@/app/(components)/ListItem';

const Level = () => {
  return (
    <section className='flex flex-col gap-2'>
      <h2>Poziom</h2>
      <ListItem text='Cała szkoła podstawowa' />
      <ListItem text='Cała szkoła średnia - podstawa i rozszerzenie' />
    </section>
  );
};

export default Level;
