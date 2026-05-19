import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home pages">
      <div className="heroText">
        <h1>{t('Oi, sou o')}</h1>
        <div className="content">
          <h2>
            Victor<span>,</span>
          </h2>
          <h2>
            Victor<span>,</span>
          </h2>
        </div>
        <br />
        <h1>{t('Desenvolvedor Web')}</h1>
      </div>

      <p className="subtitle">
        {t('Desenvolvedor Front-End, atualmente estou focado em React Js')}
      </p>

      <div className="ctaContainer">
        <NavLink className="mainButton" to="/projects">
          {t('Projetos')}
        </NavLink>
        <NavLink className="mainButton" to="/resume">
          {t('Currículo')}
        </NavLink>
        <NavLink className="mainButton" to="/about">
          {t('Sobre Mim')}
        </NavLink>
      </div>

      <NavLink className="homeCta" to="/contact">
        {t('Entre em contato comigo!')}
      </NavLink>
    </div>
  );
}

export default Home;
