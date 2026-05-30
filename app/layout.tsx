// src/app/layout.tsx
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
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