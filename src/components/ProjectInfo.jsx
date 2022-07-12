import React from 'react';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { useStateContext } from '../context/ContextProvider';

import { useTranslation } from 'react-i18next';

function ProjectInfo({
  project: {
    name,
    description,
    image,
    about,
    technologies,
    slug,
    githubSlug,
    english,
  },
}) {
  const { showProjectFunction } = useStateContext();

  const { t } = useTranslation();

  const lngIsPt = localStorage.getItem('lng') === 'pt';

  return (
    <aside className="ProjectInfo">
      <div className="projectMain">
        <div className="header">
          <button
            onClick={() => {
              showProjectFunction(false);
            }}
          >
            <IoChevronBackCircleOutline className="icon" />
          </button>
          <span onClick={() => showProjectFunction(false)}>
            {t('Voltar aos Projetos')}
          </span>
        </div>
        <div className="projectContent">
          <h2>{name}</h2>
          {lngIsPt ? <p>{description}</p> : <p>{english.description}</p>}

          <img src={image} alt="" height="150px" />
          <h3>{t('Sobre')}</h3>
          {lngIsPt ? <p>{about}</p> : <p>{english.about}</p>}
          <h3>{t('Tecnologias')}</h3>
          <ul>
            {technologies.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
          {slug && (
            <>
              <h3>Website</h3>
              <a
                className="projectLinks"
                href={slug}
                target="_blank"
                rel="noreferrer"
              >
                {slug}
              </a>
            </>
          )}
          {githubSlug && (
            <>
              <h3>Github</h3>
              <a
                className="projectLinks"
                href={githubSlug}
                target="_blank"
                rel="noreferrer"
              >
                {githubSlug}
              </a>
            </>
          )}
        </div>
        <a
          className="projectFooter"
          href={slug}
          target="_blank"
          rel="noreferrer"
        >
          {t('Abrir Projeto')}
        </a>
      </div>
    </aside>
  );
}

export default ProjectInfo;
