import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';
import { IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoCopyOutline, IoCheckmarkOutline } from 'react-icons/io5';
import { ContactForm } from '../components';

function Contact() {
  const initialText = 'realjvictor@gmail.com';
  const [emailText, setEmailText] = useState(initialText);

  const { t } = useTranslation();

  return (
    <div className="Contact pages">
      <h2>{t('contact.title')}</h2>
      <div className="flexContact">
        <div>
          <main className="main">
            <p>{t('contact.intro')}</p>
            <p>{t('contact.freelance')}</p>
            <p>{t('contact.methods')}</p>

            <div className="links">
              <CopyToClipboard text="realjvictor@gmail.com">
                <button
                  className={emailText === t('contact.clipboard.copied') ? 'copied' : ''}
                  onMouseOver={() => setEmailText(t('contact.clipboard.copy'))}
                  onMouseLeave={() => setEmailText(initialText)}
                  onClick={() => {
                    setEmailText(t('contact.clipboard.copied'));
                    setTimeout(() => setEmailText(initialText), 1000);
                  }}
                >
                  {emailText === t('contact.clipboard.copied') ? (
                    <IoCheckmarkOutline className="linkIcon" />
                  ) : (
                    <IoMailOutline className="linkIcon" />
                  )}
                  <span>{emailText}</span>
                  <IoCopyOutline className="linkIconTrail" />
                </button>
              </CopyToClipboard>
              <a
                href="https://www.linkedin.com/in/joao-victor-sabino/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin className="linkIcon" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Reflixzinhu"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub className="linkIcon" />
                <span>GitHub</span>
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
