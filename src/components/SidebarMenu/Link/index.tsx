'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

import { slide, scale } from '@/shared/utils/animations';

interface Props {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
  handleClick: () => void;
}

const Index: FC<Props> = ({ data, isActive, setSelectedIndicator, handleClick }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleClick}
    >
      <motion.div
        className="absolute left-[-1.5vw] md:left-[-2vw] inline-block h-[0.5vw] w-[0.5vw] md:h-[0.8vw] md:w-[0.8vw] rounded-full bg-primary"
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>
      <div 
        tabIndex={0} 
        className="cursor-pointer text-[2vw] md:text-[3.5vw] leading-[1.4] md:leading-[1.3] font-semibold tracking-wide duration-300 transition-all hover:translate-x-[1.2vw] md:hover:translate-x-[2vw] hover:text-primary group py-[0.5vw] md:py-[1vw]"
      >
        <span className="relative">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-[0.15vw] md:h-[0.2vw] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
    </motion.div>
  );
};
export default Index;
