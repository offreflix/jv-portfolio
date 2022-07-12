import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { resumeViewLink, resumeDownloadLink } from '../data/index';
import { Trans } from 'react-i18next';

function Resume() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="Resume pages">
        <h2>{t('Currículo')}</h2>
        <main className="main">
          <p>
            <Trans
              t={t}
              components={{
                linkView: (
                  // eslint-disable-next-line jsx-a11y/anchor-has-content
                  <a href={resumeViewLink} target="_blank" rel="noreferrer" />
                ),
                linkDownload: (
                  // eslint-disable-next-line jsx-a11y/anchor-has-content
                  <a
                    href={resumeDownloadLink}
                    target="_blank"
                    rel="noreferrer"
                  />
                ),
                contactLink: <NavLink to="/contact" />,
              }}
            >
              Entre em contato
            </Trans>
          </p>

          <iframe
            title="resume"
            src="https://drive.google.com/file/d/1q9zMsHptYlXArTuTfuSNS41pFG0jKX4W/preview"
          />
        </main>
      </div>
    </div>
  );
}

export default Resume;
