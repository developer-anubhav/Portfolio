import React from 'react';

const ReachOut = () => {
  const socials = [
    {
      name: "Github",
      url: "https://github.com/developer-anubhav",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/anubhavd",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
        </svg>
      )
    },
    {
      name: "Leetcode",
      url: "https://leetcode.com/u/anubhav_d/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.266 4.266a1.374 1.374 0 0 0 0 1.942 1.374 1.374 0 0 0 1.942 0l4.266-4.266A1.374 1.374 0 0 0 13.483 0zm-8.835 15.657a1.374 1.374 0 0 0-1.942 0 1.374 1.374 0 0 0 0 1.942l4.266 4.266a1.374 1.374 0 0 0 1.942 0 1.374 1.374 0 0 0 0-1.942l-4.266-4.266z" opacity=".2"/>
          <path d="M16.103 2.503c-.116-.112-.224-.225-.33-.341L11.507 6.42a1.374 1.374 0 0 1-1.942 0 1.374 1.374 0 0 1 0-1.942l4.266-4.266c-.161-.177-.333-.349-.51-.51L9.057 4l-.001.001a4.12 4.12 0 0 0 0 5.825L10.74 11.51c.012.012.023.025.035.037l5.244 5.244-11.51 11.51a1.374 1.374 0 1 0 1.942 1.942l11.51-11.51c.012.012.023.023.035.035l2.453 2.453a4.12 4.12 0 0 0 5.825 0l4.266-4.266a1.374 1.374 0 1 0-1.942-1.942l-4.266 4.266a1.374 1.374 0 0 1-1.942 0l-2.454-2.454L23.86 11.51a1.374 1.374 0 1 0-1.942-1.942L16.674 14.81l-5.244-5.244L16.103 2.503z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="reachout" className="py-20 px-6 container mx-auto text-center border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4 block font-bold animate-fade-in">Connect</span>
        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter animate-slide-up">
          REACH OUT <span className="gradient-text">TO ME.</span>
        </h2>

        {/* Image Placeholder */}
        <div className="relative mx-auto w-32 h-32 md:w-44 md:h-44 mb-8 animate-scale-in">
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-110"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl flex items-center justify-center">
            <img 
              src="/Anubhav.png" 
              alt="Reach out" 
              className="w-full h-full object-cover transform scale-110"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="animate-fade-in flex flex-col items-center mb-10">
           <h2 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">Anubhav Das</h2>
           <h3 className="text-[10px] md:text-xs font-bold text-gray-500 mb-6 uppercase tracking-[0.3em]">Software Developer</h3>
           
           <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[11px] font-bold tracking-widest uppercase">Bengaluru, India</span>
              </div>

              <a 
                href="mailto:anubhavfordev24@gmail.com" 
                className="group relative flex items-center gap-3 px-6 py-3 rounded-xl border border-white/5 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02] transition-all duration-500"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm font-bold tracking-tight">anubhavfordev24@gmail.com</span>
              </a>
           </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in">
          {socials.map((social, i) => (
            <a 
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="relative flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 bg-white/[0.05] text-gray-500 shadow-2xl shadow-black hover:text-white transition-colors"
            >
              <div className="z-10 scale-90">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
