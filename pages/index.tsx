import Hero from '@/components/index/Hero';
import Level from '@/components/index/Level';
import PriceList from '@/components/index/PriceList';
import Process from '@/components/index/Process';
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
