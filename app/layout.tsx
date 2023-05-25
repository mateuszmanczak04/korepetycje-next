import Navigation from './Navigation';
import { Metadata } from 'next';
import '../styles/globals.scss';
import { Providers } from '@/app/(commonComponents)/provider';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description:
    'Poznaj sposoby prowadzenia przeze mnie lekcji i zdecyduj się na współpracę ze mną.',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='pl'>
      <head />
      <body className='w-screen flex flex-col md:flex-row md:items-start items-center gap-8'>
        <Providers>
          <Navigation />
          <div className='flex-col flex gap-8 w-full items-center lg:ml-60 xl:ml-80 mt-12 lg:mt-0'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
