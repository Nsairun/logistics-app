
import { createContext, useContext, ReactNode } from 'react';

export interface IconStylingProviderProps {
  value: {
    color: string;
    size: string;
  };
}

const IconStylingContext = createContext<IconStylingProviderProps | undefined>(
  undefined
);

export function useIconStyling() {
  const context = useContext(IconStylingContext);
  if (!context) {
    throw new Error(
      'useIconStyling must be used within an IconStylingProvider'
    );
  }
  return context.value;
}

export function IconStylingProvider({
  value,
  children,
}: IconStylingProviderProps & { children: ReactNode }) {
  return (
    <IconStylingContext.Provider value={{ value }}>
      {children}
    </IconStylingContext.Provider>
  );
}