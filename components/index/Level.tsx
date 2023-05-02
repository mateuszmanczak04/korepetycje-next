import React from 'react';
import ListItem from '../ListItem';

const Level = () => {
  return (
    <section className='flex flex-col gap-2'>
      <h2 className='bg-orange-300'>Poziom</h2>
      <ListItem text='Cała szkoła podstawowa' />
      <ListItem text='Całe liceum - podstawa' />
      <ListItem text='1. i 2. klasa liceum - rozszerzenie' />
    </section>
  );
};

export default Level;
