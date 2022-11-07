import React, { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';
import Card from './ui/Card';
import H3 from './ui/H3';
import reactLogo from '../public/img/react.png';
import typescriptLogo from '../public/img/typescript.png';
import nextjsLogo from '../public/img/nextjs.png';
import viteLogo from '../public/img/vite.png';
import jestLogo from '../public/img/jest.png';
import recoilLogo from '../public/img/recoil.svg';
import cssLogo from '../public/img/css.png';
import scssLogo from '../public/img/scss.png';
import bootstrapLogo from '../public/img/bootstrap.png';
import figmaLogo from '../public/img/figma.png';
import adobexdLogo from '../public/img/adobexd.png';
import storyBookLogo from '../public/img/Storybook.png';
import tailWindLogo from '../public/img/tailwind.png';
import Link from './ui/Link';
// import { MainContext } from './MainContext';
import { useRecoilState } from 'recoil';
import { skillsScrollState } from './context/atoms';
import Wave from './ui/Wave';
import H2 from './ui/H2';
import Image from 'next/image';

const Skills = () => {
  const [scroll, setScroll] = useRecoilState(skillsScrollState);
  const skills = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (skills.current) {
      setScroll(
        skills.current.getBoundingClientRect().y + window.pageYOffset - 100
      );
    }
  }, [setScroll]);

  return (
    <>
      <Wave />
      <div ref={skills} className="container">
        <H2 white subtitle="Techs and Stacks that I use on my projects">
          Stack
        </H2>
      </div>
      <section className={styles.container}>
        <div className={`container ${styles.card}`}>
          <Card>
            <div className={styles.skills}>
              <div className={styles.row}>
                <H3>Coding</H3>
                <ul className={styles.list}>
                  <li className={styles.item} data-aos="fade-down">
                    <i className={styles.icon}>
                      <Image loading="lazy" src={reactLogo} alt="React Logo" />
                    </i>
                    <p>React / Native</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    <i className={styles.icon}>
                      <Image
                        loading="lazy"
                        src={typescriptLogo}
                        alt="Typescript Logo"
                      />
                    </i>
                    <p>Typescript</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="200"
                  >
                    <i className={styles.icon}>
                      <Image
                        loading="lazy"
                        src={nextjsLogo}
                        alt="Javascript Logo"
                      />
                    </i>
                    <p>Next.js</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    <i className={styles.icon}>
                      <Image loading="lazy" src={viteLogo} alt="Vite Logo" />
                    </i>
                    <p>Vite</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <i className={styles.icon}>
                      <Image loading="lazy" src={jestLogo} alt="Jest Logo" />
                    </i>
                    <p>Jest</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <i className={styles.icon}>
                      <Image
                        loading="lazy"
                        src={recoilLogo}
                        alt="Recoil Logo"
                      />
                    </i>
                    <p>Recoil</p>
                  </li>
                </ul>
              </div>
              <div className={styles.row}>
                <H3>Styling</H3>
                <ul className={styles.list}>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="0"
                  >
                    <i className={styles.icon}>
                      <Image loading="lazy" src={cssLogo} alt="Css Logo" />
                    </i>
                    <p>CSS3</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    <i className={styles.icon}>
                      <Image loading="lazy" src={scssLogo} alt="Scss Logo" />
                    </i>
                    <p>SCSS</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="200"
                  >
                    <i className={styles.icon}>
                      <Image
                        loading="lazy"
                        src={storyBookLogo}
                        alt="Storybook Logo"
                      />
                    </i>
                    <p>Storybook</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    <i className={styles.icon}>
                      <Image
                        loading="lazy"
                        src={bootstrapLogo}
                        alt="bootstrap Logo"
                      />
                    </i>
                    <p>Bootstrap</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="300"
                  >
                    <i className={styles.icon}>
                      <Image
                        loading="lazy"
                        src={tailWindLogo}
                        alt="tailwind Logo"
                      />
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
                      <Image loading="lazy" src={figmaLogo} alt="Figma Logo" />
                    </i>
                    <p>Figma</p>
                  </li>
                  <li
                    className={styles.item}
                    data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    <i className={styles.icon}>
                      <Image
                        loading="lazy"
                        src={adobexdLogo}
                        alt="Adobe XD Logo"
                      />
                    </i>
                    <p>Adobe XD</p>
                  </li>
                </ul>
              </div>
              <Link href="https://www.linkedin.com/in/ronaldocreis/">
                See more on my LinkedIn
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Skills;
