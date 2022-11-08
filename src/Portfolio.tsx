import React, { useEffect, useRef } from 'react';
import H2 from './ui/H2';
import styles from './Portfolio.module.scss';
import Link from './ui/Link';
import { useRecoilState } from 'recoil';
import { modalState, portfolioScrollState } from './context/atoms';
import Modal from './ui/Modal';

const Portfolio = () => {
  const [scroll, setScroll] = useRecoilState(portfolioScrollState);
  const [modal, setModal] = useRecoilState(modalState);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current)
      setScroll(ref.current.getBoundingClientRect().y + window.pageYOffset);
    console.log(scroll);
  }, [setScroll]);

  interface projectsType {
    title: string;
    desc: string;
    techs: string[];
    imgUrl: string;
    link: string;
  }
  const projects: projectsType[] = [
    {
      title: 'Little Invest',
      imgUrl: '/img/littleInvest.png',
      desc: "A ivesment broker website designed on the origamid's adobe xd course and coded by me.",
      techs: ['HTML5', 'SCSS', 'Javascript', 'Adobe Xd'],
      link: '',
    },
    {
      title: 'Dogs',
      imgUrl: '/img/dogs.png',
      desc: 'A social network for dogs made with React.',
      techs: ['React', 'CSS Modules', 'Javascript', 'Figma'],
      link: 'https://dogs.ronaldo-reis.com/',
    },
    {
      title: 'Imovel Guide',
      imgUrl: '/img/guide.png',
      desc: 'A real estate portal where i worked as front-end developer and UI designer.',
      techs: ['HTML5', 'Bootstrap', 'CSS5', 'Javascript', 'Jquery', 'Adobe XD'],
      link: 'https://imovelguide.com.br/',
    },
    {
      title: 'Design System - Ignite',
      imgUrl: '/img/ignite.png',
      desc: 'A log-in screen design system made with React and Storybook.',
      techs: ['React', 'Typescript', 'Vite ', 'Tailwind', 'Storybook', 'Figma'],
      link: '',
    },
    {
      title: 'Blocks',
      imgUrl: '/img/blocks.png',
      desc: 'A note taking app made with React, storybook and vitest for automated testing.',
      techs: ['React', 'Typescript', 'Recoil', 'Vitest', 'Storybook', 'Figma'],
      link: 'https://blocks.ronaldo-reis.com/',
    },
  ];
  interface modalTypes {
    imgUrl: string;
    title: string;
    desc: string;
    techs: string[];
    link: string;
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
