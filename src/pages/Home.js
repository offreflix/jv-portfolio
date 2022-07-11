import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home pages">
      <div>
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
      <main className="main">
        <p>
          {t('Desenvolvedor Front-End, atualmente estou focado em React Js')}
        </p>
        <p>
          {t('Veja meus')}{' '}
          <NavLink className="mainButton" to="/projects">
            {t('Projetos')}
          </NavLink>
          ,{' '}
          <NavLink className="mainButton" to="/cv">
            {t('Currículo')}
          </NavLink>{' '}
          {t('e mais no')}{' '}
          <NavLink className="mainButton" to="/about">
            {t('Sobre Mim')}
          </NavLink>
          .
        </p>

        <NavLink className="contactButton" to="/contact">
          {t('Entre em contato comigo!')}
        </NavLink>
      </main>
    </div>
  );
}

export default Home;
