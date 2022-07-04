import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// I'll implement Skills in future
import { About, Contact, Projects, Home, Resume } from './pages';
import { Sidebar } from './components';

import { useStateContext } from './context/ContextProvider';

function App() {
  const { menu, setMenu, width } = useStateContext();

  const isPC = width >= 769;

  return (
    <div className="App">
      <BrowserRouter>
        {width <= 768 ? (
          <button className="navButton" onClick={() => setMenu(!menu)}>
            {menu ? (
              <AiOutlineClose className="menuButton" />
            ) : (
              <AiOutlineMenu className="menuButton" />
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
            {/* <Route path="/skills" element={<Skills />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
