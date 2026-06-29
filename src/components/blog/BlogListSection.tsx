"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export default function BlogListSection({
  categories,
  posts,
}: {
  categories: string[];
  posts: BlogPost[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts =
    activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? "bg-growth-gradient text-white"
                  : "border border-white/10 bg-white/[0.03] text-bg-soft/60 hover:border-green-bright/40 hover:text-green-bright"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="bento-card glass flex h-full flex-col p-6 lg:p-7"
              >
                <span className="inline-block w-fit rounded-full border border-green-bright/30 bg-green-bright/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-green-bright">
                  {post.category}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-bg-soft">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bg-soft/60">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-bright">
                  Read More <ArrowRight size={15} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="mt-12 text-center text-sm text-bg-soft/50">
            No posts found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
