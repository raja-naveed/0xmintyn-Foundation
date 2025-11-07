import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';
import SectionTitle from '@/components/ui/SectionTitle';
import { PARTNER_DATA } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center min-h-screen border-t border-gray-1">
      <div className="mx-auto flex w-full max-w-[75vw] md:max-w-[92%] flex-1 flex-col items-center justify-center text-center py-[5vw] md:py-[7vw] px-[3vw] md:px-[4vw]">
        <SectionTitle title={PARTNER_DATA.title.toUpperCase()} classes="mb-[1.5vw] md:mb-[2.5vw]" />
        <p className="mt-[1vw] md:mt-[1.2vw] text-[1.5vw] md:text-[2.8vw] font-normal text-text-1/80 md:leading-[1.4] mb-[3.5vw] md:mb-[4.5vw] max-w-[85%]">
          {PARTNER_DATA.subtitle}
        </p>

        {/* Partnership Opportunities */}
        <div className="w-full mb-[3.5vw] md:mb-[4.5vw]">
          <h3 className="text-[2.2vw] md:text-[3.5vw] font-bold text-primary mb-[1.5vw] md:mb-[2.5vw]">
            Ways to Partner
          </h3>
          <ul className="space-y-[1.2vw] md:space-y-[1.8vw] text-left md:text-center max-w-[80%] mx-auto">
            {PARTNER_DATA.opportunities.map((opportunity, index) => (
              <li
                key={index}
                className="flex items-start space-x-[1.2vw] md:space-x-[1.8vw] text-[1.3vw] md:text-[2.2vw] text-text-1/80"
              >
                <div className="h-[0.7vw] w-[0.7vw] md:h-[1vw] md:w-[1vw] rounded-full bg-primary mt-[0.5vw] md:mt-[0.8vw] flex-shrink-0"></div>
                <span className="leading-[1.6]">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Engagement Options */}
        <div className="w-full mb-[3.5vw] md:mb-[4.5vw]">
          <h3 className="text-[2.2vw] md:text-[3.5vw] font-bold text-primary mb-[1.5vw] md:mb-[2.5vw]">
            Get Involved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.8vw] md:gap-[2.5vw]">
            <div className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.5vw] p-[1.8vw] md:p-[2.5vw] bg-bg-2/30 hover:bg-bg-2/40 transition-colors">
              <h4 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                Volunteer
              </h4>
              <p className="text-[1.1vw] md:text-[1.8vw] text-text-1/70 leading-[1.5]">{PARTNER_DATA.engagement.volunteer}</p>
            </div>
            <div className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.5vw] p-[1.8vw] md:p-[2.5vw] bg-bg-2/30 hover:bg-bg-2/40 transition-colors">
              <h4 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                Subscribe
              </h4>
              <p className="text-[1.1vw] md:text-[1.8vw] text-text-1/70 leading-[1.5]">{PARTNER_DATA.engagement.subscribe}</p>
            </div>
            <div className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.5vw] p-[1.8vw] md:p-[2.5vw] bg-bg-2/30 hover:bg-bg-2/40 transition-colors">
              <h4 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                Share
              </h4>
              <p className="text-[1.1vw] md:text-[1.8vw] text-text-1/70 leading-[1.5]">{PARTNER_DATA.engagement.share}</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full border-t border-stroke/30 pt-[2.5vw] md:pt-[3.5vw]">
          <h3 className="text-[1.8vw] md:text-[3vw] font-bold text-text-1 mb-[1.5vw] md:mb-[2vw]">
            Contact Us
          </h3>
          <div className="space-y-[0.8vw] md:space-y-[1.2vw] text-[1.2vw] md:text-[2vw] text-text-1/70">
            <p>
              <strong className="text-primary">Email:</strong> {PARTNER_DATA.contact.email}
            </p>
            <p>
              <strong className="text-primary">Locations:</strong> {PARTNER_DATA.contact.locations}
            </p>
            <p>
              <strong className="text-primary">Social:</strong> {PARTNER_DATA.contact.social}
            </p>
          </div>
        </div>

        <div className="mt-[2.5vw] md:mt-[3.5vw] flex gap-[1.5vw] md:flex-col md:gap-[2vw]">
          <Button
            onClick={() => scrollToSection('contact')}
            title="Contact Us"
            classes="px-[1.8vw] py-[0.9vw] md:px-[3.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-bg-1 hover:bg-bg-1/80"
            btnClasses=""
          />
          <Button
            onClick={() => scrollToSection('faq')}
            title="View FAQ"
            classes="px-[1.8vw] py-[0.9vw] md:px-[3.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
            btnClasses=""
          />
        </div>
      </div>
    </SectionOpacity>
  );
};
export default Index;

