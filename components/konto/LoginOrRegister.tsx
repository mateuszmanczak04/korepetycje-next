import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoginWithGoogle from './LoginWithGoogle';

const LoginOrRegister = () => {
  const [option, setOption] = useState<'' | 'register' | 'login'>('');

  if (option === 'login') {
    return <LoginForm setOption={setOption} />;
  }

  if (option === 'register') {
    return <RegisterForm setOption={setOption} />;
  }

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h1 className='text-3xl font-medium text-center'>
        Chcesz się zalogować, czy jesteś tu pierwszy raz?
      </h1>
      <div className='flex gap-2'>
        <button className='btn-primary' onClick={() => setOption('register')}>
          Pierwszy raz
        </button>
        <button className='btn-secondary' onClick={() => setOption('login')}>
          Chcę się zalogować
        </button>
      </div>
      <LoginWithGoogle />
    </div>
  );
};

export default LoginOrRegister;
