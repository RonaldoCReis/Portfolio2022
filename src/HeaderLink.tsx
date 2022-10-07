import React from 'react';
import styles from './HeaderLink.module.scss';

type proptypes = {
  children: string;
  active: string;
};

const HeaderLink = ({ children, active }: proptypes) => {
  return (
    <a
      className={`${styles.navLink} ${
        active === children ? styles.active : ''
      }`}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
