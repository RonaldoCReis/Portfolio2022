import React from 'react';
import styles from './Button.module.scss';

type proptypes = {
  children: string;
};

const Button = ({ children }: proptypes) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
