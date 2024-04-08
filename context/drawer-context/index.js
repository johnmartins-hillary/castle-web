import React, { createContext, useState, useContext } from "react";

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const contextValue = {
    openDrawer,
    setOpenDrawer
  };

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
};
export const useDrawer = () => {
  return useContext(DrawerContext);
};
