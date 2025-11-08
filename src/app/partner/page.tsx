'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Navigation from '@/widgets/Navigation';
import Footer from '@/widgets/Footer';
import ShadowCursor from '@/components/ui/ShadowCursor';
import Button from '@/components/ui/Button';

const partnerHighlights = [
  {
    title: 'Financial Stability',
    description: 'Contribute to monthly UBI stipends that give families breathing room to plan, learn, and grow.',
  },
  {
    title: 'Creator & Founder Support',
    description: 'Help digital creators and early-stage founders turn ideas into sustainable products and ventures.',
  },
  {
    title: 'Local Innovation Hubs',
    description: 'Co-build community hubs in Buenos Aires, Córdoba, and Kyiv that provide mentorship, training, and safe spaces.',
  },
  {
    title: 'Transparent Impact',
    description: 'Track every contribution on-chain with real-time dashboards and impact reporting.',
  },
];

const collaborationPaths = [
  'Corporate partnerships that underwrite UBI programs or innovation hubs.',
  'NGO collaborations that integrate UBI into existing social programs.',
  'Technology and Web3 alliances that extend our transparent infrastructure.',
  'Joint pilot projects that validate new financial dignity models.',
];

const PartnerPage: FC = () => {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <main className="bg-bg-1 min-h-screen pt-[8vw] md:pt-[10vw] pb-[6vw]">
        <section className="px-[5vw] md:px-[8vw] max-w-[90vw] md:max-w-[70vw] mx-auto text-center">
          <span className="inline-flex items-center justify-center text-[1.2vw] md:text-[2vw] text-primary uppercase tracking-[0.4em] mb-[1.5vw] md:mb-[2vw]">
            🤝 Partner With Us
          </span>
          <h1 className="text-[3.5vw] md:text-[5vw] font-extrabold text-text-1 leading-[1.15] mb-[1.5vw] md:mb-[2vw]">
            Join us in building a world where financial dignity fuels innovation.
          </h1>
          <p className="text-[1.4vw] md:text-[2.3vw] text-text-1/75 leading-[1.7] mb-[3vw] md:mb-[4vw]">
            At 0xMintyn Foundation, we connect blockchain transparency with real-world impact—delivering Universal Basic Income (UBI), digital
            skills, and startup support in vulnerable communities. Together, we can turn financial stability into a launchpad for creativity,
            entrepreneurship, and social good.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[1.5vw] md:gap-[2vw]">
            <Button
              title="Become a Partner"
              onClick={() => window.open('mailto:partner@0xmintyn.org')}
              classes="px-[2.5vw] py-[1.2vw] md:px-[4.5vw] md:py-[1.8vw] text-[1.2vw] md:text-[1.9vw] bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
            />
            <Button
              title="Support Financial Dignity"
              onClick={() => router.push('/donate')}
              classes="px-[2.5vw] py-[1.2vw] md:px-[4.5vw] md:py-[1.8vw] text-[1.2vw] md:text-[1.9vw] bg-bg-1 hover:bg-bg-1/80"
            />
          </div>
        </section>

        <section className="px-[5vw] md:px-[8vw] mt-[5vw] md:mt-[6vw] max-w-[95vw] md:max-w-[80vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] md:gap-[3vw]">
            {partnerHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="border border-stroke/40 rounded-[1vw] md:rounded-[1.5vw] p-[2vw] md:p-[2.5vw] bg-bg-2/30 hover:bg-bg-2/45 transition-colors"
              >
                <h2 className="text-[1.8vw] md:text-[2.8vw] font-semibold text-primary mb-[1vw] md:mb-[1.5vw]">{highlight.title}</h2>
                <p className="text-[1.2vw] md:text-[2vw] text-text-1/75 leading-[1.6]">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-[5vw] md:px-[8vw] mt-[6vw] md:mt-[7vw] max-w-[90vw] md:max-w-[70vw] mx-auto">
          <div className="border border-primary/30 rounded-[1vw] md:rounded-[1.5vw] bg-primary/10 p-[3vw] md:p-[4vw]">
            <h2 className="text-[2.5vw] md:text-[4vw] font-bold text-text-1 mb-[1.5vw] md:mb-[2vw]">
              Together we can create lasting impact
            </h2>
            <ul className="space-y-[1vw] md:space-y-[1.5vw] text-left">
              {collaborationPaths.map((path, index) => (
                <li key={index} className="flex items-start gap-[1.2vw] md:gap-[1.5vw]">
                  <span className="mt-[0.3vw] md:mt-[0.4vw] text-primary text-[1.5vw] md:text-[2.3vw]">💠</span>
                  <p className="text-[1.2vw] md:text-[2vw] text-text-1/80 leading-[1.6]">{path}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-[5vw] md:px-[8vw] mt-[6vw] md:mt-[7vw] max-w-[90vw] md:max-w-[70vw] mx-auto text-center">
          <h2 className="text-[2.5vw] md:text-[4vw] font-bold text-text-1 mb-[1.2vw] md:mb-[1.8vw]">Ready to build change together?</h2>
          <p className="text-[1.3vw] md:text-[2.1vw] text-text-1/70 leading-[1.6] mb-[2.5vw] md:mb-[3.5vw]">
            Whether you&apos;re a company, NGO, or technology partner, your collaboration helps us expand access to UBI and unlock new economic opportunities for
            communities in Argentina and Ukraine.
          </p>
          <div className="space-y-[0.8vw] md:space-y-[1.2vw] text-[1.3vw] md:text-[2.1vw] text-text-1/70">
            <p>
              <strong className="text-primary">Email:</strong>{' '}
              <a href="mailto:partner@0xmintyn.org" className="hover:text-primary transition-colors">
                partner@0xmintyn.org
              </a>
            </p>
            <p>
              <strong className="text-primary">Let&apos;s build financial dignity—together.</strong>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ShadowCursor />
    </>
  );
};

export default PartnerPage;

