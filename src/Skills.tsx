import React from 'react';
import styles from './Skills.module.scss';
import Card from './ui/Card';
import H3 from './ui/H3';
import reactLogo from './img/react.png';
import typescriptLogo from './img/typescript.png';
import javascriptLogo from './img/javascript.png';
import jqueryLogo from './img/jquery.png';
import cssLogo from './img/css.png';
import scssLogo from './img/scss.png';
import bootstrapLogo from './img/bootstrap.png';
import figmaLogo from './img/figma.png';
import adobexdLogo from './img/adobexd.png';
import Link from './ui/Link';

const Skills = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Card>
          <div className={styles.skills}>
            <div className={styles.row}>
              <H3>Código</H3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={reactLogo} alt="React Logo" />
                  </i>
                  <p>React</p>
                </li>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={typescriptLogo} alt="Typescript Logo" />
                  </i>
                  <p>Typescript</p>
                </li>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={javascriptLogo} alt="Javascript Logo" />
                  </i>
                  <p>Javascript</p>
                </li>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={jqueryLogo} alt="jquery Logo" />
                  </i>
                  <p>Jquery</p>
                </li>
              </ul>
            </div>
            <div className={styles.row}>
              <H3>Estilos</H3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={cssLogo} alt="Css Logo" />
                  </i>
                  <p>CSS3</p>
                </li>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={scssLogo} alt="Scss Logo" />
                  </i>
                  <p>SCSS</p>
                </li>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={bootstrapLogo} alt="bootstrap Logo" />
                  </i>
                  <p>Bootstrap</p>
                </li>
              </ul>
            </div>
            <div className={styles.row}>
              <H3>UX & UI Design</H3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <i className={styles.icon}>
                    <img src={figmaLogo} alt="Figma Logo" />
                  </i>
                  <p>Figma</p>
                </li>
                <li className={styles.item}>
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
