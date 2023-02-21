import React, { Fragment, useState } from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyles from './globalStyles';
import Info from './components/Info'
import { InfoDataOne } from './data/InfoData';
import Projects from './components/Projects';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <GlobalStyles />
      <Navbar toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <Hero />
      <Projects heading="Projects" />
      <Info {...InfoDataOne}/>
    </Fragment>
  );
}

export default App;
