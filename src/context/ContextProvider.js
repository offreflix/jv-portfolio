import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(true);

  return (
    <StateContext.Provider value={{ menu, setMenu }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
