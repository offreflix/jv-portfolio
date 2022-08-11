import React from 'react';
import { useTranslation } from 'react-i18next';
import { skillsData } from '../data';
import { SkillBar } from '../components/index';
import { useStateContext } from '../context/ContextProvider';

function Skills() {
  const { width } = useStateContext();

  const { t } = useTranslation();
  return (
    <div className="Skills pages">
      <h1>{t('Habilidades')}</h1>
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
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Git/Github</li>
              <li>SASS</li>
              <li>React</li>
              <li>Next</li>
              <li>GraphQL</li>
              <li>Typescript</li>
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
              <li>Javascript</li>
              <li>Typescript</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>MySQL</li>
              <li>NodeJS</li>
              <li>Express.js</li>
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
              <li>JavaScript</li>
              <li>Git/Github</li>
              <li>SASS</li>
              <li>Styled-Components</li>
              <li>Typescript</li>
            </ul>
          </div>
          {width <= 768 ? (
            <div className="fullstack techs">
              <h2>Fullstack</h2>
              <p>
                {t(
                  'Fiz curso de Fullstack, apesar de não gostar de backend, eu lido bem e consigo trabalhar como Fullstack'
                )}
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="bottom">
          <SkillBar skills={skillsData} />
          {width >= 768 ? (
            <div className="fullstack techs">
              <h2>Fullstack</h2>
              <p>
                {t(
                  'Fiz curso de Fullstack, apesar de não gostar de backend, eu lido bem e consigo trabalhar como Fullstack'
                )}
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
