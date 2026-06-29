import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { PrimaryLink } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import type { HomeResultsPreview } from "@/lib/types";

export default function ResultsPreviewSection({
  resultsPreview,
}: {
  resultsPreview: HomeResultsPreview;
}) {
  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title={resultsPreview.title} subtitle={resultsPreview.subtitle} />
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {resultsPreview.cards.map((card, i) => (
            <GlassCard key={card.title} delay={i * 0.1}>
              <h3 className="font-heading text-xl font-bold text-bg-soft">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bg-soft/60">{card.description}</p>
              <ul className="mt-5 space-y-2">
                {card.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-2 text-sm text-bg-soft/75">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-bright" />
                    {metric}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryLink href={resultsPreview.cta.href}>{resultsPreview.cta.label}</PrimaryLink>
        </div>
      </div>
    </section>
  );
}
