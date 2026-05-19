import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'SASS'];

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home pages">
      <div className="homeAvailableBadge">
        <span className="dot" />
        {t('home.available')}
      </div>

      <div className="heroText">
        <h1>{t('home.greeting')}</h1>
        <div className="content">
          <h2>
            Victor<span>,</span>
          </h2>
          <h2>
            Victor<span>,</span>
          </h2>
        </div>
        <br />
        <h1>{t('home.role')}</h1>
      </div>

      <p className="subtitle">
        {t('home.description')}
      </p>

      <div className="techStack">
        {techStack.map((tech) => (
          <span key={tech} className="techChip">
            {tech}
          </span>
        ))}
      </div>

      <div className="ctaContainer">
        <NavLink className="mainButton" to="/projects">
          {t('nav.projects')}
        </NavLink>
        <NavLink className="mainButton" to="/resume">
          {t('nav.resume')}
        </NavLink>
        <NavLink className="mainButton" to="/about">
          {t('home.cta.about')}
        </NavLink>
      </div>

      <NavLink className="homeCta" to="/contact">
        {t('home.cta.contact')}
        <i className="arrow">→</i>
      </NavLink>
    </div>
  );
}

export default Home;
