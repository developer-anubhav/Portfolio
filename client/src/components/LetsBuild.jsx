import React from 'react';

const LetsBuild = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your vision, business goals, and defining the CORE problem we are solving together."
    },
    {
      number: "02",
      title: "Architecture",
      description: "Mapping out the data flow, selecting the right tech stack, and ensuring a scalable foundation."
    },
    {
      number: "03",
      title: "Development",
      description: "Writing clean, modular, and performant code with a focus on pixel-perfect UI and smooth UX."
    },
    {
      number: "04",
      title: "Ship",
      description: "Rigorous testing followed by a seamless deployment to ensure your product hits the ground running."
    }
  ];

  return (
    <section id="build" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4 block">
            The Workflow
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            LET'S <span className="text-gray-500">BUILD.</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg font-light leading-relaxed max-w-lg">
            Software is a craft. I follow a methodical process to transform your ideas into robust, scalable, and premium digital products.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="group relative p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 rounded-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors tracking-tighter mb-8 block font-mono">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-400 transition-colors">
                {step.description}
              </p>
            </div>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-1000"></div>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="mt-20 p-8 md:p-12 bg-white text-black rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 group overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-50"></div>
        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
            Ready to start a project?
          </h3>
          <p className="text-gray-700 font-medium">
            Currently accepting new Projects.
          </p>
        </div>
        <a 
          href="#reachout" 
          className="relative z-10 px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 hover:bg-zinc-800 transition-all duration-300 shadow-2xl flex items-center gap-2 group/btn"
        >
          Let's Talk
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default LetsBuild;
