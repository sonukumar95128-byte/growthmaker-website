import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getSiteContent } from "@/lib/content";
import FinalCtaSection from "@/components/FinalCtaSection";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const content = await getSiteContent();
  return content.blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getSiteContent();
  const post = content.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found | Growth Maker" };
  }

  return {
    title: `${post.title} | Growth Maker Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getSiteContent();
  const post = content.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = content.blog.posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <main>
      <section className="relative overflow-hidden bg-radial-glow pt-16">
        <div className="absolute inset-0 -z-10 bg-bg-dark" />
        <div className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-green/20 blur-3xl" />

        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-bg-soft/60 transition-colors hover:text-green-bright"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <span className="mt-6 inline-block w-fit rounded-full border border-green-bright/30 bg-green-bright/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-green-bright">
            {post.category}
          </span>

          <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.15] tracking-tight text-bg-soft sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-bg-soft/65 lg:text-lg">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="section-pad bg-bg-dark">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="glass rounded-xl2 p-7 lg:p-10">
            <p className="text-base leading-relaxed text-bg-soft/75 lg:text-lg">{post.content}</p>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-bg-soft/40">
                Related Posts
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="bento-card glass p-5"
                  >
                    <h3 className="font-heading text-base font-bold text-bg-soft">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bg-soft/60">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <FinalCtaSection data={content.contact.finalCta} />
    </main>
  );
}
