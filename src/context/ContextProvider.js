import React, { createContext, useContext, useState } from 'react';
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [showProject, setShowProject] = useState(false);

  window.addEventListener('resize', function (event) {
    setWidth(window.innerWidth);
  });

  function showProjectFunction(boolean) {
    if (boolean === true) {
      document.body.classList.add('hideScrollbar');
    } else {
      document.body.classList.remove('hideScrollbar');
    }
    setShowProject(boolean);
  }

  return (
    <StateContext.Provider
      value={{
        menu,
        setMenu,
        width,
        setWidth,
        showProjectFunction,
        showProject,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
