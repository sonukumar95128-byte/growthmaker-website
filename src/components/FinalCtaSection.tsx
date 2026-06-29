"use client";

import { motion } from "framer-motion";
import { PrimaryLink } from "@/components/ui/Button";
import type { FinalCta } from "@/lib/types";

export default function FinalCtaSection({ data }: { data: FinalCta }) {
  return (
    <section className="section-pad relative overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 -z-10 bg-growth-gradient opacity-10" />
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold text-bg-soft lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bg-soft/65 lg:text-lg">
            {data.subtitle}
          </p>
          <div className="mt-9">
            <PrimaryLink href={data.cta.href}>{data.cta.label}</PrimaryLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
