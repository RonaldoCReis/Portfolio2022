import React from 'react';
import styles from './H3.module.scss';

type proptypes = {
  children: string;
  transparent?: boolean;
};

const H3 = ({ children, transparent }: proptypes) => {
  return (
    <h3 className={`${styles.h3} ${transparent ? styles.transparent : ''}`}>
      {children}
    </h3>
  );
};

export default H3;
