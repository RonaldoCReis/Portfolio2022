import { atom } from 'recoil';

export const mainScrollState = atom({
  key: 'mainScrollState',
  default: 0,
});

export const coursesScrollState = atom({
  key: 'coursesScrollState',
  default: 0,
});

export const portfolioScrollState = atom({
  key: 'portfolioScrollState',
  default: 0,
});

export const skillsScrollState = atom({
  key: 'skillsScrollState',
  default: 0,
});

export const contactScrollState = atom({
  key: 'contactScrollState',
  default: 0,
});

export const modalState = atom({
  key: 'modalState',
  default: {
    isOpen: false,
    imgUrl: '',
    title: '',
    desc: '',
    techs: new Array(),
  },
});
