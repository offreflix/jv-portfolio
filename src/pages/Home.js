import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="Home pages">
      <div>
        <h1>Oi, sou o</h1>
        <div className="content">
          <h2>
            Victor<span>,</span>
          </h2>
          <h2>
            Victor<span>,</span>
          </h2>
        </div>
        <br />
        <h1>Desenvolvedor Web</h1>
      </div>
      <main className="main">
        <p>
          Desenvolvedor Front-End, atualmente estou focado em React Js, porém
          estudo para me tornar um Desenvolvedor Fullstack.
        </p>
        <p>
          Veja meus{' '}
          <NavLink className="mainButton" to="/projects">
            Projetos
          </NavLink>
          ,{' '}
          <NavLink className="mainButton" to="/skills">
            Habilidades
          </NavLink>
          ,{' '}
          <NavLink className="mainButton" to="/cv">
            Currículo
          </NavLink>{' '}
          e veja mais no{' '}
          <NavLink className="mainButton" to="/about">
            Sobre Mim
          </NavLink>
          .
        </p>

        <NavLink className="contactButton" to="/contact">
          Entre em contato comigo!
        </NavLink>
      </main>
    </div>
  );
}

export default Home;
