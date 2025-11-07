'use client';
import { FC, useState } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import { FAQ_DATA } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-t border-gray-1 bg-gradient-to-b py-[5vw] md:py-[6vw]">
      <SectionOpacity classes="z-2">
        <SectionTitle title="FREQUENTLY ASKED QUESTIONS." classes="px-[5vw] md:px-[4vw] pt-[2.5vw] md:pt-[3vw] z-10" />
        <p className="px-[5vw] md:px-[4vw] pt-[2vw] md:pt-[2.5vw] text-[1.4vw] md:text-[2.2vw] text-text-1/75 mb-[3.5vw] md:mb-[4.5vw] leading-[1.6] max-w-[90%]">
          Common questions about our Universal Basic Income programs and how we&apos;re building dignity through financial security and innovation.
        </p>

        <div className="px-[5vw] md:px-[4vw] space-y-[1.8vw] md:space-y-[2.2vw]">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.5vw] bg-bg-2/30 overflow-hidden transition-all hover:bg-bg-2/50 hover:border-primary/50"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-[2vw] md:p-[2.5vw] flex items-center justify-between group"
              >
                <h4 className="text-[1.6vw] md:text-[2.8vw] font-semibold text-text-1 pr-[1.5vw] md:pr-[2vw] group-hover:text-primary transition-colors leading-[1.3]">
                  {faq.question}
                </h4>
                <div
                  className={`flex-shrink-0 w-[1.8vw] h-[1.8vw] md:w-[2.5vw] md:h-[2.5vw] border-[0.15vw] border-primary rounded-full flex items-center justify-center transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-[0.9vw] h-[0.9vw] md:w-[1.3vw] md:h-[1.3vw] text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-[2vw] md:px-[2.5vw] pb-[2vw] md:pb-[2.5vw]">
                  <p className="text-[1.3vw] md:text-[2.1vw] text-text-1/80 leading-[1.7] border-t border-stroke/30 pt-[1.8vw] md:pt-[2.2vw]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="px-[5vw] md:px-[4vw] mt-[3.5vw] md:mt-[4.5vw] text-center">
          <p className="text-[1.2vw] md:text-[2vw] text-text-1/70 mb-[2vw] md:mb-[2.5vw] leading-[1.6]">
            Need more help? Visit our local hubs in Buenos Aires, Córdoba, or Kyiv for application assistance and support.
          </p>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;

