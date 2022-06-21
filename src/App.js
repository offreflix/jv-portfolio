import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Projects, Sidebar, Skills, Home } from './components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import React from 'react';

import { useStateContext } from './context/ContextProvider';

function App() {
  const { menu, setMenu, width } = useStateContext();

  const isPC = width >= 768;

  return (
    <div className="App">
      <BrowserRouter>
        {width <= 768 ? (
          <button className="navButton" onClick={() => setMenu(!menu)}>
            {menu ? (
              <AiOutlineClose className="test" />
            ) : (
              <AiOutlineMenu className="test" />
            )}
          </button>
        ) : (
          ''
        )}

        {menu && <Sidebar />}
        {isPC && <Sidebar />}
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
