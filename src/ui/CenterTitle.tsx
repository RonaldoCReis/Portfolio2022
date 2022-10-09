import React from 'react';
import styles from './CenterTitle.module.scss';

const CenterTitle = ({ children }: { children: string }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default CenterTitle;
