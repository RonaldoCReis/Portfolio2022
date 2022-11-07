import React, { useContext, useEffect, useRef } from 'react';
import H2 from './ui/H2';
import styles from './Portfolio.module.scss';
import Link from './ui/Link';
import Aos from 'aos';
import { MainContext } from './MainContext';
import { useRecoilState } from 'recoil';
import { modalState, portfolioScrollState } from './context/atoms';
import Modal from './ui/Modal';
import Image from 'next/image';

const Portfolio = () => {
  const [scroll, setScroll] = useRecoilState(portfolioScrollState);
  const [modal, setModal] = useRecoilState(modalState);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current)
      setScroll(ref.current.getBoundingClientRect().y + window.pageYOffset);
    console.log(scroll);
  }, [setScroll]);
  const projects = [
    {
      title: 'Little Invest',
      imgUrl: '/img/littleInvest.png',
      desc: 'Website de uma corretora de investimentos. O design foi desenvolvido durante o curso de Adobe XD da origamid',
      techs: ['HTML5', 'SCSS', 'Javascript', 'Adobe Xd'],
    },
    {
      title: 'Dogs',
      imgUrl: '/img/dogs.png',
      desc: 'Uma rede social para cachorros!',
      techs: ['React', 'CSS Modules', 'Javascript', 'Figma'],
    },
    {
      title: 'Imovel Guide',
      imgUrl: '/img/guide.png',
      desc: 'Portal imobiliário onde atuei como desenvolvedor front end e UI Designer',
      techs: ['HTML5', 'Bootstrap', 'CSS5', 'Javascript', 'Jquery', 'Adobe XD'],
    },
    {
      title: 'Design System - Ignite',
      imgUrl: '/img/ignite.png',
      desc: 'Design system desenvolvido no figma e passado para o storybook',
      techs: ['React', 'Typescript', 'Vite ', 'Tailwind', 'Storybook', 'Figma'],
    },
    {
      title: 'Blocks',
      imgUrl: '/img/blocks.png',
      desc: 'Uma aplicação web de blocos de anotação e design system com storybook',
      techs: ['React', 'Typescript', 'Recoil', 'Vitest', 'Storybook', 'Figma'],
    },
  ];
  interface modalTypes {
    imgUrl: string;
    title: string;
    desc: string;
    techs: string[];
  }
  function openModal(data: modalTypes) {
    setModal({
      ...data,
      isOpen: true,
    });
  }
  return (
    <section className={`container ${styles.container}`} ref={ref}>
      <H2 subtitle="Some of my projects and how they were made">Portfolio</H2>
      <Modal />
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div
            key={project.title + index}
            className={`${styles.project}`}
            data-aos="zoom-in"
            data-aos-delay={50 * index - 50}
            onClick={() => openModal(project)}
          >
            <img alt={project.title} src={project.imgUrl} />
          </div>
        ))}
      </div>
      <Link href="https://github.com/RonaldoCReis/">See more on github</Link>
    </section>
  );
};

export default Portfolio;
