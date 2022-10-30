import React, { useContext, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  contactScrollState,
  coursesScrollState,
  portfolioScrollState,
  skillsScrollState,
} from './context/atoms';
import Button from './Button';
import styles from './Header.module.scss';
import HeaderLink from './HeaderLink';
import { MainContext } from './MainContext';
import { List, X } from 'phosphor-react';

const Header = () => {
  const [active, setActive] = React.useState('Home');

  const links: linkType[] = [
    { title: 'Home', scroll: 'main' },
    { title: 'Stack', scroll: 'skills' },
    { title: 'Portfolio', scroll: 'portfolio' },
    { title: 'Studies', scroll: 'courses' },
  ];
  // const scroll = useRecoilValue(scrollState);
  const skillsScroll = useRecoilValue(skillsScrollState);
  const portfolioScroll = useRecoilValue(portfolioScrollState);
  const coursesScroll = useRecoilValue(coursesScrollState);
  const contactScroll = useRecoilValue(contactScrollState);
  // const { scroll } = useContext(MainContext);
  const [scroll, setScroll] = useState({
    skills: 0,
    portfolio: 0,
    main: 0,
    courses: 0,
  });

  const [activeHeader, setActiveHeader] = useState(false);

  const [activeMobile, setActiveMobile] = useState(false);

  useEffect(() => {
    setScroll({
      skills: skillsScroll,
      portfolio: portfolioScroll,
      main: 0,
      courses: coursesScroll,
    });
  }, [skillsScroll, portfolioScroll, coursesScroll]);

  type linkType = {
    title: string;
    scroll: string;
  };
  function handleScroll(event: Event) {
    if (window.pageYOffset > 35) setActiveHeader(true);
    else setActiveHeader(false);
    setActiveMobile(false);
    const offset = screen.height / 2.5;
    if (window.pageYOffset >= Math.floor(coursesScroll - offset)) {
      setActive('Studies');
    } else if (window.pageYOffset >= Math.floor(portfolioScroll - offset)) {
      setActive('Portfolio');
    } else if (window.pageYOffset >= Math.floor(skillsScroll - offset)) {
      setActive('Stack');
    } else {
      setActive('Home');
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skillsScroll, portfolioScroll, coursesScroll]);

  function handleButton() {
    window.scrollTo({
      top: contactScroll,
      behavior: 'smooth',
    });
  }
  return (
    <>
      <div
        className={`${styles.menuHamburger} ${
          activeMobile ? styles.mobile : ''
        }`}
      >
        <button
          className={styles.mobileButton}
          onClick={() => setActiveMobile(!activeMobile)}
        >
          <List size={32} />
        </button>
      </div>
      <div
        className={`${styles.headerContainer} ${
          activeHeader ? styles.scroll : ''
        } ${activeMobile ? styles.mobile : ''}`}
      >
        <header className={`${styles.header} container`}>
          <nav className={styles.nav}>
            <button
              className={styles.mobileButton}
              onClick={() => setActiveMobile(!activeMobile)}
            >
              <X size={32} />
            </button>
            {links &&
              links.map((link) => (
                <HeaderLink
                  key={link.title}
                  active={active}
                  scrollTo={scroll[link.scroll as keyof typeof scroll]}
                >
                  {link.title}
                </HeaderLink>
              ))}
          </nav>
          <Button onClick={handleButton}>Contact me</Button>
        </header>
      </div>
    </>
  );
};

export default Header;
