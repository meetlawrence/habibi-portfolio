'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: 'mailto:okonwhyte@gmail.com' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center gap-2 md:gap-7">
      {navItems.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative group flex flex-row items-center transition-colors duration-300 ${
              isActive ? 'text-zinc-50' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {/* Nav Link Text Label */}
            <span className="text-xs font-bold uppercase tracking-widest font-mono whitespace-nowrap">
              {link.name}
            </span>

            {/* Amber Glow Underline Asset */}
            <span 
              className={`absolute -bottom-2 h-[2px] transition-all duration-500 rounded-full ${
                isActive 
                  ? 'w-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]' 
                  : 'w-0 bg-zinc-800 group-hover:w-full group-hover:bg-amber-500/50'
              }`} 
            />
          </Link>
        );
      })}
    </div>
  );
}