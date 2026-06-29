"use client";

import { motion } from "framer-motion";
import type { AboutStory } from "@/lib/types";

export default function StorySection({ story }: { story: AboutStory }) {
  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl font-bold text-bg-soft lg:text-4xl">
            {story.title}
          </h2>
          <div className="mt-6 space-y-4">
            {story.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-bg-soft/65 lg:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
