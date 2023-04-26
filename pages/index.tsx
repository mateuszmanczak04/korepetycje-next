import Hero from '@/components/Hero';
import Level from '@/components/Level';
import PriceList from '@/components/PriceList';
import Process from '@/components/Process';

export default function Home() {
  return (
    <main className='flex flex-col gap-16'>
      <Hero />
      <Level />
      <Process />
      <PriceList />
    </main>
  );
}
