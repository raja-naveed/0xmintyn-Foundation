import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import HoverCards from '@/components/ui/HoverCards';

// Approach widget is no longer used - replaced by Impact section
// import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="approach" className="border-t border-gray-1 bg-bg-1 py-[6vw]  pb-[12vw]">
      <SectionOpacity>
        <SectionTitle title="APPROACH." classes="px-[6vw] md:px-[3vw] pt-[2.5vw] top-0 z-20" />
        <div className="px-[6vw] md:px-[3vw] pt-[2.5vw]">
          {/* <HoverCards cards={APPROACH_CARDS} /> */}
          <p className="text-[1.5vw] md:text-[2.5vw] text-text-1/70">This section has been replaced by the Impact section.</p>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
