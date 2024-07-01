import React from 'react';
import Navbar from './Component/Narvba'
import Hero from './Component/Hero';
import About from './Component/About';
import Work from './Component/Work';
import Projects from './Component/MyProject';
import Contact from './Component/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
