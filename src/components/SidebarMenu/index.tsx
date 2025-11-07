import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import CustomLink from './Link';

import { NAV_ITEMS } from '@/data';

import { menuSlide } from '@/shared/utils/animations';

interface Props {
  close: () => void;
}


const Index: FC<Props> = ({ close }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    close();
  };
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[4000] h-screen w-[35vw] md:w-[85vw] bg-bg-2/95 backdrop-blur-xl border-l border-stroke/50 pb-[6vw] pl-[4vw] pr-[4vw] pt-[8vw] text-text-1 shadow-2xl"
      >
        <div className='w-full border-b border-primary/30 uppercase text-primary/80 pb-[1vw] mb-[3vw] md:mb-[4vw]'>
          <h3 className='text-[1.1vw] md:text-[2.5vw] leading-[1.2] font-semibold tracking-wider'>Menu</h3>
        </div>
        <div className='flex flex-col h-full justify-between'>

          <div className="flex flex-col space-y-[0.5vw] md:space-y-[1vw]" onMouseLeave={() => setSelectedIndicator(null)}>
            {NAV_ITEMS.map((item, index) => (
              <CustomLink
                handleClick={() => smoothScroll(item.href)}
                key={item.title}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </div>

          <div className="mt-auto pt-[3vw] md:pt-[4vw] border-t border-stroke/30">
            <p className="text-[0.9vw] md:text-[1.8vw] text-text-1/60 mb-[1.5vw] md:mb-[2vw]">
              © 2025 0xMintyn Foundation
            </p>
          </div>
        </div>


      </motion.div>
      <div
        aria-label="button"
        onClick={close}
        className="fixed bottom-0 left-0 right-0 top-0 z-[750] bg-bg-1/60 transition"
      ></div>
    </>
  );
};
export default Index;
