import React, { FormEvent, useState } from 'react';
import appAxios from '../../lib/appAxios';
import { signIn } from 'next-auth/react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import LoginWithGoogle from './LoginWithGoogle';
import Error from '../Error';

type Props = {
  setOption: (option: '' | 'login' | 'register') => void;
};

const RegisterForm = ({ setOption }: Props) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Hasła muszą być identyczne.');
      return;
    }

    await appAxios
      .post('/api/auth/register', {
        email,
        username,
        password,
      })
      .then(async (_) => {
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (result?.error) {
          setError(result?.error);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <button className='cursor-pointer' onClick={() => setOption('')}>
        <ArrowLongLeftIcon className='h-12 w-12' />
      </button>
      <h1 className='text-center'>Utwórz konto</h1>
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
          <span>Imię i nazwisko</span>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <label className='w-full'>
          <span>Powtórz hasło</span>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type='submit' className='btn-primary'>
          Utwórz konto
        </button>
        <LoginWithGoogle />
        <button
          className='text-sm text-gray-500'
          onClick={() => setOption('login')}
          disabled={loading}>
          Chcę się tylko zalogować
        </button>
        {loading && <p className='text-sm'>Rejestracja w toku...</p>}
        {error && <Error>{error}</Error>}
      </form>
    </div>
  );
};

export default RegisterForm;
