'use client';
import { FC, useEffect, useState } from 'react';

import SidebarMenu from '@/components/SidebarMenu';
import { AnimatePresence } from 'framer-motion';

interface Props {}

const Index: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const closeSidebar = () => setIsActive(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsActive(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <div>
      <div className="fixed right-0 z-[4001] p-[1.5vw] md:p-[2vw]">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="flex h-[3.5vw] w-[3.5vw] md:h-[5vw] md:w-[5vw] cursor-pointer items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30 transition-all duration-300">
          <div className={`burger ${isActive && 'burgerActive'}`}></div>
        </button>
      </div>
      <button
        title="0xMintyn Foundation"
        onClick={() => {
          const element = document.getElementById('main');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="p-[1.5vw] md:p-[2vw] fixed z-[100] top-0 left-0 group flex items-center gap-[0.8vw] md:gap-[1.2vw] hover:opacity-80 transition-opacity duration-300"
      >
        <div className="relative w-[3.5vw] h-[3.5vw] md:w-[5vw] md:h-[5vw] flex-shrink-0">
          <img
            src="https://app.0xmintyn.com/logo.png"
            alt="0xMintyn Foundation Logo"
            className="w-full h-full object-contain group-hover:opacity-80 transition-opacity duration-300"
          />
        </div>
        <span className="text-[1.3vw] md:text-[2vw] font-bold text-text-1 group-hover:text-primary transition-colors duration-300">
          0xMintyn
        </span>
      </button>
      <AnimatePresence mode="wait">{isActive && (
        <SidebarMenu close={closeSidebar} />
      )}
      </AnimatePresence>
    </div>
  );
};
export default Index;
