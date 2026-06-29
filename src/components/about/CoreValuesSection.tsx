import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { Trophy, Compass, Bot, Palette, HeartHandshake, TrendingUp } from "lucide-react";
import type { AboutCoreValues } from "@/lib/types";

const icons = [Trophy, Compass, Bot, Palette, HeartHandshake, TrendingUp];

export default function CoreValuesSection({ coreValues }: { coreValues: AboutCoreValues }) {
  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title={coreValues.title} />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <GlassCard key={item.title} delay={(i % 3) * 0.1}>
                <Icon size={22} className="text-green-bright" />
                <h3 className="mt-4 font-heading text-lg font-bold text-bg-soft">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bg-soft/60">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
