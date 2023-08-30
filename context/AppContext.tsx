'use client';

import { ReactNode, createContext, useState } from 'react';

export const AppContext = createContext<{
  activeSection: string;
  setActiveSection: (s: PossibleSection) => void;
} | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  /* automatically changes during scrolling to currently displayed section */
  /* PossibleSection is a type globally accessible which represents 
  all possible sections in the app */
  const [activeSection, setActiveSection] = useState<PossibleSection>('');

  return (
    <AppContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};
