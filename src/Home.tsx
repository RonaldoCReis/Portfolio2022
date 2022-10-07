import React from 'react';
import styles from './Home.module.scss';
import donut from './img/Donut.png';

const Home = () => {
  return (
    <main className={`${styles.main} container`}>
      <div className={styles.intro}>
        <h1>Olá, sou o Ronaldo Reis. Dev Front End</h1>
        <p>Também sou web designer e exploro outras areas como 3D e game dev</p>
      </div>
      <div className={styles.donut}>
        <img src={donut} />
      </div>
    </main>
  );
};

export default Home;
