import React from 'react';
import styles from './Home.module.scss';
import donut from '/img/Donut.png';

const Home = () => {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.intro}>
        <h1>Hi, I'm Ronaldo Reis A Front end dev</h1>
        <p>Also a web designer with passion for learning </p>
      </div>
      <div className={styles.donut}>
        <img src={donut} />
      </div>
    </main>
  );
};

export default Home;
