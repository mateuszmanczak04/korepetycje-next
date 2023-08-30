'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

export const AppContext = createContext<{
  activeSection: string;
  setActiveSection: (s: PossibleSection) => void;
  isScrolling: boolean;
  setIsScrolling: (s: boolean) => void;
} | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  /* automatically changes during scrolling to currently displayed section */
  const [activeSection, setActiveSection] = useState<PossibleSection>('');
  /* used to block auto scroll detection while moving */
  const [isScrolling, setIsScrolling] = useState(false);

  return (
    <AppContext.Provider
      value={{ activeSection, setActiveSection, isScrolling, setIsScrolling }}>
      {children}
    </AppContext.Provider>
  );
};
