import React, { useContext, useEffect, useRef } from 'react';
import H2 from './ui/H2';
import styles from './Portfolio.module.scss';
import Link from './ui/Link';
import Aos from 'aos';
import { MainContext } from './MainContext';
import { useRecoilState } from 'recoil';
import { portfolioScrollState } from './context/atoms';
import Modal from './ui/Modal';

const Portfolio = () => {
  const [scroll, setScroll] = useRecoilState(portfolioScrollState);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current)
      setScroll(ref.current.getBoundingClientRect().y + window.pageYOffset);
    console.log(scroll);
  }, [setScroll]);
  return (
    <section className={`container ${styles.container}`} ref={ref}>
      <H2 subtitle="Veja alguns dos meus projetos e como foram feitos">
        Portfólio
      </H2>
      <Modal />
      <div className={styles.projects}>
        <div
          className={`${styles.project}`}
          data-aos="zoom-in"
          data-aos-delay="0"
        >
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
