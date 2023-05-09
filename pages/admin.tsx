import { useAppSelector } from '@/redux/store';
import { getIsAdmin } from '@/redux/user';
import { useRouter } from 'next/router';
import React from 'react';

const Admin = () => {
  // redux
  const isAdmin = useAppSelector(getIsAdmin);

  const router = useRouter();

  if (!isAdmin) {
    router.replace('/');
  }

  return <div>Admin</div>;
};

export default Admin;
