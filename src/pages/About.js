import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className="About pages">
      <h1>Sobre Mim</h1>
      <div className="main">
        <p>
          Eu sou um Desenvolvedor Front-End apaixonado em React, Next e fazer
          Designs Responsivos.
        </p>
        <p>
          Tento melhorar minhas habilidades em cada projeto, principalmente a
          organização e velocidade.
        </p>
        <NavLink className="contactButton" to="/contact">
          Caso esteja interessado, entre em contato!
        </NavLink>
      </div>
    </div>
  );
}

export default About;
