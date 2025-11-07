'use client';

import Lenis from 'lenis';

import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
import '@/shared/styles/globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dimension, setDimension] = useState<any>(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} bg-[#141218] text-[#E6E0E9]`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
