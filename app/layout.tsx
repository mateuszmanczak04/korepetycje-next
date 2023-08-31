import { AppContextProvider } from '@/context/AppContext';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Korepetycje z Matematyki - Mateusz Mańczak',
  description: 'Poznajmy się, abym mógł pomóc ci zrozumieć matematykę.',
  openGraph: {
    title: 'Korepetycje z Matematyki - Mateusz Mańczak',
    url: 'https://korepetycje.mateuszmanczak.pl/',
    description: 'Poznajmy się, abym mógł pomóc ci zrozumieć matematykę.',
    images: [
      {
        url: 'https://korepetycje.mateuszmanczak.pl/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.ico',
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='pl'>
      <head>
        <meta
          name='google-site-verification'
          content='c7YmShweJNuxwjg9I5xFox43bvt8eIvXNVJqOwM1EzA'
        />
      </head>
      <body>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
