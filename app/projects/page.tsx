"use client"; // Required for handling modal state and click triggers

import { useState } from "react";
import Image from "next/image"; 

interface VideoData {
  title: string;
  id: string; // The specific YouTube video ID token
}

interface CarouselProps {
  videos: VideoData[];
  onSelectVideo: (video: VideoData) => void;
}

// Reusable localized placeholder carousel
function VideoPlaceholderCarousel({ videos, onSelectVideo }: CarouselProps) {
  return (
    <div className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0">
      {videos.map((video, index) => (
        <button
          key={index}
          onClick={() => onSelectVideo(video)}
          className="aspect-video w-[85%] sm:w-[48%] md:w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl flex flex-col items-center justify-center relative group overflow-hidden snap-center shrink-0 cursor-pointer transition-transform duration-500 ease-out md:scale-100 md:hover:scale-[1.02] text-left appearance-none"
        >
          {/* Background Thumbnail Layer - Active on mobile, interactive on desktop */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <Image 
              loader={({ src }) => src}
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
              alt={video.title}
              fill
              unoptimized={false}
              sizes="(max-w-768px) 85vw, (max-w-1024px) 33vw, 25vw"
              className="w-full h-full object-cover transition-all duration-700 ease-out grayscale-0 opacity-70 scale-105 md:grayscale md:opacity-40 md:scale-100 md:group-hover:grayscale-0 md:group-hover:opacity-70 md:group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-size-[2rem_2rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%) opacity-30 z-10" />
          
          {/* Centered Play Button Box */}
          <div className="w-12 h-12 rounded-full bg-zinc-950/80 border flex items-center justify-center transition-all duration-300 z-20 shadow-xl backdrop-blur-sm text-amber-400 border-amber-500/30 md:text-zinc-400 md:border-zinc-800 md:group-hover:text-amber-400 md:group-hover:border-amber-500/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-0.5 fill-current">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          </div>
          
          {/* Card Footer Text */}
          <span className="text-[10px] font-mono tracking-widest uppercase mt-3 z-20 transition-colors px-4 text-center block w-full truncate drop-shadow-md text-amber-400 md:text-zinc-400 md:group-hover:text-amber-400">
            {video.title}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function ProjectsOverview() {
  const documentaries = [
    { title: "Graduation Vlog", id: "p5AtwgXWUT4" },
    { title: "Inachalo River", id: "sF10BQOriC4" },
    { title: "Vacation Vlog", id: "w14feB0lVAk" },
  ];

  const commercials = [
    { title: "Drippy Lube Commercial", id: "LQ-txc6mS7M" },
    { title: "Commercial Campaign", id: "XUHF92wuvQc" }
  ];

  const eventReels = [
    { title: "Oluwakemi Birthday Reel", id: "e05LxO38R5c" },
    { title: "Baby Ola", id: "3Cf2qcGLl0w" },
    { title: "Wedding Reel", id: "dXHQszcuUgE" }
  ];

  const youtubeReels = [
    { title: "Youtube Reel One", id: "tCicJuUgfPo" },
    { title: "Youtube Reel Two", id: "q0Yz4j8Yj50" },
    { title: "Youtube Reel Three", id: "7F4_aOjmWkk" },
    { title: "Youtube Reel Four", id: "WlF8IHoHGEk" }
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

      {/* 04. Youtube Reels */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <h2 className="text-xs font-mono font-bold text-zinc-400 tracking-[0.25em] uppercase">04. Youtube Reels</h2>
           <div className="h-px grow bg-zinc-900/60" />
        </div>
        <VideoPlaceholderCarousel videos={youtubeReels} onSelectVideo={setActiveVideo} />
      </section>

      {/* ================= THEATER VIDEO MODAL ================= */}
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