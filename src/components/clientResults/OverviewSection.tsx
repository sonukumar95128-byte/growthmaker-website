"use client";

import { motion } from "framer-motion";
import type { MissionVision } from "@/lib/types";

export default function OverviewSection({ overview }: { overview: MissionVision }) {
  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl font-bold text-bg-soft lg:text-4xl">
            {overview.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bg-soft/65 lg:text-lg">
            {overview.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
