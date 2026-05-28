// src/app/layout.tsx
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// 1. Import new chosen font here
import { Mrs_Saint_Delafield } from 'next/font/google'; 

// 2. Initialize it (keeping the exact variable name so page.tsx doesn't break)
export const cursiveFont = Mrs_Saint_Delafield({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body className="bg-black text-slate-300 overflow-x-hidden relative antialiased">
        <Header />
        <main className="mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}