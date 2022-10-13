import React, { useEffect } from 'react';
import H2 from './ui/H2';
import styles from './Courses.module.scss';
import CourseCard from './ui/CourseCard';
import Link from './ui/Link';
import Aos from 'aos';

const Courses = () => {
  return (
    <section className={`container-small ${styles.container}`}>
      <H2 subtitle="Um pouco sobre a minha jornada acadêmica">Formações</H2>
      <div className={styles.courses}>
        <CourseCard
          title="Tecnico em Informática para Internet"
          subtitle="Etec de Poá"
          year="2017 - 2019"
        />
        <CourseCard
          title="Web Design Completo"
          subtitle="Origamid"
          year="2020"
          right
        />
        <CourseCard
          title="Bacharel em Sistemas de Informação"
          subtitle="Universidade Paulista"
          year="2020 - 2023"
        />
        <CourseCard
          title="CSS Avançado / Flexbox / Grid / SCSS"
          subtitle="Origamid"
          year="2020"
          right
        />
        <CourseCard
          title="React Completo"
          subtitle="Origamid"
          year="2022"
          right
        />
      </div>
      <div style={{ textAlign: 'right' }}>
        <Link href="https://www.linkedin.com/in/ronaldocreis/">
          Veja todos os cursos LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default Courses;
