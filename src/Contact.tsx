import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import styles from './Contact.module.scss';
import { contactScrollState } from './context/atoms';
import CenterTitle from './ui/CenterTitle';

const Contact = () => {
  const [scroll, setScroll] = useRecoilState(contactScrollState);
  const contact = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contact.current) {
      setScroll(contact.current.getBoundingClientRect().y + window.pageYOffset);
    }
  }, [setScroll]);
  return (
    <section className={styles.container} ref={contact}>
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
