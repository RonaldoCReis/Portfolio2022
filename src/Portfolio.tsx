import React, { useEffect } from 'react';
import H2 from './ui/H2';
import styles from './Portfolio.module.scss';
import Link from './ui/Link';
import Aos from 'aos';

const Portfolio = () => {
  return (
    <section className={`container ${styles.container}`}>
      <H2 subtitle="Veja alguns dos meus projetos e como foram feitos">
        Portfólio
      </H2>
      <div className={styles.projects}>
        <div className={styles.project} data-aos="zoom-in" data-aos-delay="0">
          <img />
        </div>
        <div className={styles.project} data-aos="zoom-in" data-aos-delay="100">
          <img />
        </div>
        <div className={styles.project} data-aos="zoom-in" data-aos-delay="200">
          <img />
        </div>
        <div className={styles.project} data-aos="zoom-in" data-aos-delay="0">
          <img />
        </div>
        <div className={styles.project} data-aos="zoom-in" data-aos-delay="100">
          <img />
        </div>
        <div className={styles.project} data-aos="zoom-in" data-aos-delay="200">
          <img />
        </div>
      </div>
      <Link href="https://github.com/RonaldoCReis/">
        Veja mais no meu Github
      </Link>
    </section>
  );
};

export default Portfolio;
