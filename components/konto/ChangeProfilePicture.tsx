import { useAppDispatch, useAppSelector } from '@/redux/store';
import { changeProfilePicture, getUserData } from '@/redux/user';
import React, { useState } from 'react';
import appAxios from '../../lib/appAxios';
import axios from 'axios';
import Image from 'next/image';
import { AiOutlineUpload } from 'react-icons/ai';

const ChangeProfilePicture = () => {
  // redux
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserData);
  const [imgUrl, setImgUrl] = useState(user.imgUrl);
  const [imgFile, setImgFile] = useState<any>(null);

  const handleChangePhoto = async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImgUrl(reader.result);
    };

    reader.readAsDataURL(file);

    setImgFile(file);
  };

  const handleSubmitProfilePicture = async () => {
    dispatch(
      changeProfilePicture({
        imgFile,
      })
    );
  };

  return (
    <div className='w-full flex flex-col gap-1'>
      <p>Zmień zdjęcie profilowe</p>

      <label className='cursor-pointer rounded-md overflow-hidden flex gap-1 '>
        {imgUrl && (
          <Image
            src={imgUrl}
            alt='current image'
            width={300}
            height={300}
            className='aspect-square w-40 h-40 object-cover'
          />
        )}
        <input
          type='file'
          className='hidden'
          onChange={handleChangePhoto}
          accept='image/png image/jpeg'
        />
        <AiOutlineUpload className=' left-1/2 top-1/2  bg-gray-200 bg-opacity-50 rounded-md text-gray-500 w-40 h-40 hover:opacity-90 transition' />
      </label>
      <button className='btn-primary' onClick={handleSubmitProfilePicture}>
        Zapisz
      </button>
    </div>
  );
};

export default ChangeProfilePicture;
