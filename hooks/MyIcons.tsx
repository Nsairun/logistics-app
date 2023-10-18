import { createContext, useContext, ReactNode } from 'react';

export interface IconStylingProviderProps {
  children: ReactNode;
  value: {
    color: string;
    size: string;
  };
}

const IconStylingContext = createContext({});

export function useIconStyling() {
  return useContext(IconStylingContext);
}

export function IconStylingProvider({ children, value }: IconStylingProviderProps) {
  return (
    <IconStylingContext.Provider value={value}>
      {children}
    </IconStylingContext.Provider>
  );
}