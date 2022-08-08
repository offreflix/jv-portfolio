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
            <h2>Desenvolvedor Frontend</h2>
            <p>
              Adoro o Frontend, eu gosto de criar códigos do zero, e transformar
              Designs em coisas funcionais.
            </p>
            <h3>Tecnologias/Linguagens</h3>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Git/Github</li>
              <li>SASS</li>
              <li>React</li>
            </ul>
          </div>
          <div className="backEnd techs">
            <h2>Desenvolvedor Backend</h2>
            <p>
              Adoro o Frontend, eu gosto de criar códigos do zero, e transformar
              Designs em coisas funcionais.
            </p>
            <h3>Tecnologias/Linguagens</h3>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Git/Github</li>
              <li>SASS</li>
              <li>React</li>
            </ul>
          </div>
          <div className="Fullstack techs">
            <h2>Fullstack</h2>
            <p>
              Adoro o Frontend, eu gosto de criar códigos do zero, e transformar
              Designs em coisas funcionais.
            </p>
            <h3>Tecnologias/Linguagens</h3>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Git/Github</li>
              <li>SASS</li>
              <li>React</li>
            </ul>
          </div>
          {width <= 768 ? (
            <div className="Mobile techs">
              <h2>Mobile</h2>
              <p>
                Adoro o Frontend, eu gosto de criar códigos do zero, e
                transformar Designs em coisas funcionais.
              </p>
              <h3>Tecnologias/Linguagens</h3>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Git/Github</li>
                <li>SASS</li>
                <li>React</li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="bottom">
          <SkillBar skills={skillsData} />
          {width >= 768 ? (
            <div className="Mobile techs">
              <h2>Mobile</h2>
              <p>
                Adoro o Frontend, eu gosto de criar códigos do zero, e
                transformar Designs em coisas funcionais.
              </p>
              <h3>Tecnologias/Linguagens</h3>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Git/Github</li>
                <li>SASS</li>
                <li>React</li>
              </ul>
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
