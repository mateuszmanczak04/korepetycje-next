import {
  acceptCookies,
  declineCookies,
  getCookiesAccepted,
} from '@/redux/settings';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import React from 'react';

const CookiesConsent = () => {
  // redux
  const cookiesAccepted = useAppSelector(getCookiesAccepted);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    if (cookiesAccepted === 'true') {
      dispatch(declineCookies());
    } else {
      dispatch(acceptCookies());
    }
  };

  return (
    <div
      className='gap-2 p-4 shadow-md rounded-md cursor-pointer flex items-center justify-between'
      onClick={handleToggle}>
      <div>
        <p>Zgoda na pliki cookies</p>
        <p className='text-gray-500 text-sm'>
          Są konieczne do tego, byś mógł założyć konto.
        </p>
      </div>
      <div
        className={`${
          cookiesAccepted === 'true'
            ? 'bg-orange-100 border-orange-500'
            : 'bg-white border-orange-100'
        } border-2 rounded-full w-[48px] h-[28px] relative transition`}>
        <div
          className={`w-[20px] h-[20px] rounded-full absolute top-[2px] left-[2px] ${
            cookiesAccepted === 'true'
              ? 'translate-x-[20px] bg-orange-500'
              : 'translate-x-[0px] bg-orange-200'
          } transition`}></div>
      </div>
    </div>
  );
};

export default CookiesConsent;
