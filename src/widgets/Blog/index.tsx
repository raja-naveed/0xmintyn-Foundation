'use client';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_DATA } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="blog" className="border-t border-gray-1 bg-gradient-to-b py-[5vw] md:py-[6vw]">
      <SectionOpacity classes="z-2">
        <SectionTitle title="BLOG." classes="px-[5vw] md:px-[4vw] pt-[2.5vw] md:pt-[3vw] z-10" />
        <p className="px-[5vw] md:px-[4vw] pt-[2vw] md:pt-[2.5vw] text-[1.4vw] md:text-[2.2vw] text-text-1/75 mb-[3.5vw] md:mb-[4.5vw] leading-[1.6] max-w-[90%]">
          Insights, stories, and updates from our UBI programs in Argentina and Ukraine.
        </p>

        <div className="px-[5vw] md:px-[4vw] grid grid-cols-1 md:grid-cols-3 gap-[2.5vw] md:gap-[3vw]">
          {BLOG_DATA.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group border border-stroke/30 rounded-[0.8vw] md:rounded-[1.5vw] bg-bg-2/30 hover:bg-bg-2/50 overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <div className="relative w-full h-[20vw] md:h-[25vw] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute top-[1.5vw] left-[1.5vw] px-[1vw] py-[0.5vw] bg-primary/90 text-bg-1 text-[0.9vw] md:text-[1.4vw] font-semibold rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-[2vw] md:p-[2.5vw]">
                <div className="flex items-center gap-[1.5vw] md:gap-[2vw] mb-[1vw] md:mb-[1.5vw] text-[0.9vw] md:text-[1.4vw] text-text-1/60">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-[1.6vw] md:text-[2.5vw] font-bold text-text-1 mb-[1vw] md:mb-[1.2vw] group-hover:text-primary transition-colors leading-[1.3]">
                  {post.title}
                </h3>
                <p className="text-[1.2vw] md:text-[1.9vw] text-text-1/70 leading-[1.6] mb-[1.5vw] md:mb-[2vw]">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[1vw] md:text-[1.6vw] text-text-1/60">
                    {post.author}
                  </span>
                  <span className="text-primary text-[1vw] md:text-[1.6vw] font-semibold group-hover:translate-x-[0.5vw] transition-transform">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionOpacity>
    </section>
  );
};

export default Index;

