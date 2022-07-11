import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div className="About pages">
      <h1>{t('Sobre Mim')}</h1>
      <div className="main">
        <p>
          {t(
            'Eu sou um Desenvolvedor Front-End apaixonado em React, Next e fazer Designs Responsivos'
          )}
        </p>
        <p>
          {t(
            'Tento melhorar minhas habilidades em cada projeto, principalmente a organização e velocidade'
          )}
        </p>
        <NavLink className="contactButton" to="/contact">
          {t('Caso esteja interessado, entre em contato!')}
        </NavLink>
      </div>
    </div>
  );
}

export default About;
