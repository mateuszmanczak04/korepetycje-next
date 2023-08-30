'use client';

import useAppContext from '@/hooks/useAppContext';
import twClass from '@/utilities/twClass';
import Link from 'next/link';

type Section = {
  id: string;
  name: string;
};

/** A list displayed on the right showing currently read section. */
const SideList = () => {
  const sections: Section[] = [
    { id: 'introduction', name: 'Pozwól mi się przedstawić' },
    { id: 'process', name: 'Przebieg lekcji' },
    { id: 'level', name: 'Poziom' },
    { id: 'reviews', name: 'Sprawdź opinie innych osób' },
    { id: 'price-list', name: 'Cennik' },
    { id: 'location', name: 'Lokalizacja' },
    { id: 'contact', name: 'Kontakt' },
  ];

  /* a section positioned in the center of the screen */
  const { activeSection } = useAppContext();

  /* scroll to make an element visible in the screen center */
  const handleScroll = (id: string) => {
    console.log(id);
    const el = document.getElementById(id);
    if (el) {
      const { top: elTop } = el.getBoundingClientRect();
      window.scrollTo({
        top: elTop + window.scrollY - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ul className='hidden md:flex w-fit h-fit flex-col sticky top-4'>
      {sections.map((section: Section) => {
        return (
          <li
            key={section.id}
            onClick={() => handleScroll(section.id)}
            className={twClass([
              'bg-white px-2 py-4 text-sm hover:bg-primary-500 hover:text-white transition duration-75 cursor-pointer rounded-md',
              activeSection === section.id &&
                'bg-primary-400 text-white font-bold',
            ])}>
            {section.name}
          </li>
        );
      })}
    </ul>
  );
};
export default SideList;
