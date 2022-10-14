import React from 'react';
import styles from './Button.module.scss';

type proptypes = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: proptypes) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
