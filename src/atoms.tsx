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
