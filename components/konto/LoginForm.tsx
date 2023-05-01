import React, { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import LoginWithGoogle from './LoginWithGoogle';

type Props = {
  setOption: (option: '' | 'login' | 'register') => void;
};

const LoginForm = ({ setOption }: Props) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setLoading(false);
      return;
    }

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result?.error);
      setLoading(false);
    }

    setLoading(false);
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <button className='cursor-pointer' onClick={() => setOption('')}>
        <ArrowLongLeftIcon className='h-12 w-12' />
      </button>
      <h1 className='text-center'>Zaloguj się</h1>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-xl p-4 w-full max-w-md rounded-xl flex flex-col gap-4 items-center'>
        <label className='w-full'>
          <span>Adres email</span>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className='w-full'>
          <span>Hasło</span>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit' className='btn-primary'>
          Zaloguj się
        </button>
        <LoginWithGoogle />
        <button
          className='text-sm text-gray-500'
          onClick={() => setOption('register')}
          disabled={loading}>
          Chcę utworzyć konto
        </button>
        {loading && <p className='text-sm'>Logowanie w toku...</p>}
        {error && <p className='text-sm text-red-500'>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
