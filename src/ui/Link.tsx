import React from 'react';
import styles from './Link.module.scss';

type proptypes = {
  children: string;
  href: string;
};

const Link = ({ children, href }: proptypes) => {
  return (
    <a className={styles.link} href={href} target="_blank">
      {children} <span>→</span>
    </a>
  );
};

export default Link;
