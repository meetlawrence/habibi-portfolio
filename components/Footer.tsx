// src/components/Footer.tsx
export default function Footer() {  
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-zinc-50 font-extrabold tracking-tight">
            Habibi<span className="text-amber-500">Creates</span>
          </p>
          <p className="text-xs font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-[12px] text-zinc-600 font-mono block md:inline">
            Based in Port Harcourt &bull; Available Worldwide
          </p>
        </div>

        {/* Media Portfolios & Direct Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-mono tracking-wider">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-400 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
          >
            YOUTUBE
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-400 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
          >
            INSTAGRAM
          </a>
          <a 
            href="mailto:lokon4@byupathway.edu" 
            className="hover:text-amber-400 text-zinc-400 border-l border-zinc-800 pl-6 transition-colors min-h-[44px] sm:min-h-0 flex items-center"
          >
            EMAIL
          </a>
        </div>

      </div>
    </footer>
  );
}