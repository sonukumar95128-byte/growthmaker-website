"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span className="inline-block rounded-full border border-green-bright/30 bg-green-bright/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green-bright">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-bg-soft sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-bg-soft/60 lg:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
