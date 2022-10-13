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
  const direction = right ? 'fade-left' : 'fade-right';
  return (
    <div
      className={`${styles.card} ${right ? styles.right : ''}`}
      data-aos={direction}
    >
      <H3 transparent>{title}</H3>
      <p>{subtitle}</p>
      <span>{year}</span>
    </div>
  );
};

export default CourseCard;
