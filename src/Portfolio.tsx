import React from 'react';
import H2 from './ui/H2';
import styles from './Portfolio.module.scss';
import Link from './ui/Link';

const Portfolio = () => {
  return (
    <section className={`container ${styles.container}`}>
      <H2 subtitle="Veja alguns dos meus projetos e como foram feitos">
        Portfólio
      </H2>
      <div className={styles.projects}>
        <div className={styles.project}>
          <img />
        </div>
        <div className={styles.project}>
          <img />
        </div>
        <div className={styles.project}>
          <img />
        </div>
        <div className={styles.project}>
          <img />
        </div>
        <div className={styles.project}>
          <img />
        </div>
        <div className={styles.project}>
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
