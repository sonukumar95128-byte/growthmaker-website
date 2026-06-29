"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { PrimaryLink, SecondaryLink } from "@/components/ui/Button";
import type { HomeHero } from "@/lib/types";

const metricIcons = [Wallet, Users, TrendingUp, Workflow, MessageCircle, Rocket];

export default function Hero({ hero }: { hero: HomeHero }) {
  return (
    <section className="relative overflow-hidden bg-radial-glow pt-16">
      <div className="absolute inset-0 -z-10 bg-bg-dark" />
      <div className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-green/20 blur-3xl" />
      <div className="absolute -right-40 top-60 -z-10 h-96 w-96 rounded-full bg-navy/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full border border-green-bright/30 bg-green-bright/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-bright">
            {hero.eyebrow}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-bg-soft sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bg-soft/65 lg:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryLink href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</PrimaryLink>
            <SecondaryLink href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</SecondaryLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto h-[420px] w-full max-w-lg lg:h-[480px]"
        >
          <div className="glass relative h-full w-full rounded-xl2 p-6 shadow-glass">
            <p className="text-xs font-semibold uppercase tracking-wider text-bg-soft/40">
              Growth Dashboard
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {hero.dashboardMetrics.map((metric, i) => {
                const Icon = metricIcons[i % metricIcons.length];
                return (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5"
                  >
                    <Icon size={18} className="text-green-bright" />
                    <p className="mt-2 text-lg font-bold text-bg-soft">{metric.value}</p>
                    <p className="text-[11px] text-bg-soft/50">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {hero.floatingCards.map((card, i) => (
            <motion.div
              key={card}
              className={`glass absolute hidden rounded-2xl px-4 py-3 text-xs font-semibold text-bg-soft shadow-glass sm:block ${
                floatingPositions[i % floatingPositions.length]
              }`}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <span className="text-green-bright">●</span> {card}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const floatingPositions = [
  "-left-12 -top-10",
  "-right-12 -top-4",
  "-left-10 -bottom-8",
  "-right-10 -bottom-12",
  "left-1/3 -top-16",
];
