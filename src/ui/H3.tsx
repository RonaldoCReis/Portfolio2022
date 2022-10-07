import React from 'react';
import styles from './H3.module.scss';

type proptypes = {
  children: string;
};

const H3 = ({ children }: proptypes) => {
  return <h3 className={styles.h3}>{children}</h3>;
};

export default H3;
