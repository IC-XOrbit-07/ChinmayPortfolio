import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Aboutme from './component/Aboutme';
import Service from './component/Service';
import Projects from './component/Projects';

function App() {
  return (
    <> 
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Projects/>
      <Service/>
    </>
  );
}

export default App;
