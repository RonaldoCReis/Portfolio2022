import React from 'react';
import H3 from './H3';
import styles from './CourseCard.module.scss';

type proptypes = {
  title: string;
  subtitle: string;
  year: string;
  right?: boolean;
};

const CourseCard = ({ title, subtitle, year, right }: proptypes) => {
  return (
    <div className={`${styles.card} ${right ? styles.right : ''}`}>
      <H3 transparent>{title}</H3>
      <p>{subtitle}</p>
      <span>{year}</span>
    </div>
  );
};

export default CourseCard;
