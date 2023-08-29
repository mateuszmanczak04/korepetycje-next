import Contact from './(components)/Contact';
import Hero from './(components)/Hero';
import Level from './(components)/Level';
import Location from './(components)/Location';
import PriceList from './(components)/PriceList';
import Process from './(components)/Process';
import { Metadata } from 'next';
import Reviews from './(components)/Reviews';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description: 'Strona główna',
};

export default function Page() {
  return (
    <main className='w-full mx-auto max-w-3xl px-4 pt-4 pb-16 flex flex-col gap-16'>
      <Hero />
      <Process />
      <Level />
      <Reviews />
      <PriceList />
      <Location />
      <Contact />
    </main>
  );
}
