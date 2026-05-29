// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-zinc-900 text-zinc-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Brand / Logo + Text */}
        <Link href="/" className="group flex items-center gap-3 leading-none">
          
          {/* Logo Container Wrapper */}
          <div className="relative w-8 h-12 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/habibi-logo.webp" 
              alt="Habibi Creates Logo"
              width={32}
              height={32}
              priority
              className="object-contain"
              style={{ height: 'auto' }}
            />
          </div>

          
        </Link>

        {/* Desktop Nav (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Mobile Nav (Hidden on Desktop) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>


      </div>
    </header>
  );
}