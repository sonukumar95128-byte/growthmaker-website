"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, LabeledTextarea, StringListEditor } from "@/components/admin/FormFields";
import type { ClientResultsContent } from "@/lib/types";

export default function ClientResultsEditor({
  clientResults,
  onChange,
}: {
  clientResults: ClientResultsContent;
  onChange: (clientResults: ClientResultsContent) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Hero">
        <LabeledInput
          label="Title"
          value={clientResults.hero.title}
          onChange={(v) =>
            onChange({ ...clientResults, hero: { ...clientResults.hero, title: v } })
          }
        />
        <LabeledTextarea
          label="Subtitle"
          value={clientResults.hero.subtitle}
          onChange={(v) =>
            onChange({ ...clientResults, hero: { ...clientResults.hero, subtitle: v } })
          }
        />
      </Group>

      <Group title="Overview">
        <LabeledInput
          label="Title"
          value={clientResults.overview.title}
          onChange={(v) =>
            onChange({ ...clientResults, overview: { ...clientResults.overview, title: v } })
          }
        />
        <LabeledTextarea
          label="Content"
          value={clientResults.overview.content}
          onChange={(v) =>
            onChange({ ...clientResults, overview: { ...clientResults.overview, content: v } })
          }
        />
      </Group>

      <Group title="Case Studies">
        <ArrayEditor
          label="case study"
          items={clientResults.caseStudies}
          newItem={() => ({ title: "", challenge: "", solution: "", results: [] })}
          onChange={(caseStudies) => onChange({ ...clientResults, caseStudies })}
          renderItem={(study, _i, update) => (
            <>
              <LabeledInput label="Title" value={study.title} onChange={(v) => update({ ...study, title: v })} />
              <LabeledTextarea
                label="Challenge"
                value={study.challenge}
                onChange={(v) => update({ ...study, challenge: v })}
              />
              <LabeledTextarea
                label="Solution"
                value={study.solution}
                onChange={(v) => update({ ...study, solution: v })}
              />
              <StringListEditor
                label="Results"
                items={study.results}
                onChange={(v) => update({ ...study, results: v })}
                placeholder="result"
              />
            </>
          )}
        />
      </Group>

      <Group title="Final CTA">
        <LabeledInput
          label="Title"
          value={clientResults.finalCta.title}
          onChange={(v) =>
            onChange({ ...clientResults, finalCta: { ...clientResults.finalCta, title: v } })
          }
        />
        <LabeledTextarea
          label="Subtitle"
          value={clientResults.finalCta.subtitle}
          onChange={(v) =>
            onChange({ ...clientResults, finalCta: { ...clientResults.finalCta, subtitle: v } })
          }
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="CTA Label"
            value={clientResults.finalCta.cta.label}
            onChange={(v) =>
              onChange({
                ...clientResults,
                finalCta: {
                  ...clientResults.finalCta,
                  cta: { ...clientResults.finalCta.cta, label: v },
                },
              })
            }
          />
          <LabeledInput
            label="CTA Link"
            value={clientResults.finalCta.cta.href}
            onChange={(v) =>
              onChange({
                ...clientResults,
                finalCta: {
                  ...clientResults.finalCta,
                  cta: { ...clientResults.finalCta.cta, href: v },
                },
              })
            }
          />
        </div>
      </Group>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-heading text-lg font-bold text-bg-soft">{title}</h3>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}
