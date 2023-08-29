import ListItem from '@/app/ListItem';

const Level = () => {
  return (
    <section className='flex flex-col gap-2'>
      <h3 className='bg-orange-300'>Poziom</h3>
      <ListItem text='Cała szkoła podstawowa' />
      <ListItem text='Cała szkoła średnia - podstawa i rozszerzenie' />
    </section>
  );
};

export default Level;
