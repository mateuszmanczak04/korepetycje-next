'use client';

import useAppContext from '@/hooks/useAppContext';
import { ReactNode, useCallback, useEffect, useRef } from 'react';

type Props = {
  id: PossibleSection;
  children: ReactNode;
};

/** A higher order component wrapping every section to check if
 * it is currently displayed near the middle of the screen.
 */
const ViewObserver = ({ id, children }: Props) => {
  const { setActiveSection, isScrolling } = useAppContext();
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (isScrolling) return;
    // set active session to the received id if the ref is in the center of the viewport
    if (ref.current) {
      // pixels from the top of the document
      const { top } = ref.current.getBoundingClientRect();
      if (top <= 100 && top >= 0) {
        setActiveSection(id);
      }
    }
  }, [id, setActiveSection, isScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={ref} id={id}>
      {children}
    </div>
  );
};

export default ViewObserver;
