import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className='flex flex-col gap-8 items-center'>
      <div className='flex flex-col w-full'>
        <h1 className='bg-orange-400 w-fit'>Koreczki u Matiego</h1>
        <h2 className='ml-4'>z matmy</h2>
      </div>
      <Image
        src='/me.jpg'
        alt='me'
        width={1200}
        height={1200}
        className='w-full max-w-lg aspect-square object-cover object-top rounded-full border-12 border-orange-400'
      />
      <div className='flex flex-col py-4'>
        <h2>Pozwól mi się przedstawić.</h2>
        <br />
        <p className='text-justify'>
          Jak już pewnie zdążyłeś się domyślić, mam na imię Mateusz i mieszkam w
          Koninie.
          <br />
          <br />
          W tym roku ukończyłem II Liceum w Koninie, a dokładniej klasę o
          profilu mat-fiz-ang. Los tak chciał, że już od najmłodszych lat
          interesowałem się matematyką i byłem w tym dobry, a pod koniec 2021
          roku zacząłem dzielić się wiedzą za pomocą korepetycji.
          <br />
          <br />
          Mam nadzieję, że po przeczytaniu treści na tej stronie zdecydujesz się
          podjąć ze mną współpracę i poprawić swoje umiejętności matematyczne.
        </p>
      </div>
    </section>
  );
};

export default Hero;
