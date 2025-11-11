import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import dynamic from 'next/dynamic';
import { BLOG_DATA } from '@/data';
import Footer from '@/widgets/Footer';
import Navigation from '@/widgets/Navigation';

const ShadowCursor = dynamic(() => import('@/components/ui/ShadowCursor'), {
  ssr: false,
});

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const post = BLOG_DATA.find((entry) => entry.id === params.id);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_DATA.filter((entry) => entry.id !== post.id).slice(0, 2);

  return (
    <>
      <Navigation />
      <article className="min-h-screen bg-bg-1 pt-[8vw] md:pt-[10vw] pb-[5vw]">
        <div className="px-[5vw] md:px-[8vw] mb-[4vw] md:mb-[5vw]">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-[1vw] text-[1.2vw] md:text-[2vw] text-primary hover:text-primary/80 mb-[2vw] md:mb-[3vw] transition-colors"
          >
            ← Back to Blog
          </Link>

          <div className="mb-[2vw] md:mb-[2.5vw]">
            <span className="inline-block px-[1.2vw] py-[0.6vw] md:px-[2vw] md:py-[1vw] bg-primary/20 text-primary text-[1vw] md:text-[1.6vw] font-semibold rounded mb-[1.5vw] md:mb-[2vw]">
              {post.category}
            </span>
          </div>

          <h1 className="text-[3.5vw] md:text-[5vw] font-extrabold text-text-1 mb-[1.5vw] md:mb-[2vw] leading-[1.2]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-[2vw] md:gap-[3vw] text-[1.1vw] md:text-[1.8vw] text-text-1/70">
            <span>{post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="relative w-full h-[40vw] md:h-[50vw] mb-[4vw] md:mb-[5vw]">
          <Image src={post.image} alt={post.title} fill className="object-cover" unoptimized />
        </div>

        <div className="px-[5vw] md:px-[8vw] max-w-[90vw] md:max-w-[80vw] mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="text-[1.3vw] md:text-[2vw] text-text-1/90 leading-[1.8]">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1
                      key={idx}
                      className="text-[2.5vw] md:text-[4vw] font-bold text-text-1 mt-[3vw] md:mt-[4vw] mb-[1.5vw] md:mb-[2vw]"
                    >
                      {paragraph.substring(2)}
                    </h1>
                  );
                }

                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={idx}
                      className="text-[2vw] md:text-[3.5vw] font-bold text-primary mt-[2.5vw] md:mt-[3vw] mb-[1.2vw] md:mb-[1.5vw]"
                    >
                      {paragraph.substring(3)}
                    </h2>
                  );
                }

                if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={idx}
                      className="text-[1.7vw] md:text-[2.8vw] font-semibold text-text-1 mt-[2vw] md:mt-[2.5vw] mb-[1vw] md:mb-[1.2vw]"
                    >
                      {paragraph.substring(4)}
                    </h3>
                  );
                }

                if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter((line) => line.trim().startsWith('- '));

                  return (
                    <ul
                      key={idx}
                      className="list-disc ml-[3vw] md:ml-[4vw] mb-[1.5vw] md:mb-[2vw] space-y-[0.8vw] md:space-y-[1vw]"
                    >
                      {items.map((item, itemIndex) => {
                        const text = item.substring(2);

                        return (
                          <li key={itemIndex} className="text-[1.3vw] md:text-[2vw]">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: text.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="text-primary font-semibold">$1</strong>',
                                ),
                              }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  );
                }

                if (paragraph.match(/^\d+\. /)) {
                  const items = paragraph.split('\n').filter((line) => line.trim().match(/^\d+\. /));

                  return (
                    <ol
                      key={idx}
                      className="list-decimal ml-[3vw] md:ml-[4vw] mb-[1.5vw] md:mb-[2vw] space-y-[0.8vw] md:space-y-[1vw]"
                    >
                      {items.map((item, itemIndex) => {
                        const text = item.replace(/^\d+\. /, '');

                        return (
                          <li key={itemIndex} className="text-[1.3vw] md:text-[2vw]">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: text.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="text-primary font-semibold">$1</strong>',
                                ),
                              }}
                            />
                          </li>
                        );
                      })}
                    </ol>
                  );
                }

                if (paragraph.trim()) {
                  return (
                    <p
                      key={idx}
                      className="mb-[1.5vw] md:mb-[2vw]"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-primary font-semibold">$1</strong>',
                        ),
                      }}
                    />
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="px-[5vw] md:px-[8vw] mt-[6vw] md:mt-[8vw] border-t border-gray-1 pt-[4vw] md:pt-[5vw]">
            <h2 className="text-[2.5vw] md:text-[4vw] font-bold text-text-1 mb-[3vw] md:mb-[4vw]">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2.5vw] md:gap-[3vw]">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group border border-stroke/30 rounded-[0.8vw] md:rounded-[1.5vw] bg-bg-2/30 hover:bg-bg-2/50 overflow-hidden transition-all duration-300 hover:border-primary/50"
                >
                  <div className="relative w-full h-[20vw] md:h-[25vw] overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="p-[2vw] md:p-[2.5vw]">
                    <h3 className="text-[1.5vw] md:text-[2.2vw] font-bold text-text-1 mb-[1vw] group-hover:text-primary transition-colors leading-[1.3]">
                      {relatedPost.title}
                    </h3>
                    <p className="text-[1.1vw] md:text-[1.7vw] text-text-1/70 leading-[1.5]">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
      <Footer />
      <ShadowCursor />
    </>
  );
};

export default BlogDetailPage;

export function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    id: post.id,
  }));
}

export const dynamicParams = false;

