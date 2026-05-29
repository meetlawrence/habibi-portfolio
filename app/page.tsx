// src/app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// interface FeaturedCarouselProps {
//   count?: number;
// }

interface VideoData {
  title: string;
  id: string;
}

interface CarouselProps {
  videos: VideoData[];
  onSelectVideo: (id: string) => void;
}

// Structured video asset data collection containing targeted YouTube tracking tokens
const featuredVideos: VideoData[] = [
  {
    title: "Commercial Visual Portfolio 2026",
    id: "dQw4w9WgXcQ" // Extract the characters after "v=" in your watch URL
  },
  {
    title: "Cinematic Short-Form Narrative",
    id: "XUHF92wuvQc"
  },
  {
    title: "High-Energy Brand Visuals",
    id: "dQw4w9WgXcQ"
  }
];

// 1. EXTRACTED OUTSIDE OF RENDER: Fixed "Cannot create components during render" error
function VideoPlaceholderCarousel({ videos, onSelectVideo }: CarouselProps) {
  return (
    <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
      {videos.map((video, index) => (
        <button
          key={index}
          onClick={() => onSelectVideo(video.id)}
          className="aspect-video w-[85%] sm:w-[48%] md:w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl flex flex-col items-center justify-center relative group overflow-hidden snap-center shrink-0 cursor-pointer transition-transform duration-500 ease-out md:hover:scale-[1.02] text-left appearance-none"
        >
          {/* Next.js Optimized High-Quality Background Thumbnail Layer */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <Image 
              loader={({ src }) => src} // Custom loader bypasses provider optimization costs
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
              alt={video.title}
              fill
              unoptimized={false}
              sizes="(max-w-768px) 85vw, (max-w-1024px) 33vw, 25vw"
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Subtle dark gradient overlay to keep text legible */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-10" />
          
          <div className="w-12 h-12 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all duration-300 z-20 shadow-xl backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-0.5 fill-current">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
          
          <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mt-3 z-20 group-hover:text-amber-400 transition-colors px-4 text-center block w-full truncate drop-shadow-md">
            {video.title}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Home() { 
  // Client state layers managing modal visibility and targeted content stream injection
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('');

  const openVideoModal = (id: string) => {
    setActiveVideoId(id);
    setIsOpen(true);
  };

  const closeVideoModal = () => {
    setIsOpen(false);
    setActiveVideoId('');
  };

  return (
    <main className="min-h-screen bg-black text-zinc-300 relative overflow-hidden select-none">
      
      {/* Huge subtle structural background watermarks */}
      <div className="absolute top-[10%] left-[-5%] font-black text-[24vw] leading-none text-zinc-900/25 tracking-tighter uppercase select-none pointer-events-none z-0">
        HC // 26
      </div>

      {/* ================= HERO / BANNER SECTION ================= */}
      <section className="relative min-h-auto lg:min-h-screen flex items-center pt-24 lg:pt-1 pb-6 px-6 sm:px-12 md:px-20 lg:px-32 group/hero">
        
        {/* Subtle top theater lighting projection */}
        <div className="absolute top-[-20%] right-[-10%] w-175 h-175 bg-amber-950/15 blur-[150px] rounded-full pointer-events-none z-0" />
        
        {/* Added -mt-12 on mobile to shift the complete grid container layout up the screen */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center relative z-10 -mt-12 lg:mt-0">
          
          {/* Left / Upper Main Presentation Block */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1 relative">
            
            {/* Minimalist Identity Stamp */}
            <div className="font-mono text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-6 flex items-center gap-2">
              <span>[ CREATIVE DIRECTOR ]</span>
            </div>

            {/* Asymmetric Typography Grid */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-zinc-50 tracking-tighter uppercase leading-[0.9] mb-8">
              Habibi <br />
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
            <div className="absolute -left-4 top-1/4 w-px h-1/3 bg-linear-to-b from-transparent via-amber-500/20 to-transparent transition-all duration-1000 group-hover/hero:h-1/2" />

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

        {/* Instantiating the fluid carousel component here with explicit clean prop mapping */}
        <VideoPlaceholderCarousel videos={featuredVideos} onSelectVideo={openVideoModal} />
      </section>

      {/* ================= THEATER VIDEO MODAL OVERLAY LAYER ================= */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={closeVideoModal}
        >
          {/* Close Action Node Pin */}
          <button 
            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer p-2 z-50"
            onClick={closeVideoModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Core Video Player Container Frame */}
          <div 
            className="relative w-full max-w-4xl aspect-video bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Safe zone block preventing click event leakage
          >
            <iframe
              className="w-full h-full object-cover"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </main>
  );
}