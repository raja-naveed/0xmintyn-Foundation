'use client';

import { FC } from 'react';

interface Props {}

const Index: FC<Props> = () => {
  const scrollToTop = () => {
    const element = document.getElementById('main');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-1 px-[5vw] py-[1.8vw] md:py-[2.2vw] md:px-[4vw] bg-bg-1">
      <div className="text-[1.3vw] md:text-[1.9vw] text-text-1/70 mb-[1vw] md:mb-0 leading-[1.5]">
        © {new Date().getFullYear()} 0xMintyn Foundation. Universal Basic Income for Dignity & Innovation.
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center text-[1.1vw] md:text-[1.7vw] text-text-1/60">
        <button
          onClick={scrollToTop}
          className="hover:text-primary transition-colors cursor-pointer"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};
export default Index;

