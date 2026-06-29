import { getSiteContent } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import BlogListSection from "@/components/blog/BlogListSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata = {
  title: "Blog | Growth Maker",
  description:
    "Practical insights on performance marketing, sales funnels, WhatsApp automation, and digital business growth from Growth Maker.",
};

export default async function BlogPage() {
  const content = await getSiteContent();
  const { blog } = content;

  return (
    <main>
      <PageHero title={blog.hero.title} subtitle={blog.hero.subtitle} />
      <BlogListSection categories={blog.categories} posts={blog.posts} />
      <FinalCtaSection data={content.contact.finalCta} />
    </main>
  );
}
