import ViewObserver from './ViewObserver';

/** A location where the lesson is possible. */
const Location = () => {
  return (
    <ViewObserver id='location'>
      <section>
        <h2>Lokalizacja</h2>
        <p className='mt-2'>
          Przyjmuję uczniów u siebie w mieszkaniu na{' '}
          <span className='bg-primary-100'>
            Osiedlu Stefana Batorego w Poznaniu
          </span>{' '}
          lub za dodatkową opłatą przyjeżdżam do ucznia, jeśli mieszka w
          okolicy. Oferuję również lekcje w formie{' '}
          <span className='bg-primary-100'>zdalnej</span>, które najczęściej
          prowadzę przez discorda.
        </p>
      </section>
    </ViewObserver>
  );
};

export default Location;
