import { AppContextProvider } from '@/context/AppContext';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.scss';
import Footer from './(components)/Footer';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description: 'Poznajmy się, abym mógł pomóc ci zrozumieć matematykę.',
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='pl'>
      <head>
        <link rel='icon' href='/images/favicon.ico' sizes='any' />
      </head>
      <body>
        <AppContextProvider>
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
