// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedCarouselProps {
  count?: number;
}

// Custom standalone carousel component integrated smoothly
function VideoPlaceholderCarousel({ count = 3 }: { count?: number }) {
  return (
    <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
      {Array.from({ length: count }).map((_, index) => (
        <Link
          key={index}
          href="/projects"
          className="aspect-video w-[85%] sm:w-[48%] md:w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl flex flex-col items-center justify-center relative group overflow-hidden snap-center shrink-0 cursor-pointer transition-transform duration-500 ease-out md:hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
          
          <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all duration-300 z-10 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-0.5 fill-current">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
          
          <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase mt-3 z-10 group-hover:text-zinc-400 transition-colors">
            Video Asset Link {index + 1}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function Home() { 
  return (
    <main className="min-h-screen bg-black text-zinc-300 relative overflow-hidden select-none">
      
      {/* Huge subtle structural background watermarks */}
      <div className="absolute top-[10%] left-[-5%] font-black text-[24vw] leading-none text-zinc-900/25 tracking-tighter uppercase select-none pointer-events-none z-0">
        HC // 26
      </div>

      {/* ================= HERO / BANNER SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 sm:px-12 md:px-20 lg:px-32 group/hero">
        
        {/* Subtle top theater lighting projection */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-amber-950/15 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left / Upper Main Presentation Block */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1 relative">
            
            {/* Minimalist Identity Stamp */}
            <div className="font-mono text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-6 flex items-center gap-2">
              <span>[ CREATIVE DIRECTOR ]</span>
            </div>

            {/* Asymmetric Typography Grid */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-zinc-50 tracking-tighter uppercase leading-[0.9] mb-8">
              Habibi <br />
              {/* Native Tailwind Text Stroke configuration that compiles safely on the server */}
              <span className="text-transparent transition-all duration-500 [-webkit-text-stroke:1px_rgba(250,250,250,0.15)] group-hover/hero:[-webkit-text-stroke:1px_rgba(245,158,11,0.4)] group-hover/hero:text-zinc-50/5">
                Creates
              </span>
            </h1>

            {/* Context Narrative */}
            <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed tracking-wide max-w-xl mb-12">
              Capturing striking visual stories and turning raw footage into high-performance digital narratives. Specializing in high-energy commercial visuals and cinematic short-form content.
            </p>

            {/* Raw Border Action Trigger Trays */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-zinc-50 text-black font-mono text-[11px] font-bold uppercase tracking-widest rounded-none hover:bg-amber-400 transition-all duration-400 cursor-pointer text-center">
                  READ MORE
                </button>
              </Link>
              <a href="mailto:gabrielokonkwo101@gmail.com" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-zinc-400 font-mono text-[11px] font-bold uppercase tracking-widest rounded-none border border-zinc-800 hover:border-zinc-200 hover:text-zinc-50 transition-all duration-400 cursor-pointer text-center">
                  EMAIL
                </button>
              </a>
              <a href="https://wa.me/+2349152116103" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-zinc-400 font-mono text-[11px] font-bold uppercase tracking-widest rounded-none border border-zinc-800 hover:border-amber-400 hover:text-amber-400 transition-all duration-400 cursor-pointer text-center">
                  WHATSAPP
                </button>
              </a>
            </div>

          </div>

          {/* Right / Offset Vertical Layer Panel (Frameless Portrait Overlay) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 w-full relative">
            
            {/* Absolute Abstract Neon Geometry floating behind image container */}
            <div className="absolute -left-4 top-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent transition-all duration-1000 group-hover/hero:h-1/2" />
            
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px] aspect-[4/5] overflow-hidden transition-all duration-1000 ease-out [mask-image:linear-gradient(to_bottom,black_50%,rgba(0,0,0,0.7)_75%,transparent_96%)]">
              
              <Image 
                src="/habibi-profile.png" 
                alt="Habibi Creates - Videographer Profile Portrait"
                fill
                priority
                className="object-cover object-bottom transition-all duration-1000 ease-out grayscale group-hover/hero:grayscale-0 brightness-[0.8] group-hover/hero:brightness-100 scale-100 group-hover/hero:scale-[1.03]"
                sizes="(max-w-768px) 100vw, 40vw"
              />

              {/* Classic Cinematic Gradients & Noise Layering */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay" />
            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURED VIDEO CAROUSEL SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 py-24 relative z-10">
        <div className="flex items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-6 grow">
            <h2 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-[0.3em] shrink-0">
              Featured Assets
            </h2>
            <div className="h-px grow bg-zinc-900" />
          </div>
          
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 font-mono text-[10px] uppercase text-zinc-400 tracking-wider hover:text-amber-400 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-3 h-3 transition-transform duration-300 transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Instantiating the fluid carousel component here */}
        <VideoPlaceholderCarousel count={3} />
      </section>

    </main>
  );
}