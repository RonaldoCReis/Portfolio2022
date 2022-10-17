import React, { useContext, useEffect, useRef } from 'react';
import H2 from './ui/H2';
import styles from './Portfolio.module.scss';
import Link from './ui/Link';
import Aos from 'aos';
import { MainContext } from './MainContext';
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
  const projects = [
    {
      title: 'Little Invest',
      imgUrl: 'src/img/littleinvest.png',
      desc: 'Website de uma corretora de investimentos. O design foi desenvolvido durante o curso de Adobe XD da origamid',
      techs: ['HTML5', 'SCSS', 'Javascript', 'Adobe Xd'],
    },
    {
      title: 'Dogs',
      imgUrl: 'src/img/dogs.png',
      desc: 'Uma rede social para cachorros!',
      techs: ['React', 'CSS Modules', 'Javascript', 'Figma'],
    },
    {
      title: 'Imovel Guide',
      imgUrl: 'src/img/guide.png',
      desc: 'Portal imobiliário onde atuei como desenvolvedor front end e UI Designer',
      techs: ['HTML5', 'Bootstrap', 'CSS5', 'Javascript', 'Jquery', 'Adobe XD'],
    },
    {
      title: 'Design System - Ignite',
      imgUrl: 'src/img/ignite.png',
      desc: 'Design system desenvolvido no figma e passado para o storybook',
      techs: ['React', 'Typescript', 'Tailwind', 'Storybook', 'Figma'],
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
      <H2 subtitle="Veja alguns dos meus projetos e como foram feitos">
        Portfólio
      </H2>
      <Modal />
      <div className={styles.projects}>
        {projects.map((project) => (
          <div
            className={`${styles.project}`}
            data-aos="zoom-in"
            data-aos-delay="0"
            onClick={() => openModal(project)}
          >
            <img src={project.imgUrl} />
          </div>
        ))}
      </div>
      <Link href="https://github.com/RonaldoCReis/">
        Veja mais no meu Github
      </Link>
    </section>
  );
};

export default Portfolio;
