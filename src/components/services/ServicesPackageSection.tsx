"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PrimaryLink } from "@/components/ui/Button";
import type { ServicesPackage } from "@/lib/types";

export default function ServicesPackageSection({ pkg }: { pkg: ServicesPackage }) {
  return (
    <section className="section-pad bg-bg-deepest">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl2 border border-green-bright/20 bg-growth-gradient p-1"
        >
          <div className="rounded-[1.1rem] bg-bg-deepest p-8 lg:p-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="font-heading text-3xl font-bold text-bg-soft lg:text-4xl">
                  {pkg.title}
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bg-soft/60 lg:text-base">
                  {pkg.subtitle}
                </p>
              </div>
              <p className="font-heading text-4xl font-bold text-gradient lg:text-5xl">
                {pkg.price}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {pkg.includes.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-bright" />
                  <span className="text-sm leading-relaxed text-bg-soft/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <PrimaryLink href={pkg.cta.href}>{pkg.cta.label}</PrimaryLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
