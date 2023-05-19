import { Metadata } from 'next';
import Account from './Account';

export const metadata: Metadata = {
  title: 'Konto',
  description: 'Zarządzaj swoim kontem.',
};

const page = () => {
  return <Account />;
};

export default page;
