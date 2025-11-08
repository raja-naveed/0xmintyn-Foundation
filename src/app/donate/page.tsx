'use client';
import { FC } from 'react';

import Navigation from '@/widgets/Navigation';
import Footer from '@/widgets/Footer';
import ShadowCursor from '@/components/ui/ShadowCursor';
import Button from '@/components/ui/Button';

const fiatBenefits = [
  'Monthly UBI for families in Argentina & Ukraine',
  'Skills training and digital empowerment programs',
  'Startup and creator support pathways',
  'On-the-ground community services through our local hubs',
];

const cryptoPerks = [
  'Transparent on-chain tracking of every transfer',
  'Fast, borderless settlement with minimal fees',
  'Direct funding for UBI disbursements and innovation projects',
  'Support for stablecoins (USDT, USDC) and major ecosystems',
];

const DonatePage: FC = () => {
  return (
    <>
      <Navigation />
      <main className="bg-bg-1 min-h-screen pt-[8vw] md:pt-[10vw] pb-[6vw]">
        <section className="px-[5vw] md:px-[8vw] max-w-[90vw] md:max-w-[70vw] mx-auto text-center">
          <span className="inline-flex items-center justify-center text-[1.2vw] md:text-[2vw] text-primary uppercase tracking-[0.4em] mb-[1.5vw] md:mb-[2vw]">
            🌍 Donate to Empower Lives
          </span>
          <h1 className="text-[3.5vw] md:text-[5vw] font-extrabold text-text-1 leading-[1.15] mb-[1.5vw] md:mb-[2vw]">
            Your support turns financial dignity into a human right.
          </h1>
          <p className="text-[1.4vw] md:text-[2.3vw] text-text-1/75 leading-[1.7] mb-[3vw] md:mb-[4vw]">
            At 0xMintyn Foundation, Universal Basic Income (UBI) is more than a payment—it’s a foundation for learning, creating, and rebuilding the future.
            Every contribution gives individuals and families the freedom to thrive.
          </p>
        </section>

        {/* Fiat donations */}
        <section className="px-[5vw] md:px-[8vw] max-w-[95vw] md:max-w-[75vw] mx-auto mb-[5vw] md:mb-[6vw]">
          <div className="border border-stroke/40 rounded-[1vw] md:rounded-[1.5vw] bg-bg-2/30 p-[3vw] md:p-[4vw]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[2.5vw] md:mb-[3vw] gap-[2vw]">
              <div className="text-left">
                <h2 className="text-[2.2vw] md:text-[3.5vw] font-bold text-text-1 mb-[1vw] md:mb-[1.5vw]">
                  💳 Donate with Credit Card or Bank
                </h2>
                <p className="text-[1.3vw] md:text-[2.1vw] text-text-1/80 leading-[1.6]">
                  Your fiat donation directly funds financial stability, education, and entrepreneurship across Argentina and Ukraine.
                </p>
              </div>
              <Button
                title="Donate via Card / Bank"
                onClick={() => window.open('mailto:donate@0xmintyn.org')}
                classes="px-[2.5vw] py-[1.2vw] md:px-[4.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-bg-1 hover:bg-bg-1/80"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] md:gap-[2.5vw]">
              {fiatBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-[1.5vw] md:gap-[1.8vw]">
                  <span className="text-primary text-[1.8vw] md:text-[2.5vw]">💠</span>
                  <p className="text-[1.2vw] md:text-[2vw] text-text-1/75 leading-[1.6]">{benefit}</p>
                </div>
              ))}
            </div>

            <p className="text-[1.2vw] md:text-[2vw] text-text-1/70 leading-[1.6] mt-[2.5vw] md:mt-[3vw]">
              All contributions are fully transparent and impact-tracked on-chain. Every dollar you give helps someone live with dignity and purpose.
            </p>
          </div>
        </section>

        {/* Crypto donations */}
        <section className="px-[5vw] md:px-[8vw] max-w-[95vw] md:max-w-[75vw] mx-auto mb-[5vw] md:mb-[6vw]">
          <div className="border border-primary/40 rounded-[1vw] md:rounded-[1.5vw] bg-primary/10 p-[3vw] md:p-[4vw]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[2.5vw] md:mb-[3vw] gap-[2vw]">
              <div className="text-left">
                <h2 className="text-[2.2vw] md:text-[3.5vw] font-bold text-text-1 mb-[1vw] md:mb-[1.5vw]">
                  💠 Donate with Crypto
                </h2>
                <p className="text-[1.3vw] md:text-[2.1vw] text-text-1/80 leading-[1.6]">
                  Support our mission using blockchain—transparent, borderless, and fast. Your on-chain gift directly powers UBI for our communities.
                </p>
              </div>
              <Button
                title="Donate in Crypto"
                onClick={() => window.open('mailto:donate@0xmintyn.org?subject=Crypto%20Donation')}
                classes="px-[2.5vw] py-[1.2vw] md:px-[4.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-bg-1 hover:bg-bg-1/80"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] md:gap-[2.5vw] mb-[2.5vw] md:mb-[3vw]">
              {cryptoPerks.map((perk) => (
                <div key={perk} className="flex items-start gap-[1.5vw] md:gap-[1.8vw]">
                  <span className="text-primary text-[1.8vw] md:text-[2.5vw]">⚡</span>
                  <p className="text-[1.2vw] md:text-[2vw] text-text-1/75 leading-[1.6]">{perk}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5vw] md:gap-[2vw]">
              <div className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.2vw] bg-bg-2/40 p-[1.8vw] md:p-[2.2vw] text-left">
                <h3 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-primary mb-[0.8vw] md:mb-[1.2vw]">Solana Wallet</h3>
                <p className="text-[1.2vw] md:text-[2vw] text-text-1/70 break-words">0xMintyn.Foundation.sol</p>
              </div>
              <div className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.2vw] bg-bg-2/40 p-[1.8vw] md:p-[2.2vw] text-left">
                <h3 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-primary mb-[0.8vw] md:mb-[1.2vw]">Ethereum Wallet</h3>
                <p className="text-[1.2vw] md:text-[2vw] text-text-1/70 break-words">0xMintyn.Foundation.eth</p>
              </div>
              <div className="border border-stroke/30 rounded-[0.8vw] md:rounded-[1.2vw] bg-bg-2/40 p-[1.8vw] md:p-[2.2vw] text-left">
                <h3 className="text-[1.4vw] md:text-[2.2vw] font-semibold text-primary mb-[0.8vw] md:mb-[1.2vw]">Stablecoins</h3>
                <p className="text-[1.2vw] md:text-[2vw] text-text-1/70">USDT / USDC accepted on supported networks.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[5vw] md:px-[8vw] max-w-[90vw] md:max-w-[70vw] mx-auto text-center">
          <h2 className="text-[2.5vw] md:text-[4vw] font-bold text-text-1 mb-[1.2vw] md:mb-[1.8vw]">Together, we build dignity.</h2>
          <p className="text-[1.3vw] md:text-[2.1vw] text-text-1/70 leading-[1.6] mb-[2.5vw] md:mb-[3.5vw]">
            Your donation isn’t just money—it’s hope, education, and opportunity. Join us in creating a future where every person has the freedom to thrive.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[1.5vw] md:gap-[2vw]">
            <Button
              title="Contact the Donations Team"
              onClick={() => window.open('mailto:donate@0xmintyn.org')}
              classes="px-[2.5vw] py-[1.2vw] md:px-[4.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50"
            />
            <Button
              title="Explore Partner Opportunities"
              onClick={() => window.open('mailto:partner@0xmintyn.org')}
              classes="px-[2.5vw] py-[1.2vw] md:px-[4.5vw] md:py-[1.8vw] text-[1.1vw] md:text-[1.8vw] bg-bg-1 hover:bg-bg-1/80"
            />
          </div>
        </section>
      </main>
      <Footer />
      <ShadowCursor />
    </>
  );
};

export default DonatePage;

