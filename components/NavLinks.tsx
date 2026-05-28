// components/NavLinks.tsx
import Link from 'next/link';

export default function NavLinks() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: 'mailto:okonwhyte@gmail.com' },
  ];

  return (
    // 'flex-row' ensures horizontal layout, 'gap-6' controls spacing
    <div className="flex flex-row items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
      {links.map((link) => (
        <Link 
          key={link.name} 
          href={link.href}
          className="hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}