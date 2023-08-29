import { AiFillFacebook, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  const itemClasses =
    'flex items-center gap-2 p-2 bg-white shadow-lg rounded-md hover:bg-primary-100';

  return (
    <section>
      <h2>Kontakt</h2>
      <div className='flex flex-wrap gap-2 mt-2'>
        <a href='tel:+48725726901' className='btn-primary'>
          <AiFillPhone className='w-6 h-6' />
          <p>Zadzwoń pod 725 726 901</p>
        </a>
        <a className='btn-secondary' href='mailto:mateuszmanczak16@gmail.com'>
          <AiFillMail className='w-6 h-6' />
          Wyślij e-mail
        </a>
        <a
          href='https://www.facebook.com/mateusz.manczak04/'
          target='_blank'
          rel='noreferrer'
          className='btn-primary'>
          <AiFillFacebook className='w-6 h-6' />
          Napisz na Messenger
        </a>
        <a
          href='https://wa.me/48725726901'
          target='_blank'
          rel='noreferrer'
          className='btn-secondary'>
          <IoLogoWhatsapp className='w-6 h-6' />
          Napisz na WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
