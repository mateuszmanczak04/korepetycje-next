import ReviewList from '@/components/admin/ReviewList';
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

  return (
    <div className='w-full flex flex-col gap-4'>
      <h2>Admin</h2>
      <ReviewList />
    </div>
  );
};

export default Admin;
