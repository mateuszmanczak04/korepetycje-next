import CookiesConsent from '@/components/ustawienia/CookiesConsent';
import React from 'react';

const Ustawienia = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h2>Ustawienia</h2>
      <CookiesConsent />
    </div>
  );
};

export default Ustawienia;
