import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <nav className="fixed top-8 left-0 w-full z-50 px-6">
      <div className={`mx-auto max-w-5xl transition-all duration-500 flex items-center px-6 py-3 rounded-full border border-white/10 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-2 scale-95 shadow-2xl shadow-white/5' : 'bg-white/5 backdrop-blur-md shadow-none'}`}>
        
        {/* Left Section: Name and Placeholder */}
        <div className="flex-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border flex items-center justify-center shrink-0">
            <img src="/Anubhav.png" alt="profile" className="w-full h-full object-cover" />
          </div>
          <a href="#" className="text-lg font-bold tracking-tighter hover:opacity-80 transition-opacity whitespace-nowrap">
            Anubhav<span className="text-gray-500">.</span>
          </a>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-400 tracking-wide">
          <a href="#home" className="hover:text-white transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-white transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#projects" className="hover:text-white transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-white transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#build" className="hover:text-white transition-colors relative group">
            Let's Build
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Right Section: CTA Button */}
        <div className="flex-1 flex justify-end">
          <a href="#contact" className="group flex items-center gap-2 px-5 py-2 bg-white text-black text-xs font-black rounded-full hover:bg-gray-200 transition-all active:scale-95 shrink-0">
            Start a Project
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>


      </div>
    </nav>

  );
};

export default Navbar;

