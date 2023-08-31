import ViewObserver from './ViewObserver';

/** A short introduction about myself. */
const Introduction = () => {
  return (
    <ViewObserver id='introduction'>
      <section className='flex flex-col mt-2'>
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
          Aby potwierdzić moje kompetencje, dodam, że z matury z matematyki na
          poziomie podstawowym dostałem{' '}
          <span className='font-bold bg-primary-100'>100%</span>, a z
          rozszerzenia <span className='font-bold bg-primary-100'>92%</span>.
          <br />
          <br />
          Mam nadzieję, że po przeczytaniu treści na tej stronie zdecydujesz się
          podjąć ze mną współpracę i poszerzyć swoją wiedzę.
        </p>
      </section>
    </ViewObserver>
  );
};

export default Introduction;
