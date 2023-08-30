import { Metadata } from 'next';
import Contact from './(components)/Contact';
import Header from './(components)/Header';
import Introduction from './(components)/Introduction';
import Level from './(components)/Level';
import Location from './(components)/Location';
import PriceList from './(components)/PriceList';
import Process from './(components)/Process';
import Reviews from './(components)/Reviews';
import SideList from './(components)/SideList';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description: 'Strona główna',
};

export default function Page() {
  return (
    <main className='w-full mx-auto max-w-5xl px-4 pt-4 pb-80 flex flex-col gap-4'>
      <Header />
      <div className='flex gap-4'>
        <div className='flex-1 flex flex-col gap-16'>
          <Introduction />
          <Process />
          <Level />
          <Reviews />
          <PriceList />
          <Location />
          <Contact />
        </div>
        <SideList />
      </div>
    </main>
  );
}
