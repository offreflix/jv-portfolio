import React from 'react';
import { IoArrowBack, IoLogoGithub, IoGlobeOutline, IoArrowForward } from 'react-icons/io5';
import { useStateContext } from '../context/ContextProvider';
import { useTranslation } from 'react-i18next';

function ProjectInfo({
  project: { name, description, image, about, technologies, slug, githubSlug, english },
}) {
  const { showProjectFunction } = useStateContext();
  const { t } = useTranslation();
  const lngIsPt = localStorage.getItem('lng') === 'pt';

  return (
    <aside className="ProjectInfo">
      <div className="piHero">
        <img
          src={image}
          alt={name}
          onError={(e) => { e.target.style.opacity = '0' }}
        />
        <div className="piHeroOverlay">
          <button className="piBack" onClick={() => showProjectFunction(false)}>
            <IoArrowBack />
            {t('projectInfo.back')}
          </button>
          <div className="piHeroMeta">
            <h2>{name}</h2>
            <p>{lngIsPt ? description : english.description}</p>
          </div>
        </div>
      </div>

      <div className="piBody">
        <div className="piSection">
          <span className="piLabel">{t('projectInfo.about')}</span>
          <p>{lngIsPt ? about : english.about}</p>
        </div>

        <div className="piSection">
          <span className="piLabel">{t('projectInfo.technologies')}</span>
          <div className="piTechs">
            {technologies.map((tech) => (
              <span key={tech} className="piTech">{tech}</span>
            ))}
          </div>
        </div>

        {(slug || githubSlug) && (
          <div className="piSection piSectionLinks">
            <span className="piLabel">Links</span>
            <div className="piLinkRow">
              {slug && (
                <a className="piLinkBtn" href={slug} target="_blank" rel="noreferrer">
                  <IoGlobeOutline /> Website
                </a>
              )}
              {githubSlug && (
                <a className="piLinkBtn" href={githubSlug} target="_blank" rel="noreferrer">
                  <IoLogoGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {slug && (
        <div className="piFooter">
          <a href={slug} target="_blank" rel="noreferrer">
            {t('projectInfo.open')}
            <IoArrowForward />
          </a>
        </div>
      )}
    </aside>
  );
}

export default ProjectInfo;
