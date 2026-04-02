import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: About Section Header */}
        <div className="lg:col-span-4 sticky top-32">
          <span className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 block font-medium">Over the years</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            ABOUT <br /> 
            <span className="gradient-text">ME</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            I specialize in building digital experiences that merge technical precision with artistic flair. Every project is a journey into new possibilities.
          </p>
        </div>

        {/* Right Side: Modern Container Div */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Philosophy Card - Taking prominence */}
          <div className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 overflow-hidden flex flex-col justify-between min-h-[450px] transition-all duration-700 hover:border-white/20">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-all duration-700"></div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Core Philosophy</h3>
              <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-500">
                Stripping away the noise to let the essence shine. I believe in the power of negative space and the harmony of form and function. Visual balance isn't just a choice; it's a necessity for clarity.
              </p>
            </div>
            
            <div className="relative mt-8">
              <div className="flex gap-2">
                <span className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] uppercase font-bold tracking-widest text-gray-500 border border-white/5">Minimalism</span>
                <span className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] uppercase font-bold tracking-widest text-gray-500 border border-white/5">Balance</span>
              </div>
            </div>
          </div>

          {/* Vertical Stack of Two Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Glassmorphism Card (Top) - Modern UI */}
            <div className="group relative p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-3xl border border-white/10 overflow-hidden flex-1 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
              
              <div className="relative h-full flex flex-col">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-white/20"></span>
                  Minimalist UI
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  Crafting interfaces that feel intuitive and alive. Every interaction is an opportunity to engage.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border border-black bg-zinc-800 backdrop-blur-sm"></div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-white/80 transition-colors">INTERACTIVE</span>
                </div>
              </div>
            </div>

            {/* Second Card (Bottom) - Visual Excellence */}
            <div className="group relative p-8 rounded-[2rem] bg-zinc-900 border border-white/5 overflow-hidden flex-1 transition-all duration-500 hover:translate-x-2">
              <div className="relative h-full flex flex-col">
                <h4 className="text-xl font-bold text-white mb-4">Visual Experiences</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  Bringing brands to life through motion and depth, creating digital experiences that resonate long after the tab is closed.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[10px] text-gray-500 font-bold tracking-tighter">ALWAYS REFINING</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
