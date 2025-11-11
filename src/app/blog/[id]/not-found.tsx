import Link from 'next/link';

import dynamic from 'next/dynamic';
import Footer from '@/widgets/Footer';
import Navigation from '@/widgets/Navigation';

const ShadowCursor = dynamic(() => import('@/components/ui/ShadowCursor'), {
  ssr: false,
});

const BlogPostNotFound = () => {
  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-bg-1 flex items-center justify-center px-[5vw]">
        <div className="text-center">
          <h1 className="text-[4vw] md:text-[6vw] font-bold text-text-1 mb-[2vw]">Post Not Found</h1>
          <p className="text-[1.5vw] md:text-[2.5vw] text-text-1/70 mb-[3vw]">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/#blog"
            className="inline-flex items-center justify-center px-[2.5vw] py-[1.2vw] md:px-[4vw] md:py-[2vw] text-[1.2vw] md:text-[2vw] bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </section>
      <Footer />
      <ShadowCursor />
    </>
  );
};

export default BlogPostNotFound;

