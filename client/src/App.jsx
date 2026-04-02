import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import LetsBuild from './components/LetsBuild';
import ReachOut from './components/ReachOut';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <LetsBuild />
      <ReachOut />
      <Footer />
    </div>
  );
}

export default App;


