'use client';
import { FC, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BLOG_DATA } from '@/data';
import Navigation from '@/widgets/Navigation';
import Footer from '@/widgets/Footer';
import ShadowCursor from '@/components/ui/ShadowCursor';

interface Props {
  params: Promise<{ id: string }>;
}

const BlogDetailPage: FC<Props> = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();
  const post = BLOG_DATA.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <Navigation />
        <section className="min-h-screen bg-bg-1 flex items-center justify-center px-[5vw]">
          <div className="text-center">
            <h1 className="text-[4vw] md:text-[6vw] font-bold text-text-1 mb-[2vw]">Post Not Found</h1>
            <p className="text-[1.5vw] md:text-[2.5vw] text-text-1/70 mb-[3vw]">
              The blog post you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push('/#blog')}
              className="px-[2.5vw] py-[1.2vw] md:px-[4vw] md:py-[2vw] text-[1.2vw] md:text-[2vw] bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </section>
        <Footer />
        <ShadowCursor />
      </>
    );
  }

  // Find related posts (exclude current post)
  const relatedPosts = BLOG_DATA.filter((p) => p.id !== id).slice(0, 2);

  return (
    <>
      <Navigation />
      <article className="min-h-screen bg-bg-1 pt-[8vw] md:pt-[10vw] pb-[5vw]">
        {/* Header */}
        <div className="px-[5vw] md:px-[8vw] mb-[4vw] md:mb-[5vw]">
          <button
            onClick={() => router.push('/#blog')}
            className="text-[1.2vw] md:text-[2vw] text-primary hover:text-primary/80 mb-[2vw] md:mb-[3vw] flex items-center gap-[1vw] transition-colors"
          >
            ← Back to Blog
          </button>
          
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
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[40vw] md:h-[50vw] mb-[4vw] md:mb-[5vw]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="px-[5vw] md:px-[8vw] max-w-[90vw] md:max-w-[80vw] mx-auto">
          <div className="prose prose-invert max-w-none">
            <div
              className="text-[1.3vw] md:text-[2vw] text-text-1/90 leading-[1.8] space-y-[2vw] md:space-y-[2.5vw]"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n')
                  .map((line) => {
                    // Handle headers
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-[2.5vw] md:text-[4vw] font-bold text-text-1 mt-[3vw] md:mt-[4vw] mb-[1.5vw] md:mb-[2vw]">${line.substring(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-[2vw] md:text-[3.5vw] font-bold text-primary mt-[2.5vw] md:mt-[3vw] mb-[1.2vw] md:mb-[1.5vw]">${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-[1.7vw] md:text-[2.8vw] font-semibold text-text-1 mt-[2vw] md:mt-[2.5vw] mb-[1vw] md:mb-[1.2vw]">${line.substring(4)}</h3>`;
                    }
                    // Handle lists
                    if (line.startsWith('- ')) {
                      return `<li class="ml-[2vw] md:ml-[3vw] mb-[0.8vw] md:mb-[1vw]">${line.substring(2)}</li>`;
                    }
                    if (line.startsWith(/\d+\. /)) {
                      return `<li class="ml-[2vw] md:ml-[3vw] mb-[0.8vw] md:mb-[1vw]">${line.substring(line.indexOf(' ') + 1)}</li>`;
                    }
                    // Handle bold
                    if (line.includes('**')) {
                      line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>');
                    }
                    // Regular paragraphs
                    if (line.trim()) {
                      return `<p class="mb-[1.5vw] md:mb-[2vw]">${line}</p>`;
                    }
                    return '';
                  })
                  .filter(Boolean)
                  .join(''),
              }}
            />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="px-[5vw] md:px-[8vw] mt-[6vw] md:mt-[8vw] border-t border-gray-1 pt-[4vw] md:pt-[5vw]">
            <h2 className="text-[2.5vw] md:text-[4vw] font-bold text-text-1 mb-[3vw] md:mb-[4vw]">
              Related Posts
            </h2>
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
                    <p className="text-[1.1vw] md:text-[1.7vw] text-text-1/70 leading-[1.5]">
                      {relatedPost.excerpt}
                    </p>
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

