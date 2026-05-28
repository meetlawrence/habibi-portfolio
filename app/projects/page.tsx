"use client"; // Required for handling modal state and click triggers

import { useState } from "react";

interface CarouselProps {
  count?: number;
  startIndex?: number;
  onSelectVideo: (indexString: string) => void;
}

// Reusable localized placeholder carousel matching your preferred minimalist framework
function VideoPlaceholderCarousel({ count = 3, startIndex = 1, onSelectVideo }: CarouselProps) {
  return (
    <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
      {Array.from({ length: count }).map((_, index) => {
        const displayIndex = startIndex + index;
        const formattedIndex = displayIndex < 10 ? `0${displayIndex}` : displayIndex;
        const assetLabel = `Video Asset Link ${formattedIndex}`;

        return (
          <div 
            key={index} 
            onClick={() => onSelectVideo(formattedIndex.toString())}
            className="aspect-video w-[85%] sm:w-[48%] md:w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl flex flex-col items-center justify-center relative group overflow-hidden snap-center shrink-0 cursor-pointer transition-transform duration-500 ease-out md:hover:scale-[1.02]"
          >
            {/* Subtle grid background pattern simulation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
            
            {/* Play icon placeholder */}
            <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 transition-all duration-300 z-10 shadow-inner md:group-hover:text-amber-400 md:group-hover:border-amber-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-0.5 fill-current">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>
            
            {/* Asset Text Label */}
            <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase mt-3 z-10 transition-colors duration-300 md:group-hover:text-zinc-400">
              {assetLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectsOverview() {
  // State tracking which video string is actively clicked and open (null if closed)
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="space-y-28 py-12 relative">
      {/* Page Branding Header */}
      <section>
        <h1 className="text-5xl font-black text-zinc-50 tracking-tighter mb-6 uppercase">
          The Production <br />
          <span className="text-amber-500 font-mono text-4xl font-normal lowercase tracking-normal"> reel</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl font-light leading-relaxed">
          A curated catalog of architectural visual campaigns, editorial music films, and cultural documentaries. Each file explores the harmony of precise blocking, deliberate rhythm structures, and intentional color grading frameworks.
        </p>
      </section>

      {/* 01. Documentaries */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">01. Documentaries</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel count={2} startIndex={1} onSelectVideo={setActiveVideo} />
      </section>

      {/* 02. Commercials */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">02. Commercials</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel 
  count={2} 
  startIndex={3} 
  onSelectVideo={(index) => console.log("Video selected:", index)} 
/>
      </section>

      {/* 03. Event Reels */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">03. Event Reels</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel count={3} startIndex={8} onSelectVideo={setActiveVideo} />
      </section>

      {/* 04. Funny Reels */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">04. Funny Reels</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel count={3} startIndex={5} onSelectVideo={setActiveVideo} />
      </section>

      {/* LIGHTBOX / INLINE POPUP PLAYER OVERLAY */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
          onClick={() => setActiveVideo(null)} // Click outside the card player to close it
        >
          {/* Card-Like Video Player Container Frame */}
          <div 
            className="w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl p-3 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Stop click events inside the card from shutting the player down
          >
            {/* Header toolbar inside the card frame layout */}
            <div className="flex justify-between items-center mb-3 px-2">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Playing // Asset Reel {activeVideo}
              </div>
              
              {/* Escape / Close button interface */}
              <button 
                onClick={() => setActiveVideo(null)}
                className="text-zinc-500 hover:text-zinc-200 font-mono text-xs tracking-wider uppercase transition-colors"
              >
                [ CLOSE ]
              </button>
            </div>

            {/* The Actual Display viewport box */}
            <div className="aspect-video w-full bg-zinc-900 rounded-xl border border-zinc-900 overflow-hidden flex items-center justify-center relative">
              
              {/* Placeholder simulation graphic. 
                When integrating live feeds, replace this div structure with your video stream tag:
                <video src={`/videos/reel-${activeVideo}.mp4`} controls className="w-full h-full object-cover" autoPlay />
              */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
              
              <div className="text-center p-6 z-10">
                <p className="text-zinc-400 text-sm font-mono tracking-wide uppercase mb-1">
                  Media Source Pipeline Active
                </p>
                <p className="text-xs text-zinc-600 font-mono">
                  Loading streaming variables for project track code #{activeVideo}...
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}