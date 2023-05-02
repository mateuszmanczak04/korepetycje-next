import { useAppDispatch, useAppSelector } from '@/redux/store';
import { changeUsername, getUserData } from '@/redux/user';
import React, { useState } from 'react';
import appAxios from '../../lib/appAxios';

const EditUserData = () => {
  // redux
  const user = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  // states
  const [newUsername, setNewUsername] = useState(user.username);

  const handleSave = () => {
    dispatch(changeUsername({ username: newUsername }));
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex flex-col gap-1'>
        <p>Zmień nazwę użytkownika</p>
        <div className='flex w-full gap-1'>
          <input
            type='text'
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <button className='btn-primary' onClick={handleSave}>
            Zapisz
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserData;
