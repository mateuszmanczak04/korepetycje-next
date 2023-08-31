import ViewObserver from './ViewObserver';

/** A description telling how does lesson process look like. */
const Process = () => {
  return (
    <ViewObserver id='process'>
      <section>
        <h2>Przebieg lekcji</h2>
        <p className='mt-2'>
          Cała lekcja polega na robieniu tego, co w matematyce najważniejsze,
          czyli na zadaniach. Uczeń podaje mi jakie zagadnienia musi opanować
          (lub też po prostu chce), a ja tłumaczę potrzebną teorię i wybieram z
          jego lub mojego zbioru zadań odpowiednie zadania, które następnie
          robimy.
          <br />
          <br />
          Pytam ucznia, czy ma jakiś pomysł na zadanie, a gdy odpowie, że nie,
          daję mu małą wskazówkę, która ma mu pomóc. Jeśli wskazówka dalej nie
          pomaga, podpowiadam krok po kroku, przy okazji tłumacząc teorię i
          potrzebne wzory do ukończenia ćwiczenia.
          <br />
          <br />
          Na koniec zajęć zadaję trochę do domu na powtórzenie, bo bez chociaż
          jednorazowej powtórki cała lekcja traci sens.
          <br />
          <br />W praktyce to uczeń pisze przez 90% czasu, a ja tylko momentami,
          gdy nie da się czegoś wytłumaczyć słowami. Jak to się mówi{' '}
          <span className='italic'>
            &bdquo;Czego ręka nie zapisze, tego mózg nie będzie wiedział&rdquo;
          </span>
          .
          <br />
          <br />
          Podobnie mają się zajęcia w formie zdalnej, które preferuję osobom,
          chcącym opanować aktualny materiał, a nie nadrabiać zaległości,
          których przez internet niestety tak łatwo nie zobaczę.
        </p>
      </section>
    </ViewObserver>
  );
};

export default Process;
