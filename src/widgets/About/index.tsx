import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { ABOUT_DATA } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b py-[5vw] md:py-[6vw] z-0">
      <SectionOpacity classes="z-2">
        <SectionTitle title={ABOUT_DATA.title.toUpperCase()} classes="px-[5vw] md:px-[4vw] pt-[2.5vw] md:pt-[3vw] z-10" />
        <div className="relative self-start px-[5vw] md:px-[4vw] pb-[4vw] md:pb-[5vw] pt-[2.5vw] md:pt-[3vw]">
          <div className="flex flex-col space-y-[3.5vw] md:space-y-[4vw]">
            <p className="text-[1.8vw] md:text-[3vw] md:leading-[1.5] md:text-balance text-text-1/90 leading-[1.7] max-w-[90%]">
              {ABOUT_DATA.mission}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-[2.5vw] md:gap-[3vw]">
              <div className="border-l-[0.25vw] border-primary pl-[2.5vw] md:pl-[3.5vw] py-[1vw] md:py-[1.5vw]">
                <h4 className="text-[1.6vw] md:text-[2.8vw] font-bold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                  {ABOUT_DATA.vision.title}
                </h4>
                <p className="text-[1.4vw] md:text-[2.3vw] text-text-1/80 leading-[1.6]">
                  {ABOUT_DATA.vision.text}
                </p>
              </div>

              <div className="border-l-[0.25vw] border-primary pl-[2.5vw] md:pl-[3.5vw] py-[1vw] md:py-[1.5vw]">
                <h4 className="text-[1.6vw] md:text-[2.8vw] font-bold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                  {ABOUT_DATA.approach.title}
                </h4>
                <p className="text-[1.4vw] md:text-[2.3vw] text-text-1/80 leading-[1.6]">
                  {ABOUT_DATA.approach.text}
                </p>
              </div>

              <div className="border-l-[0.25vw] border-primary pl-[2.5vw] md:pl-[3.5vw] py-[1vw] md:py-[1.5vw]">
                <h4 className="text-[1.6vw] md:text-[2.8vw] font-bold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                  {ABOUT_DATA.impact.title}
                </h4>
                <p className="text-[1.4vw] md:text-[2.3vw] text-text-1/80 leading-[1.6] mb-[1.2vw] md:mb-[1.8vw]">
                  {ABOUT_DATA.impact.text}
                </p>
                <ul className="space-y-[0.8vw] md:space-y-[1.2vw]">
                  {ABOUT_DATA.impact.points.map((point, index) => (
                    <li key={index} className="flex items-start space-x-[1.2vw] md:space-x-[1.8vw]">
                      <div className="h-[0.7vw] w-[0.7vw] md:h-[1vw] md:w-[1vw] rounded-full bg-primary mt-[0.5vw] md:mt-[0.7vw] flex-shrink-0"></div>
                      <p className="text-[1.3vw] md:text-[2vw] text-text-1/75 leading-[1.6]">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
