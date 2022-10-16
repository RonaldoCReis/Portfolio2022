import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../context/atoms';
import Styles from './Modal.module.scss';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Modal = () => {
  const [modal, setModalState] = useRecoilState(modalState);

  useEffect(() => {
    if (modal && modal.isOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [modal]);

  useEffect(() => {
    setModalState({
      isOpen: true,
      title: 'Little Invest',
      imgUrl: 'src/img/littleinvest.png',
      desc: 'Website de uma corretora de investimentos. O design foi desenvolvido durante o curso de Adobe XD da origamid',
      techs: ['HTML5', 'SCSS', 'Javascript', 'Adobe Xd'],
    });
  }, []);

  const backdrop = useRef(null);
  function handleClose({ target }: any) {
    if (target === backdrop.current) {
      setModalState({
        ...modal,
        isOpen: false,
      });
      enablePageScroll();
    }
  }

  if (!modal.isOpen) return null;
  return (
    <div ref={backdrop} className={`${Styles.backdrop}`} onClick={handleClose}>
      <div className={`${Styles.modal} container`}>
        <div className={Styles.img}>
          <img src={modal.imgUrl} alt={modal.title} />
        </div>
        <div>
          <h2 className={Styles.title}>{modal.title}</h2>
          <p className={Styles.desc}>{modal.desc}</p>
          <h3 className={Styles.title2}>Ferramentas</h3>
          <ul className={Styles.techList}>
            {modal.techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
