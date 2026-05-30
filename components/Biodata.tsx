// components/Biodata.tsx
export default function Biodata() {
  const skills = [
    { name: "Premiere / After Effects", level: "85%" },
    { name: "CapCut", level: "90%" },
    { name: "Cinematography & Framing", level: "85%" },
    { name: "Motion Graphics & Sound", level: "80%" },
    { name: "Social Content Strategy", level: "90%" }
  ];

  return (
    <div className="w-full bg-transparent font-sans selection:bg-amber-500/20 space-y-10 text-zinc-400">
      
      {/* SECTION 1: ABOUT ME */}
      <div>
        <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-[0.25em] mb-3">
          ABOUT ME
        </h3>
        <p className="text-sm md:text-base leading-relaxed font-light text-zinc-400 max-w-xl">
          Capturing raw energy through precise lens execution and translating it into stunning digital narratives. 
          With a strict eye for visual rhythm, pacing, and color harmony, I create high-performance video assets engineered to tell compelling stories.
        </p>
      </div>

      {/* SECTION 2: SOFTWARE & PRODUCTION SKILLS */}
      <div>
        <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-[0.25em] mb-4">
          PRODUCTION SKILLS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
          {skills.map((skill) => (
            <div key={skill.name} className="flex justify-between items-center border-b border-zinc-900/60 pb-2 text-xs font-mono">
              <span className="text-zinc-400 uppercase tracking-wider">{skill.name}</span>
              <span className="text-amber-500/90 font-medium">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: TWO-COLUMN DETAILS BLOCK (EDUCATION & EXPERIENCE) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl">
        
        {/* EDUCATION */}
        <div>
          <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-[0.25em] mb-3">
            EDUCATION
          </h3>
          <div className="font-mono text-xs space-y-1">
            <span className="text-zinc-600 block">● 2019 — 2023</span>
            <span className="text-zinc-300 block uppercase tracking-wide">Federal University Otuoke Bayelsa State</span>
            <span className="text-zinc-500 block">English Language & Communication Studies</span>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-[0.25em] mb-3">
            EXPERIENCE
          </h3>
          <div className="font-mono text-xs space-y-1">
            <span className="text-zinc-300 block uppercase tracking-wide">Digital Content Creator</span>
            <span className="text-zinc-500 block">Direction, Editing, Grading & Storytelling</span>
            <span className="text-amber-500/80 block mt-1">Available for Bookings</span>
          </div>
        </div>

      </div>

      {/* SECTION 4: CALL TO ACTION */}
      <div className="pt-4 border-t border-zinc-900/40 max-w-xl">
        <a 
          href="mailto:gabrielokonkwo101@gmail.com"
          className="inline-flex items-center group text-zinc-100 font-bold tracking-tight text-sm md:text-base min-h-11"
        >
          <span className="border-b border-amber-500/30 group-hover:border-amber-400 pb-0.5 font-mono uppercase tracking-wider transition-all duration-300">
            Let&apos;s create something together
          </span>
          <span className="ml-3 p-1.5 rounded-full border border-zinc-900 group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center">
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 15 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="transform group-hover:translate-x-1 transition-transform text-amber-400"
            >
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </span>
        </a>
      </div>

    </div>
  );
}