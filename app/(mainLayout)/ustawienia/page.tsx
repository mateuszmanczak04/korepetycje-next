import CookiesConsent from './CookiesConsent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ustawienia',
  description: 'Dostosuj stronę do swoich potrzeb',
};

const Page = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2>Ustawienia</h2>
      <CookiesConsent />
    </div>
  );
};

export default Page;
