import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const values = [
  {
    icon: '⚡',
    title: 'Frontend First',
    desc: 'Foco em experiência do usuário, interfaces modernas e design responsivo para qualquer dispositivo.',
  },
  {
    icon: '🧩',
    title: 'Código Limpo',
    desc: 'Código organizado, escalável e de fácil manutenção com foco em boas práticas.',
  },
  {
    icon: '🚀',
    title: 'Sempre Evoluindo',
    desc: 'Sempre buscando as últimas tecnologias e tendências para entregar soluções modernas.',
  },
];

function About() {
  const { t } = useTranslation();

  return (
    <div className="About pages">
      <h1>{t('Sobre Mim')}</h1>

      <div className="aboutLayout">
        <div className="aboutBio">
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
          <NavLink className="aboutCta" to="/contact">
            {t('Caso esteja interessado, entre em contato!')}
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
