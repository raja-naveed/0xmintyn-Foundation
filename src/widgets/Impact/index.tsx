import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { IMPACT_DATA } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="impact" className="border-t border-gray-1 bg-bg-1 py-[5vw] md:py-[6vw] pb-[10vw] md:pb-[12vw]">
      <SectionOpacity>
        <SectionTitle title={IMPACT_DATA.title.toUpperCase()} classes="px-[5vw] md:px-[4vw] pt-[2.5vw] md:pt-[3vw] top-0 z-20" />
        <p className="px-[5vw] md:px-[4vw] pt-[2vw] md:pt-[2.5vw] text-[1.4vw] md:text-[2.2vw] text-text-1/80 leading-[1.7] mb-[4vw] md:mb-[5vw] max-w-[90%]">
          {IMPACT_DATA.subtitle}
        </p>

        {/* Impact Metrics */}
        <div className="px-[5vw] md:px-[4vw] grid grid-cols-2 md:grid-cols-2 gap-[2.5vw] md:gap-[3vw] mb-[5vw] md:mb-[7vw]">
          {IMPACT_DATA.metrics.map((metric, index) => (
            <div
              key={index}
              className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.5vw] p-[2.5vw] md:p-[3.5vw] bg-bg-2/50 hover:bg-bg-2/70 transition-all duration-300 hover:border-primary/50"
            >
              <div className="text-[4.5vw] md:text-[7vw] font-extrabold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                {metric.value}
              </div>
              <div className="text-[1.2vw] md:text-[2vw] text-text-1/70 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="px-[5vw] md:px-[4vw]">
          <h3 className="text-[2.5vw] md:text-[4.5vw] font-bold text-text-1 mb-[2.5vw] md:mb-[3.5vw]">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-[2.5vw] md:gap-[3.5vw]">
            {IMPACT_DATA.successStories.map((story, index) => (
              <div
                key={index}
                className="border-l-[0.25vw] border-primary pl-[2.5vw] md:pl-[3.5vw] py-[1.8vw] md:py-[2.2vw] bg-bg-2/30 rounded-r-[0.8vw] md:rounded-r-[1.5vw] hover:bg-bg-2/40 transition-colors"
              >
                <div className="text-[0.95vw] md:text-[1.4vw] text-primary font-semibold mb-[0.8vw] md:mb-[1.2vw]">
                  {story.type}
                </div>
                <blockquote className="text-[1.4vw] md:text-[2.3vw] text-text-1/90 leading-[1.7] mb-[1.2vw] md:mb-[1.8vw] italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="text-[1.1vw] md:text-[1.9vw] text-text-1/70">
                  <strong className="text-primary">{story.author}</strong> — {story.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;

