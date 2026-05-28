// src/app/work/layout.tsx (or app/projects/layout.tsx)
// import ProjectNav from '@/components/ProjectNav';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      {/* Background Spotlight - Muted theater projector atmospheric lens flare */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-amber-950/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">

          {/* Dynamic Content Stream */}
          <main className="flex-1 pb-20">
            {children}
          </main>
          
        </div>
      </div>
    </div>
  );
}