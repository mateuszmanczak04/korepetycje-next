import RatingStars from './RatingStars';
import ViewObserver from './ViewObserver';

/** A list of reviews which I have received. */
const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 0,
      author: 'Amelia',
      content: 'Polecam, po godzinnych korepetycjach dostałam 5 z ostrosłupów.',
      rating: 5,
    },
    {
      id: 1,
      author: 'Julita',
      content:
        'Super atmosfera, z korepetycji można wiele wynieść. Jestem bardzo zadowolona! 5/5',
      rating: 5,
    },
    {
      id: 2,
      author: 'Marysia',
      content:
        'Bardzo odpowiadają mi korki. Generalnie Mateusz jest cierpliwy i w łatwy i zrozumiały sposób tłumaczy materiał, co potem ułatwia naukę.',
      rating: 5,
    },
  ];

  return (
    <ViewObserver id='reviews'>
      <section>
        <h2>Sprawdź opinie innych osób</h2>
        <div className='mt-4 columns-1 md:columns-2 space-y-2 gap-x-2'>
          {reviews.map((review: Review) => (
            <div
              key={review.id}
              className=' p-4 shadow-xl rounded-md inline-flex flex-col w-full flex-wrap gap-2 bg-white'>
              <div className='flex items-center gap-2 w-full'>
                <p className='opacity-75 bg-primary-100 w-fit px-2 rounded'>
                  {review.author}
                </p>
                <RatingStars rating={review.rating} size={6} />
              </div>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      </section>
    </ViewObserver>
  );
};

export default Reviews;
