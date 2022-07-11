import React, { Suspense, useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// I'll implement Skills in future
import { About, Contact, Projects, Home, Resume } from './pages';
import { Sidebar } from './components';

import { useStateContext } from './context/ContextProvider';
import i18n from 'i18next';

function App() {
  const { menu, setMenu, width } = useStateContext();
  const [currentLng, setCurrentLng] = useState('');

  const localStorageLng = localStorage.getItem('lng');

  useEffect(() => {
    if (localStorage.getItem('lng'))
      return setCurrentLng(localStorage.getItem('lng'));
    setCurrentLng(navigator.language);
  }, []);

  const isPC = width >= 769;

  const changeLng = () => {
    var lng = '';
    if (currentLng === 'pt') {
      lng = 'en';
    } else {
      lng = 'pt';
    }

    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    setCurrentLng(lng);
  };

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <BrowserRouter>
          <div className="changeLngButton">
            <button
              onClick={() => {
                changeLng();
              }}
            >
              {'pt-BR' ? currentLng : 'pt'}
            </button>
          </div>
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
    </Suspense>
  );
}

export default App;
