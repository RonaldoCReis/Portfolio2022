import React from 'react';
import styles from './HeaderLink.module.scss';

type proptypes = {
  children: string;
  active: string;
  scrollTo?: number;
};

const HeaderLink = ({ children, active, scrollTo = 0 }: proptypes) => {
  function setScroll() {
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  }
  return (
    <a
      className={`${styles.navLink} ${
        active === children ? styles.active : ''
      }`}
      onClick={setScroll}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
