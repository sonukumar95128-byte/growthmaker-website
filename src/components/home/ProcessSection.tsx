import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import type { HomeProcess } from "@/lib/types";

export default function ProcessSection({ process }: { process: HomeProcess }) {
  return (
    <section className="section-pad bg-bg-deepest">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title={process.title} subtitle={process.subtitle} />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, i) => (
            <GlassCard key={step.number} delay={i * 0.06}>
              <span className="font-heading text-3xl font-bold text-gradient">{step.number}</span>
              <h3 className="mt-3 font-heading text-lg font-bold text-bg-soft">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bg-soft/60">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
