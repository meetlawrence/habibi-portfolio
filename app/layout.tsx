// src/app/layout.tsx
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mrs_Saint_Delafield } from 'next/font/google'; 

export const cursiveFont = Mrs_Saint_Delafield({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* Changed className="data-scroll-behavior-smooth" to data-scroll-behavior="smooth" */
    <html lang="en" className="overflow-x-hidden" data-scroll-behavior="smooth">
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