import Hero from '../Hero';
import Level from './(home)/Level';
import PriceList from './(home)/PriceList';
import Process from './(home)/Process';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description: 'Strona główna',
};

export default function Page() {
  return (
    <main className='flex flex-col gap-16'>
      <Hero />
      <Level />
      <Process />
      <PriceList />
    </main>
  );
}
