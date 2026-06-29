import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Layers, BarChart3, Zap, Target } from "lucide-react";
import type { HomeWhyUs } from "@/lib/types";

const icons = [Layers, BarChart3, Zap, Target];

export default function WhyUsSection({ whyUs }: { whyUs: HomeWhyUs }) {
  return (
    <section className="section-pad bg-bg-deepest">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title={whyUs.title} />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {whyUs.cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <GlassCard key={card.title} delay={i * 0.1}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-growth-gradient">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-bg-soft">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bg-soft/60">{card.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
