import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../components';

function Contact() {
  const initialText = 'realjvictor@gmail.com';
  const [emailText, setEmailText] = useState(initialText);

  const { t } = useTranslation();

  return (
    <div className="Contact pages">
      <h2>{t('Entre em Contato')}</h2>
      <div className="flexContact">
        <div>
          <main className="main">
            <p>
              {t(
                'Estou interessado em oportunidades de emprego Não só para trabalhar, mas também para adquirir experiencia e ajudar à resolver problemas'
              )}
            </p>
            <p>{t('Também estou aceitando trabalhos como freelancer')}</p>
            <p>{t('Pode entrar em contato por qualquer meio')}</p>

            <div className="links">
              <CopyToClipboard text="realjvictor@gmail.com">
                <button
                  onMouseOver={() => setEmailText(t('Copie para o Clipboard'))}
                  onMouseLeave={() => setEmailText(initialText)}
                  onClick={() => {
                    setEmailText(t('Copiado'));
                    setTimeout(() => setEmailText(initialText), 1000);
                  }}
                >
                  {emailText}
                </button>
              </CopyToClipboard>
              <a
                href="https://www.linkedin.com/in/joao-victor-sabino/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/Reflixzinhu"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </main>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
