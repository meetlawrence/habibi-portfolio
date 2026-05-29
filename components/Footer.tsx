// src/components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  { 
    name: 'YouTube', 
    href: 'https://youtube.com',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  { 
    name: 'Email', 
    href: 'mailto:gabrielokonkwo101@gmail.com',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  },
  { 
    name: 'WhatsApp', 
    href: 'https://wa.me/+2349152116103',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  }
];

export default function Footer() {   
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand Grouping Wrapper Container */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <Link href="/" className="group flex flex-col items-center gap-1 leading-none">
            {/* Logo Layout Box Sync */}
            <div className="relative w-10 h-10 overflow-hidden rounded-md transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/habibi-logo.webp" 
                alt="Habibi Creates Logo"
                fill
                priority
                sizes="40px"
                className="object-contain"
              />
            </div>
          </Link>
          
          {/* Branding & Copyright */}
          <div className="space-y-1">
            <p className="text-zinc-50 font-extrabold tracking-tight text-sm">
              Habibi<span className="text-amber-500">Creates</span>
            </p>
            <p className="text-xs font-mono text-zinc-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-600 font-mono block">
              Based in Port Harcourt &bull; Available Worldwide
            </p>
          </div>
        </div>
      
        {/* Media Portfolios & Direct Contact Icons */}
        <div className="flex items-center justify-center gap-6 text-zinc-500">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" 
              aria-label={link.name}
              className="hover:text-amber-400 transition-colors duration-300 flex items-center justify-center min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0"
            >
              {link.svg}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}