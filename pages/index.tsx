import Hero from '@/components/Hero';
import Level from '@/components/Level';
import PriceList from '@/components/PriceList';
import Process from '@/components/Process';
import Head from 'next/head';

export default function Home() {
  return (
    <main className='flex flex-col gap-16'>
      <Head>
        <title>Korepetycje - Mateusz Mańczak</title>
      </Head>
      <Hero />
      <Level />
      <Process />
      <PriceList />
    </main>
  );
}
