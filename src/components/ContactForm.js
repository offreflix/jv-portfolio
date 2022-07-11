import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const form = useRef();
  const {
    REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_EMAILJS_PUBLIC_ID,
  } = process.env;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        REACT_APP_EMAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result);
          toast.success('Mensagem enviada com Sucesso');
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const { t } = useTranslation();

  return (
    <form className="ContactForm" ref={form} onSubmit={sendEmail}>
      <div className="ContactFormGrid">
        <input
          className="name"
          type="text"
          name="name"
          required
          placeholder={t('Nome')}
        />
        <input
          className="email"
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <input
          className="subject"
          type="subject"
          name="subject"
          required
          placeholder={t('Assunto')}
        />
        <textarea
          className="message"
          name="message"
          placeholder={t('Mensagem')}
          required
        />
      </div>
      <div className="send">
        <input type="submit" value={t('Enviar Mensagem!')} />
      </div>
    </form>
  );
};

export default ContactForm;
