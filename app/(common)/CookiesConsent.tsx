'use client';

import {
  acceptCookies,
  declineCookies,
  getCookiesAccepted,
} from '@/redux/settings';
import { useAppDispatch, useAppSelector } from '@/redux/store';

const CookiesConsent = () => {
  // redux
  const cookiesAccepted = useAppSelector(getCookiesAccepted);
  const dispatch = useAppDispatch();

  const handleAccept = () => dispatch(acceptCookies());

  const handleDecline = () => dispatch(declineCookies());

  if (!cookiesAccepted)
    return (
      <div className='fixed bottom-4 left-1/2 -translate-x-1/2 bg-white p-4 rounded-md shadow-2xl flex flex-col items-start gap-2 w-11/12 max-w-lg'>
        <p>Ta strona korzysta z plików cookies.</p>
        <p className='text-sm text-gray-500'>
          Cookies są potrzebne, by móc się zalogować i zarządzać swoim kontem.
        </p>
        <div className='flex gap-1 items-center'>
          <button className='btn-primary' onClick={handleAccept}>
            Akceptuj
          </button>
          <button className='btn-secondary' onClick={handleDecline}>
            Odrzuć
          </button>
        </div>
      </div>
    );

  return null;
};

export default CookiesConsent;
