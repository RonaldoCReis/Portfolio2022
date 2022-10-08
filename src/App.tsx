import React from 'react';
import Courses from './Courses';
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
    </>
  );
};

export default App;
