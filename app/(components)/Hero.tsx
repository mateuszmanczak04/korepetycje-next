import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex flex-col gap-8'>
      <div className='w-full flex flex-col sm:flex-row-reverse bg-primary-500 rounded-md overflow-hidden pt-4 pr-4'>
        <div className='flex flex-col w-full ml-4 sm:ml-0'>
          <h1 className='text-4xl font-extrabold text-primary-800 bg-primary-200 py-2 px-4 rounded-md w-fit'>
            Korepetycje
          </h1>
          <h3 className='text-xl text-primary-900 w-fit ml-4 mt-1 py-1 px-2 rounded-md bg-primary-300'>
            Mateusz Mańczak
          </h3>
        </div>
        <Image
          src='/me-without-background.png'
          alt='me'
          width={500}
          height={500}
          className='w-full max-w-xs aspect-square object-cover object-top'
        />
      </div>
      <div className='mt-2'>
        <h2>Pozwól mi się przedstawić.</h2>
        <p className='mt-2'>
          Mam na imię Mateusz i w tym roku zaczynam studia na Uniwersytecie
          Adama Mickiewicza w Poznaniu, kierunek to Informatyka.
          <br />
          <br />
          Kilka miesięcy temu ukończyłem II Liceum w Koninie, a dokładniej klasę
          o profilu z rozszerzoną matematyką, fizyką i językiem angielskim. Los
          tak chciał, że już od najmłodszych lat interesowałem się matematyką i
          byłem w tym dobry, a pod koniec 2021 roku zacząłem dzielić się wiedzą
          z innymi za pomocą korepetycji.
          <br />
          <br />
          Aby potwierdzi moje kompetencje, dodam, że z matury z matematyki na
          poziomie podstawowym dostałem{' '}
          <span className='font-bold bg-primary-100'>100%</span>, a z
          rozszerzenia <span className='font-bold bg-primary-100'>92%</span>.
          <br />
          <br />
          Mam nadzieję, że po przeczytaniu treści na tej stronie zdecydujesz się
          podjąć ze mną współpracę i poszerzyć swoją wiedzę.
        </p>
      </div>
    </section>
  );
};

export default Hero;
