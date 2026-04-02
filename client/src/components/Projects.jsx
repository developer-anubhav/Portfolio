import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "WorkSphere Management System",
      description: "",
      github: "https://github.com/developer-anubhav/e-hrms",
      live: "https://e-hrms-zeta.vercel.app/"
    },
    {
      name: "Sellora E-Commerce",
      description: "A high-performance e-commerce platform built with MERN stack, featuring advanced filtering and seamless checkout.",
      github: "https://github.com/developer-anubhav/Sellora",
      live: "https://sellora-vert.vercel.app/"
    },
    {
      name: "DevHub",
      description: "Community platform for developers to connect, view Developer Events, and much more. (Under Development)"
    },
    {
      name: "Ascend Cloud",
      description: "A high-performance cloud storage platform built with MERN stack. (Under Development)",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4 block">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            PROJECTS<span className="text-gray-500">.</span>
          </h2>
        </div>
        <p className="max-w-xs text-gray-500 text-sm leading-relaxed">
          A collection of digital products focused on performance, aesthetics, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative p-8 border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 rounded-3xl flex flex-col justify-between min-h-[240px]"
          >
            {/* Top Right Links */}
            <div className="absolute top-8 right-8 flex gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-white transition-colors p-1"
                title="GitHub Repository"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-white transition-colors p-1"
                title="Live Demo"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            {/* Content */}
            <div className="mt-2">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4 pr-20">
                {project.name}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-[90%]">
                {project.description}
              </p>
            </div>

            {/* Bottom Tag / Indicator */}
            <div className="mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-all duration-500"></div>
                <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold group-hover:text-gray-400 transition-colors">Case Study Ready</span>
              </div>
              
              {/* Project Number */}
              <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors tracking-tighter">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
