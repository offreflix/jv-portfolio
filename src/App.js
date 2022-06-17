import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Projects, Sidebar, Skills } from './components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

import { useStateContext } from './context/ContextProvider';

function App() {
  const [menu, setMenu] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <button onClick={() => setMenu(!menu)}>
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        {menu && <Sidebar />}
        <div className="Routes">
          <Routes>
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
