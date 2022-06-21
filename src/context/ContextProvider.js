import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function (event) {
    setWidth(window.innerWidth);
  });

  return (
    <StateContext.Provider value={{ menu, setMenu, width, setWidth }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
