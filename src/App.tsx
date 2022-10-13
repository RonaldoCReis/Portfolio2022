import React, { useEffect } from 'react';
import Contact from './Contact';
import Courses from './Courses';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Skills from './Skills';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Courses />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
