import { useAppDispatch, useAppSelector } from '@/redux/store';
import { changeUsername, getUserData } from '@/redux/user';
import React, { useState } from 'react';

const ChangeUsername = () => {
  // redux
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserData);

  const [newUsername, setNewUsername] = useState(user.username);

  const handleSaveUsername = () => {
    dispatch(changeUsername({ username: newUsername }));
  };

  return (
    <div className='w-full flex flex-col gap-1'>
      <p>Zmień nazwę użytkownika</p>
      <input
        type='text'
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button className='btn-primary' onClick={handleSaveUsername}>
        Zapisz
      </button>
    </div>
  );
};

export default ChangeUsername;
