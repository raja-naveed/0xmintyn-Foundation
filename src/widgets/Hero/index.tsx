'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useFloatingImages from '@/composables/useFloatingImages';
import Button from '@/components/ui/Button';
import { HERO_DATA } from '@/data';

import { useScroll, useTransform, motion } from 'framer-motion';

import { main_1, main_2, main_3 } from './images/index';

const Hero = () => {
  const router = useRouter();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3);

  const heading1 = useRef(null);
  const heading2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heading1,
    offset: ['start 0.35', 'end 0.1'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="main" className="relative bg-gradient-to-b">
      <div
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative left-0 top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden md:h-[80vh]"
      >
        <motion.h1
          ref={heading1}
          className="relative z-20 mt-[-3vw] w-full text-center text-[4vw] md:text-[5.5vw] md:leading-[1.15] font-extrabold text-text-1 max-w-[88%] md:max-w-[95%] px-[2vw]"
          style={{ opacity }}
        >
          {HERO_DATA.title}
        </motion.h1>
        <motion.p
          ref={heading2}
          className="z-20 text-[1.3vw] md:text-[2.2vw] font-medium text-text-1/85 max-w-[82%] md:max-w-[90%] text-center mt-[2vw] md:mt-[2.5vw] leading-[1.5] px-[2vw]"
          style={{ opacity }}
        >
          {HERO_DATA.subtitle}
        </motion.p>
        <motion.p
          className="z-20 text-[1.1vw] md:text-[1.8vw] font-normal text-text-1/75 max-w-[78%] md:max-w-[85%] text-center mt-[1.5vw] md:mt-[2vw] px-[2vw]"
          style={{ opacity }}
        >
          {HERO_DATA.stats}
        </motion.p>
        <motion.div
          className="z-20 flex gap-[1.5vw] md:flex-col md:gap-[2.5vw] mt-[4vw] md:mt-[5vw]"
          style={{ opacity }}
        >
          <Button
            onClick={() => scrollToSection('about')}
            title={HERO_DATA.ctaPrimary}
            classes="px-[2.2vw] py-[1vw] md:px-[3.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-bg-1 hover:bg-bg-1/80 min-w-[18vw] md:min-w-[25vw]"
            btnClasses=""
          />
          <Button
            onClick={() => scrollToSection('partner')}
            title={HERO_DATA.ctaSecondary}
            classes="px-[2.2vw] py-[1vw] md:px-[3.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 min-w-[18vw] md:min-w-[25vw]"
            btnClasses=""
          />
        </motion.div>
        <div ref={ref1} className={`absolute left-0 top-0 z-10 h-full w-full`}>
          <Image src={main_1} fill={true} alt="" className="" objectFit="cover" />
        </div>

        <div ref={ref2} className={`absolute left-0 top-0 h-full w-full`}>
          <Image src={main_2} fill={true} alt="" objectFit="cover" />
        </div>

        <div ref={ref3} className={`absolute left-0 top-0 h-full w-full`}>
          <Image src={main_3} fill={true} alt="" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
