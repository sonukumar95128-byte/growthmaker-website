import GlassCard from "@/components/ui/GlassCard";
import { CheckCircle2, AlertTriangle, Wrench } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  return (
    <section className="section-pad bg-bg-deepest">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <GlassCard key={study.title} delay={(i % 2) * 0.1} className="!p-7 lg:!p-9">
              <h3 className="font-heading text-xl font-bold text-bg-soft lg:text-2xl">
                {study.title}
              </h3>

              <div className="mt-5 flex gap-3">
                <AlertTriangle size={18} className="mt-0.5 shrink-0 text-navy" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-bg-soft/40">
                    Challenge
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-bg-soft/65">{study.challenge}</p>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <Wrench size={18} className="mt-0.5 shrink-0 text-green-bright" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-bg-soft/40">
                    Solution
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-bg-soft/65">{study.solution}</p>
                </div>
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-bg-soft/40">
                Results
              </p>
              <ul className="mt-2 space-y-2">
                {study.results.map((result) => (
                  <li key={result} className="flex items-start gap-2 text-sm text-bg-soft/75">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-bright" />
                    {result}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
