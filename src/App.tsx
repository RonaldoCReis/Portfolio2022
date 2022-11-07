import React, { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import Contact from './Contact';
import Courses from './Courses';
import Footer from './Footer';
import Header from './Header';
import Home from './HomeSection';
import Portfolio from './Portfolio';
import Skills from './Skills';

const App = () => {
  return (
    <RecoilRoot>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Courses />
      <Contact />
      <Footer />
    </RecoilRoot>
  );
};

export default App;
