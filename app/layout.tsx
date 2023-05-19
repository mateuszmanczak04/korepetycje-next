import Navigation from './(common)/Navigation';
import Footer from './(common)/Footer';
import CookiesConsent from './(common)/CookiesConsent';
import { Metadata } from 'next';
import '../styles/globals.scss';
import { Providers } from '@/app/provider';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description:
    'Poznaj sposoby prowadzenia przeze mnie lekcji i zdecyduj się na współpracę ze mną.',
};

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <html lang='pl'>
      <head />
      <body className='w-screen flex flex-col md:flex-row md:items-start items-center gap-8'>
        <Providers>
          <Navigation />
          <div className='flex-col flex gap-8 w-full items-center md:ml-60 lg:ml-80'>
            <div className='flex-1 min-h-screen w-full max-w-3xl px-4 py-16 md:py-8'>
              {children}
            </div>
            <CookiesConsent />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default layout;
