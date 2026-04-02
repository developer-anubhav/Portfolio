import React from 'react';

const Hero = () => {
  const stats = [
    { label: "Experience", value: "Two Years" },
    { label: "Builds", value: "99% Polished" },
    { label: "Products", value: "5 Built" }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] w-full flex flex-col justify-center items-center px-6 pt-32 pb-16 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Subtle radial gradient background */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black" />
      </div>

      <div className="z-10 max-w-5xl animate-slide-up">
        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-6 block animate-fade-in">
          Creative Developer & Tech Enthusiast
        </span>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          <span className="text-white">I'm Anubhav.</span> <br />
          <span className="gradient-text">Building the Next Gen.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
          I'm a developer passionate about crafting high-end, immersive digital landscapes.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
          <a href="#work" className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/5">
            Explore Portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="group flex items-center gap-2 px-8 py-4 border border-white/10 bg-white/5 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
            Let's Collaborate
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Glimpse of work - Tech Stack / Keywords */}
        <div className="flex flex-wrap justify-center gap-12 text-[11px] font-bold tracking-widest text-gray-600 mb-20 uppercase">
          <span className="hover:text-white transition-colors cursor-default">Full-Stack Architecture</span>
          <span className="hover:text-white transition-colors cursor-default">High-End UI/UX</span>
          <span className="hover:text-white transition-colors cursor-default">Community Tools</span>
          <span className="hover:text-white transition-colors cursor-default">E-Commerce Logic</span>
        </div>



        {/* Stats Section Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-white/10 transition-colors text-left"
            >
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

