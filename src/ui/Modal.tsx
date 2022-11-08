import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../context/atoms';
import Styles from './Modal.module.scss';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import Link from './Link';

const Modal = () => {
  const [modal, setModalState] = useRecoilState(modalState);

  useEffect(() => {
    if (
      modal &&
      modal.isOpen &&
      window.matchMedia('(min-width: 500px)').matches
    ) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [modal]);

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
      <div
        className={`${Styles.modal} ${
          modal.isOpen && Styles.animateIn
        } container`}
      >
        <div className={Styles.img}>
          <img loading="lazy" src={modal.imgUrl} alt={modal.title} />
        </div>
        <div>
          <h2 className={Styles.title}>{modal.title}</h2>
          <p className={Styles.desc}>{modal.desc}</p>
          {modal.link && (
            <Link target="_blank" href={modal.link}>
              Access the project
            </Link>
          )}
          <h3 className={Styles.title2}>Stack</h3>
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
