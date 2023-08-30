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
import Footer from './(components)/Footer';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description: 'Strona główna',
};

export default function Page() {
  return (
    <main className='w-screen flex flex-col gap-4 mt-4'>
      <Header />
      <div className='flex gap-4 px-4 w-full mx-auto max-w-5xl'>
        <div className='flex-1 flex flex-col gap-16 pb-[30rem]'>
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
      <Footer />
    </main>
  );
}
