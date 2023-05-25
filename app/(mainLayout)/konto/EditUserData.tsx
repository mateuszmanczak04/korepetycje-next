'use client';

import ChangeUsername from './ChangeUsername';
import ChangeProfilePicture from './ChangeProfilePicture';

const EditUserData = () => {
  return (
    <div className='w-full flex flex-col gap-12'>
      <ChangeUsername />
      <ChangeProfilePicture />
    </div>
  );
};

export default EditUserData;
