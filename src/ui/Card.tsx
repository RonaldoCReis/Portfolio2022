import React, { ReactElement } from 'react';
import styles from './Card.module.scss';

type proptypes = {
  children: ReactElement;
  container: boolean;
};

const Card = ({ children, container }: proptypes) => {
  return (
    <div className={`${container ? 'container' : ''} ${styles.card}`}>
      {children}
    </div>
  );
};

export default Card;
