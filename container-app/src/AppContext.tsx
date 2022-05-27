import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(true);

  return (
    <AppContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
