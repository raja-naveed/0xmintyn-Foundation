'use client';

import Navigation from '@/widgets/Navigation';
import Hero from '@/widgets/Hero';
import About from '@/widgets/About';
import Services from '@/widgets/Services';
import Impact from '@/widgets/Impact';
import Partner from '@/widgets/Partner';
import Blog from '@/widgets/Blog';
import FAQ from '@/widgets/FAQ';
import Contact from '@/widgets/Contact';
import Footer from '@/widgets/Footer';
import ShadowCursor from '@/components/ui/ShadowCursor';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Partner />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />

      {/* disable cursor here */}
      <ShadowCursor />
    </>
  );
}
