import React, { ReactHTMLElement } from 'react';
import styles from './H2.module.scss';

interface proptypes {
  children: string;
  subtitle: string;
  white?: boolean;
}

const H2 = ({ children, subtitle, white }: proptypes) => {
  return (
    <div className={styles.container}>
      <h2 style={white ? { color: '#fff' } : {}} className={styles.title}>
        {children}
      </h2>
      <p style={white ? { color: '#fff' } : {}} className={styles.subtitle}>
        {subtitle}
      </p>
    </div>
  );
};

export default H2;
