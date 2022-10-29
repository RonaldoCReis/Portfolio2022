import React, { useContext, useEffect, useRef } from 'react';
import H2 from './ui/H2';
import styles from './Courses.module.scss';
import CourseCard from './ui/CourseCard';
import Link from './ui/Link';
import Aos from 'aos';
import { MainContext } from './MainContext';
import { useRecoilState } from 'recoil';
import { coursesScrollState } from './context/atoms';

const Courses = () => {
  const [scroll, setScroll] = useRecoilState(coursesScrollState);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current)
      setScroll(ref.current.getBoundingClientRect().y + window.pageYOffset);
  }, [setScroll]);
  return (
    <section className={`container-small ${styles.container}`} ref={ref}>
      <H2 subtitle="More about my formations and courses">Studies</H2>
      <div className={styles.courses}>
        <CourseCard
          title="Internet IT Technician"
          subtitle="Etec de Poá"
          year="2017 - 2019"
        />
        <CourseCard
          title="Complete Web Design"
          subtitle="Origamid"
          year="2020"
          right
        />
        <CourseCard
          title="Bachelor in Information Systems"
          subtitle="Universidade Paulista"
          year="2020 - 2023"
        />
        <CourseCard
          title="Advanced CSS"
          subtitle="Origamid"
          year="2020"
          right
        />
        <CourseCard
          title="Complete React"
          subtitle="Origamid"
          year="2022"
          right
        />
      </div>
      <div style={{ textAlign: 'right' }}>
        <Link href="https://www.linkedin.com/in/ronaldocreis/">
          See all courses at LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default Courses;
