// src/app/about/page.tsx
import Image from 'next/image';
import Biodata from '@/components/Biodata';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 relative overflow-hidden flex items-center py-16 md:py-24">
      
      {/* Structural ambient spotlight mirroring the blue aura backdrop from Creación web moderno visualxdzdfbzd.jpg */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-orange-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT PANEL: Cinematic Character Profile Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase mb-1">
              HELLO, I AM
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-50 tracking-wide uppercase mb-8">
              Gabriel Okonkwo 
            </h1>
            
            {/* Aspect-ratio matched picture frame displaying the profile element with a custom inner vignette glow effect */}
            <div className="relative w-full max-w-[360px] lg:max-w-none aspect-[4/5] border border-zinc-800 bg-zinc-900/20 p-2 rounded-2xl backdrop-blur-sm shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-zinc-950 border border-zinc-900">
                <Image 
                  src="/habibi-profile.jpg" 
                  alt="Gabriel Habibi - Portfolio Profile"
                  fill
                  priority
                  className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  sizes="(max-w-768px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Tight Content Grid Integration Mapping */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* 
              Injecting Biodata cleanly. 
              To match the text block layout on the right side of Creación web moderno visualxdzdfbzd.jpg, 
              ensure your Biodata sub-components or paragraphs feature uppercase titles 
              (like "ABOUT ME", "SOFTWARE SKILLS") with brief text or grid layouts beneath them.
            */}
            <div className="space-y-10 text-zinc-400 font-light leading-relaxed">
              <Biodata />
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}