import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import LetsBuild from './components/LetsBuild';
import ReachOut from './components/ReachOut';

function App() {
  return (
    <div className="min-h-screen w-full bg-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <LetsBuild />
      <ReachOut />
      
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Anubhav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


