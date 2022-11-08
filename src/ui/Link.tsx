import React from 'react';
import styles from './Link.module.scss';

interface proptypes extends React.HTMLProps<HTMLAnchorElement> {
  children: string;
  href: string;
}

const Link = ({ children, href, ...props }: proptypes) => {
  return (
    <a {...props} className={styles.link} href={href} target="_blank">
      {children} <span>→</span>
    </a>
  );
};

export default Link;
