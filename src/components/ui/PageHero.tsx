"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-radial-glow pt-16">
      <div className="absolute inset-0 -z-10 bg-bg-dark" />
      <div className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-green/20 blur-3xl" />
      <div className="absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-navy/30 blur-3xl" />

      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-bg-soft sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bg-soft/65 lg:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
