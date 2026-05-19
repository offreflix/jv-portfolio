import React from 'react';
import { useTranslation } from 'react-i18next';
import { skillsData } from '../data';
import { SkillBar } from '../components/index';

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="Skills pages">
      <h1>Habilidades</h1>
      <p className="skillsSubtitle">
        Tecnologias e ferramentas que uso no dia a dia
      </p>
      <div className="main">
        <div className="techsContainer">
          <div className="frontEnd techs">
            <h2>Frontend</h2>
            <p>
              {t(
                'Adoro o Frontend, eu gosto de criar códigos do zero, e transformar Designs em coisas funcionais'
              )}
            </p>
            <h3>{t('Tecnologias/Linguagens')}</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS / SASS</li>
              <li>Tailwind CSS</li>
              <li>GraphQL</li>
              <li>Styled-Components</li>
            </ul>
          </div>

          <div className="backEnd techs">
            <h2>Backend</h2>
            <p>
              {t(
                'Não sou muito fã de Backend, mas consigo lidar tão bem, quando é preciso eu faço o Backend mas realmente prefiro o Frontend'
              )}
            </p>
            <h3>{t('Tecnologias/Linguagens')}</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="mobile techs">
            <h2>Mobile</h2>
            <p>
              {t(
                'Estou iniciando no Desenvolvimento Mobile, porém com meus conhecimentos de Reactjs já aprendi o básico'
              )}
            </p>
            <h3>{t('Tecnologias/Linguagens')}</h3>
            <ul>
              <li>React Native</li>
              <li>Expo</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
            </ul>
          </div>

          <div className="fullstack techs">
            <h2>Fullstack</h2>
            <p>
              {t(
                'Fiz curso de Fullstack, apesar de não gostar de backend, eu lido bem e consigo trabalhar como Fullstack'
              )}
            </p>
          </div>
        </div>

        <div className="bottom">
          <SkillBar skills={skillsData} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
