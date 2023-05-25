import CookiesConsent from '../CookiesConsent';
import Footer from '../(commonComponents)/Footer';

type Props = { children: React.ReactNode };

const layout = ({ children }: Props) => {
  return (
    <>
      <div className='flex-1 min-h-screen w-full max-w-3xl px-4 py-16 md:py-8'>
        {children}
      </div>
      <CookiesConsent />
      <Footer />
    </>
  );
};

export default layout;
