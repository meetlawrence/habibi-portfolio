"use client"; // Required for handling modal state and click triggers

import { useState } from "react";
import Image from "next/image"; // Added this to resolve the Uncaught TypeError conflict

interface VideoData {
  title: string;
  id: string; // The specific YouTube video ID token
}

interface CarouselProps {
  videos: VideoData[];
  onSelectVideo: (video: VideoData) => void;
}

// Reusable localized placeholder carousel matching your preferred minimalist framework
function VideoPlaceholderCarousel({ videos, onSelectVideo }: CarouselProps) {
  return (
    <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
      {videos.map((video, index) => (
        <div 
          key={index} 
          onClick={() => onSelectVideo(video)}
          className="aspect-video w-[85%] sm:w-[48%] md:w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl flex flex-col items-center justify-center relative group overflow-hidden snap-center shrink-0 cursor-pointer transition-transform duration-500 ease-out md:hover:scale-[1.02]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-95" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-10" />
          
          <div className="w-12 h-12 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-zinc-500 backdrop-blur-sm transition-all duration-300 z-20 shadow-inner md:group-hover:text-amber-400 md:group-hover:border-amber-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-0.5 fill-current">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
          
          <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mt-3 z-20 transition-colors duration-300 md:group-hover:text-amber-400 px-4 text-center block w-full truncate drop-shadow-md">
            {video.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsOverview() {
  const documentaries = [
    { title: "Documentary Project One", id: "dQw4w9WgXcQ" },
    { title: "Documentary Project Two", id: "dQw4w9WgXcQ" }
  ];

  const commercials = [
    { title: "Commercial Campaign Alpha", id: "dQw4w9WgXcQ" },
    { title: "Commercial Campaign Beta", id: "dQw4w9WgXcQ" }
  ];

  const eventReels = [
    { title: "Cultural Festival Aftermovie", id: "dQw4w9WgXcQ" },
    { title: "Sartorial Gala Reel", id: "dQw4w9WgXcQ" },
    { title: "Live Concert Edit", id: "dQw4w9WgXcQ" }
  ];

  const funnyReels = [
    { title: "Street Concept Vignette", id: "dQw4w9WgXcQ" },
    { title: "Behind The Scenes Cut", id: "dQw4w9WgXcQ" },
    { title: "Alternative Outtake Real", id: "dQw4w9WgXcQ" }
  ];

  const [activeVideo, setActiveVideo] = useState<VideoData | null>(null);

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
        <VideoPlaceholderCarousel videos={documentaries} onSelectVideo={setActiveVideo} />
      </section>

      {/* 02. Commercials */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">02. Commercials</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel videos={commercials} onSelectVideo={setActiveVideo} />
      </section>

      {/* 03. Event Reels */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">03. Event Reels</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel videos={eventReels} onSelectVideo={setActiveVideo} />
      </section>

      {/* 04. Funny Reels */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">04. Funny Reels</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel videos={funnyReels} onSelectVideo={setActiveVideo} />
      </section>

      {/* ================= THEATER VIDEO MODAL (HOMEPAGE DESIGN) ================= */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={() => setActiveVideo(null)}
        >
          {/* Absolute Close Button */}
          <button 
            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer p-2 z-50"
            onClick={() => setActiveVideo(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Core Video Player Container Frame */}
          <div 
            className="relative w-full max-w-4xl aspect-video bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <iframe
              className="w-full h-full object-cover"
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}