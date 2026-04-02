import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-black py-12 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-[11px] font-bold tracking-[0.3em] uppercase text-gray-500">
        
        {/* Left Pillar: License & Rights */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
           <span className="text-white">© 2026</span>
           <div className="w-1 h-1 rounded-full bg-gray-800"></div>
           <span>ANUBHAV DAS</span>
           <div className="w-1 h-1 rounded-full bg-gray-800"></div>
           <span className="hidden sm:inline">ALL RIGHTS RESERVED.</span>
           <span className="sm:hidden text-[9px]">A.R.R.</span>
        </div>

        {/* Center Pillar: Local Time */}
        <div className="flex items-center gap-2 justify-center">
           <span className="text-gray-700">TIME / IST:</span>
           <span className="text-white tabular-nums tracking-normal">{time}</span>
        </div>

        {/* Right Pillar: Back to Top */}
        <div className="flex justify-center md:justify-end">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-white hover:opacity-50 transition-all duration-300"
          >
            <span>BACK TO TOP</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:-translate-y-1 transition-transform">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
