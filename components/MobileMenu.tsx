'use client';

import { useState } from 'react';
import NavLinks from './NavLinks';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* 2-Line Hamburger Button (Tap Target Optimized) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex flex-col items-end justify-center gap-1.5 p-2 min-h-[44px] min-w-[44px]"
        aria-label="Toggle Menu"
      >
        <span className={`h-0.5 bg-zinc-50 transition-all duration-300 rounded-full ${
          isOpen ? 'w-7 rotate-45 translate-y-1 bg-amber-400' : 'w-7'
        }`} />
        <span className={`h-0.5 bg-zinc-50 transition-all duration-300 rounded-full ${
          isOpen ? 'w-7 -rotate-45 -translate-y-1 bg-amber-400' : 'w-4'
        }`} />
      </button>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 bg-black/98 backdrop-blur-2xl z-40 transition-transform duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Left-aligned vertical navigation menu items */}
        <div className="flex flex-col items-start justify-center h-full px-10">
          <div 
            onClick={() => setIsOpen(false)}
            className="font-mono text-xl tracking-widest space-y-8"
          >
            <NavLinks /> 
          </div>
        </div>
      </div>
    </div>
  );
}