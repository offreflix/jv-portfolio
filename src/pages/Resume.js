import React from 'react';
import { NavLink } from 'react-router-dom';

function Resume() {
  const resumeViewLink =
    'https://drive.google.com/file/d/1q9zMsHptYlXArTuTfuSNS41pFG0jKX4W/view?usp=sharing';
  const resumeDownloadLink =
    'https://drive.google.com/u/0/uc?id=1q9zMsHptYlXArTuTfuSNS41pFG0jKX4W&export=download';

  return (
    <div>
      <div className="Resume pages">
        <h2>Currículo</h2>
        <main className="main">
          <p>
            Entre em <NavLink to="/contact">Contato</NavLink>.{' '}
            <a href={resumeViewLink} target="_blank" rel="noreferrer">
              Veja
            </a>{' '}
            ou{' '}
            <a href={resumeDownloadLink} target="_blank" rel="noreferrer">
              Baixe
            </a>{' '}
            meu currículo.
          </p>

          <iframe src="https://drive.google.com/file/d/1q9zMsHptYlXArTuTfuSNS41pFG0jKX4W/preview" />
        </main>
      </div>
    </div>
  );
}

export default Resume;
