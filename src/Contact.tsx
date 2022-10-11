import React from 'react';
import styles from './Contact.module.scss';
import CenterTitle from './ui/CenterTitle';

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <CenterTitle>Entre em contato</CenterTitle>
      </div>
      <div className={styles.links}>
        <a
          href="https://api.whatsapp.com/send?phone=5511942594783"
          target="_blank"
        >
          55 11 94259-4783
        </a>
        <a href="mailto:ronaldocreis7@gmail.com">ronaldocreis7@gmail.com</a>
        <a href="https://linkedin.com/in/ronaldocreis" target="_blank">
          linkedin.com/in/ronaldocreis
        </a>
      </div>
    </section>
  );
};

export default Contact;
