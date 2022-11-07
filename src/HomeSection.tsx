import Image from 'next/image';
import React from 'react';
import styles from './Home.module.scss';
import donut from '../public/img/Donut.png';

const HomeSection = () => {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.intro}>
        <h1>Hi, I'm Ronaldo Reis A Front end dev</h1>
        <h2>Also a web designer with passion for learning </h2>
      </div>
      <div className={styles.donut}>
        <Image alt="Donut 3d" src={donut} />
      </div>
    </main>
  );
};

export default HomeSection;
