import { Metadata } from 'next';
import '../styles/globals.scss';
import Footer from './(components)/Footer';

export const metadata: Metadata = {
  title: 'Korepetycje - Mateusz Mańczak',
  description: 'Poznajmy się, abym mógł pomóc ci zrozumieć matematykę.',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='pl'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
