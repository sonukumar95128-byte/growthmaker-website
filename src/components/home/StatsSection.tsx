import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import type { HomeStats } from "@/lib/types";

export default function StatsSection({ stats }: { stats: HomeStats }) {
  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title={stats.title} subtitle={stats.subtitle} />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-5">
          {stats.items.map((item, i) => (
            <GlassCard key={item.label} delay={i * 0.08} className="text-center">
              <p className="font-heading text-2xl font-bold text-gradient lg:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-bg-soft/60 lg:text-sm">{item.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
