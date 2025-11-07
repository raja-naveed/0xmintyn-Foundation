import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import { PROGRAMS_DATA } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="programs" className="relative border-t border-gray-1 py-[5vw] md:py-[6vw]">
      <SectionTitle title="OUR PROGRAMS." classes="text-right px-[5vw] md:px-[4vw] pt-[2.5vw] md:pt-[3vw]" />
      <p className="px-[5vw] md:px-[4vw] text-[1.4vw] md:text-[2.2vw] text-text-1/75 mb-[3vw] md:mb-[4vw] text-right md:text-center leading-[1.5]">
        Comprehensive UBI solutions for every stage of human development.
      </p>
      {PROGRAMS_DATA.map((program) => (
        <ServiceCard key={program.title} card={program} />
      ))}
    </section>
  );
};
export default Index;
