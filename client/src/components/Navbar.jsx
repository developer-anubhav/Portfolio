import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: "Let's Build", href: '#build' },
    { name: 'Reach Out', href: '#reachout' },
  ];

  return (
    <>
      <nav className="fixed top-6 md:top-8 left-0 w-full z-50 px-4 md:px-6">
        <div className={`mx-auto max-w-5xl transition-all duration-500 flex items-center justify-between px-6 py-3 rounded-full border border-white/10 ${scrolled ? 'bg-black/60 backdrop-blur-xl py-2 scale-95 shadow-2xl shadow-white/5' : 'bg-white/5 backdrop-blur-md shadow-none'}`}>
          
          {/* Left Section: Name and Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex items-center justify-center shrink-0">
              <img src="/Anubhav.png" alt="profile" className="w-full h-full object-cover" />
            </div>
            <a href="#" className="text-lg font-bold tracking-tighter hover:opacity-80 transition-opacity whitespace-nowrap">
              Anubhav<span className="text-gray-500">.</span>
            </a>
          </div>

          {/* Center Section: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-gray-400 tracking-wide">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Section: Mobile Toggle & Desktop Welcome */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <span className="text-gray-500 text-sm font-bold tracking-tighter">Welcome Dev.</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/5 rounded-full transition-colors relative z-[60]"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isOpen ? 'w-6 -translate-y-2.5 rotate-45' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl"></div>
        <div className="relative h-full flex flex-col justify-center items-center p-8">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black tracking-tighter text-white transition-all duration-500 delay-[${100 * i}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-20 flex flex-col items-center gap-4">
             <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <img src="/Anubhav.png" alt="profile" className="w-full h-full object-cover" />
             </div>
             <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em]">Available for projects</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


