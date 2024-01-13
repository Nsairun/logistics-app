"use client";
import { IOrder, IUser } from "@/services/Interfaces/Interface";
import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface IAppContext {
    currentUser: IUser | null,
    order: IOrder | null,
    setOrder: React.Dispatch<React.SetStateAction<IOrder | null>>,
    setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>> 
}

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [order, setOrder] = useState<IOrder | null>(null);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser, order, setOrder }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext: () => IAppContext = () => {
  return useContext(AppContext) as any as IAppContext;
};
