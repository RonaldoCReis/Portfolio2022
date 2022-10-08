import React from 'react';
import styles from './H2.module.scss';

type proptypes = {
  children: string;
  subtitle: string;
};

const H2 = ({ children, subtitle }: proptypes) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{children}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default H2;
