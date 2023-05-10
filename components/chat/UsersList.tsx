import React, { useEffect, useState } from 'react';
import appAxios from '../../lib/appAxios';
import Image from 'next/image';
import Link from 'next/link';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    appAxios
      .get('/api/chat/get-users')
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch();
  }, []);

  return (
    <div className='flex flex-col bg-white border-l w-full h-screen overflow-y-scroll scrollbar-hide'>
      {users &&
        users.map((user) => (
          <Link
            href={`/chat/${user._id}`}
            key={user._id}
            className='flex items-center gap-2 p-2 border-b hover:bg-gray-100 cursor-pointer'>
            <Image
              src={user.imgUrl}
              alt='avatar'
              width={40}
              height={40}
              className='aspect-square rounded-full object-cover'
            />
            <p>{user.username}</p>
          </Link>
        ))}
    </div>
  );
};

export default UsersList;
