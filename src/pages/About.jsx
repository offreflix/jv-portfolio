import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: '⚡',
      title: t('about.values.fullstack.title'),
      desc: t('about.values.fullstack.desc'),
    },
    {
      icon: '🧩',
      title: t('about.values.cleancode.title'),
      desc: t('about.values.cleancode.desc'),
    },
    {
      icon: '🚀',
      title: t('about.values.impact.title'),
      desc: t('about.values.impact.desc'),
    },
  ];

  return (
    <div className="About pages">
      <h1>{t('Sobre Mim')}</h1>

      <div className="aboutLayout">
        <div className="aboutBio">
          <p>{t('about.bio.p1')}</p>
          <p>{t('about.bio.p2')}</p>
          <NavLink className="aboutCta" to="/contact">
            {t('Caso esteja interessado, entre em contato!')}
            <i className="arrow">→</i>
          </NavLink>
        </div>

        <div className="valueCards">
          {values.map((v) => (
            <div key={v.title} className="valueCard">
              <span className="valueIcon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
