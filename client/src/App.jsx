import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen w-full bg-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Anubhav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


