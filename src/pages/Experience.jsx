import React from 'react';
import { useTranslation } from 'react-i18next';
import { experiences, education } from '../data';

function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'pt' ? 'pt' : 'en';

  return (
    <div className="Experience pages">
      <h1>{t('experience.title')}</h1>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className={`timelineItem${exp.current ? ' current' : ''}`}>
            <div className="timelineLine" />
            <div className="timelineDot" />
            <div className="timelineCard">
              <div className="timelineHeader">
                <div className="timelineTitle">
                  <h2>{exp.company}</h2>
                  <h3>{exp.role[lang]}</h3>
                </div>
                <div className="timelineMeta">
                  {exp.current && (
                    <span className="currentBadge">
                      <span className="dot" />
                      {t('experience.present')}
                    </span>
                  )}
                  <span className="timelinePeriod">
                    {exp.start[lang]} – {exp.end ? exp.end[lang] : t('experience.present')}
                  </span>
                  {exp.location && (
                    <span className="timelineLocation">{exp.location}</span>
                  )}
                </div>
              </div>

              <ul className="timelineBullets">
                {exp.bullets[lang].map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              <div className="timelineTechs">
                {exp.techs.map((tech) => (
                  <span key={tech} className="techTag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="sectionDivider">{t('experience.education')}</h2>

      <div className="timeline">
        {education.map((edu) => (
          <div key={edu.id} className={`timelineItem${edu.current ? ' current' : ''}`}>
            <div className="timelineLine" />
            <div className="timelineDot" />
            <div className="timelineCard">
              <div className="timelineHeader">
                <div className="timelineTitle">
                  <h2>{edu.institution}</h2>
                  <h3>{edu.degree[lang]} · {edu.field[lang]}</h3>
                </div>
                <div className="timelineMeta">
                  {edu.current && (
                    <span className="currentBadge">
                      <span className="dot" />
                      {t('experience.present')}
                    </span>
                  )}
                  <span className="timelinePeriod">
                    {edu.start[lang]} – {edu.end[lang]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
