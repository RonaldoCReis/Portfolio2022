import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';
import Card from './ui/Card';
import H3 from './ui/H3';
import reactLogo from './img/react.png';
import typescriptLogo from './img/typescript.png';
import javascriptLogo from './img/javascript.png';
import viteLogo from './img/vite.png';
import jestLogo from './img/jest.png';
import recoilLogo from './img/recoil.svg';
import cssLogo from './img/css.png';
import scssLogo from './img/scss.png';
import bootstrapLogo from './img/bootstrap.png';
import figmaLogo from './img/figma.png';
import adobexdLogo from './img/adobexd.png';
import storyBookLogo from './img/Storybook.png';
import tailWindLogo from './img/tailwind.png';
import Link from './ui/Link';
import Aos from 'aos';
// import { MainContext } from './MainContext';
import { useRecoilState } from 'recoil';
import { skillsScrollState } from './context/atoms';

const Skills = () => {
  const [scroll, setScroll] = useRecoilState(skillsScrollState);
  const skills = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Aos.init({ offset: 100, duration: 300, once: true });
    if (skills.current) {
      setScroll(skills.current.getBoundingClientRect().y + window.pageYOffset);
    }
  }, [setScroll]);

  return (
    <section className={styles.container} ref={skills}>
      <div className={`container ${styles.card}`}>
        <Card>
          <div className={styles.skills}>
            <div className={styles.row}>
              <H3>Código</H3>
              <ul className={styles.list}>
                <li className={styles.item} data-aos="fade-down">
                  <i className={styles.icon}>
                    <img src={reactLogo} alt="React Logo" />
                  </i>
                  <p>React</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <i className={styles.icon}>
                    <img src={typescriptLogo} alt="Typescript Logo" />
                  </i>
                  <p>Typescript</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <i className={styles.icon}>
                    <img src={javascriptLogo} alt="Javascript Logo" />
                  </i>
                  <p>Javascript</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <i className={styles.icon}>
                    <img src={viteLogo} alt="Vite Logo" />
                  </i>
                  <p>Vite</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <i className={styles.icon}>
                    <img src={jestLogo} alt="Jest Logo" />
                  </i>
                  <p>Jest</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <i className={styles.icon}>
                    <img src={recoilLogo} alt="Recoil Logo" />
                  </i>
                  <p>Recoil</p>
                </li>
              </ul>
            </div>
            <div className={styles.row}>
              <H3>Estilos</H3>
              <ul className={styles.list}>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="0"
                >
                  <i className={styles.icon}>
                    <img src={cssLogo} alt="Css Logo" />
                  </i>
                  <p>CSS3</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <i className={styles.icon}>
                    <img src={scssLogo} alt="Scss Logo" />
                  </i>
                  <p>SCSS</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <i className={styles.icon}>
                    <img src={storyBookLogo} alt="Storybook Logo" />
                  </i>
                  <p>Storybook</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <i className={styles.icon}>
                    <img src={bootstrapLogo} alt="bootstrap Logo" />
                  </i>
                  <p>Bootstrap</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <i className={styles.icon}>
                    <img src={tailWindLogo} alt="tailwind Logo" />
                  </i>
                  <p>Tailwind</p>
                </li>
              </ul>
            </div>
            <div className={styles.row}>
              <H3>UX & UI Design</H3>
              <ul className={styles.list}>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="0"
                >
                  <i className={styles.icon}>
                    <img src={figmaLogo} alt="Figma Logo" />
                  </i>
                  <p>Figma</p>
                </li>
                <li
                  className={styles.item}
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <i className={styles.icon}>
                    <img src={adobexdLogo} alt="Adobe XD Logo" />
                  </i>
                  <p>Adobe XD</p>
                </li>
              </ul>
            </div>
            <Link href="https://www.linkedin.com/in/ronaldocreis/">
              Veja mais no meu LinkedIn
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
