import React, { createContext, ReactNode, useState } from 'react';

type MainContextState = {
  main: number;
  skills: number;
  portfolio: number;
  courses: number;
  contact: number;
};

const MainContextDefault = {
  scroll: { main: 0, skills: 0, portfolio: 0, courses: 0, contact: 0 },
  setScroll: (state: MainContextState) => {},
};

export const MainContext = createContext(MainContextDefault);

export const GlobalStorage = ({ children }: { children: ReactNode }) => {
  const [scroll, setScroll] = useState(MainContextDefault.scroll);
  return (
    <MainContext.Provider value={{ scroll, setScroll }}>
      {children}
    </MainContext.Provider>
  );
};
