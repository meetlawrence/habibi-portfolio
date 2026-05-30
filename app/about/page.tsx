// src/app/about/page.tsx
import Image from 'next/image';
import Biodata from '@/components/Biodata';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 relative overflow-hidden flex items-center py-16 md:py-24">
      
      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT PANEL */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase mb-1">
              HELLO, I AM
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-50 tracking-wide uppercase mb-8">
              Gabriel Okonkwo 
            </h1>
            
            {/* Aspect-ratio matched picture frame displaying the profile element with a custom inner vignette glow effect */}
            <div className="relative w-full max-w-90 lg:max-w-none aspect-4/5 border border-zinc-800 bg-zinc-900/20 p-2 rounded-2xl backdrop-blur-sm shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-950 border border-zinc-900">
                <Image 
                  src="/habibi-profile.webp" 
                  alt="Gabriel Habibi - Portfolio Profile"
                  fill
                  priority
                  className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  sizes="(max-w-768px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Injecting Biodata cleanly.*/}
            <div className="space-y-10 text-zinc-400 font-light leading-relaxed">
              <Biodata />
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}