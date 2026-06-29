"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, LabeledTextarea, StringListEditor } from "@/components/admin/FormFields";
import type { HomeContent } from "@/lib/types";

export default function HomeEditor({
  home,
  onChange,
}: {
  home: HomeContent;
  onChange: (home: HomeContent) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Hero Section">
        <LabeledInput
          label="Eyebrow"
          value={home.hero.eyebrow}
          onChange={(v) => onChange({ ...home, hero: { ...home.hero, eyebrow: v } })}
        />
        <LabeledInput
          label="Headline"
          value={home.hero.headline}
          onChange={(v) => onChange({ ...home, hero: { ...home.hero, headline: v } })}
        />
        <LabeledTextarea
          label="Subheadline"
          value={home.hero.subheadline}
          onChange={(v) => onChange({ ...home, hero: { ...home.hero, subheadline: v } })}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="Primary CTA Label"
            value={home.hero.ctaPrimary.label}
            onChange={(v) =>
              onChange({
                ...home,
                hero: { ...home.hero, ctaPrimary: { ...home.hero.ctaPrimary, label: v } },
              })
            }
          />
          <LabeledInput
            label="Primary CTA Link"
            value={home.hero.ctaPrimary.href}
            onChange={(v) =>
              onChange({
                ...home,
                hero: { ...home.hero, ctaPrimary: { ...home.hero.ctaPrimary, href: v } },
              })
            }
          />
          <LabeledInput
            label="Secondary CTA Label"
            value={home.hero.ctaSecondary.label}
            onChange={(v) =>
              onChange({
                ...home,
                hero: { ...home.hero, ctaSecondary: { ...home.hero.ctaSecondary, label: v } },
              })
            }
          />
          <LabeledInput
            label="Secondary CTA Link"
            value={home.hero.ctaSecondary.href}
            onChange={(v) =>
              onChange({
                ...home,
                hero: { ...home.hero, ctaSecondary: { ...home.hero.ctaSecondary, href: v } },
              })
            }
          />
        </div>
        <StringListEditor
          label="Floating Cards"
          items={home.hero.floatingCards}
          onChange={(v) => onChange({ ...home, hero: { ...home.hero, floatingCards: v } })}
          placeholder="card"
        />
        <ArrayEditor
          label="dashboard metric"
          items={home.hero.dashboardMetrics}
          newItem={() => ({ label: "", value: "" })}
          onChange={(items) => onChange({ ...home, hero: { ...home.hero, dashboardMetrics: items } })}
          renderItem={(metric, _i, update) => (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <LabeledInput label="Value" value={metric.value} onChange={(v) => update({ ...metric, value: v })} />
              <LabeledInput label="Label" value={metric.label} onChange={(v) => update({ ...metric, label: v })} />
            </div>
          )}
        />
      </Group>

      <Group title="Stats Section">
        <LabeledInput
          label="Title"
          value={home.stats.title}
          onChange={(v) => onChange({ ...home, stats: { ...home.stats, title: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={home.stats.subtitle}
          onChange={(v) => onChange({ ...home, stats: { ...home.stats, subtitle: v } })}
        />
        <ArrayEditor
          label="stat"
          items={home.stats.items}
          newItem={() => ({ value: "", label: "" })}
          onChange={(items) => onChange({ ...home, stats: { ...home.stats, items } })}
          renderItem={(stat, _i, update) => (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <LabeledInput label="Value" value={stat.value} onChange={(v) => update({ ...stat, value: v })} />
              <LabeledInput label="Label" value={stat.label} onChange={(v) => update({ ...stat, label: v })} />
            </div>
          )}
        />
      </Group>

      <Group title="Why Us Section">
        <LabeledInput
          label="Title"
          value={home.whyUs.title}
          onChange={(v) => onChange({ ...home, whyUs: { ...home.whyUs, title: v } })}
        />
        <ArrayEditor
          label="card"
          items={home.whyUs.cards}
          newItem={() => ({ title: "", description: "" })}
          onChange={(cards) => onChange({ ...home, whyUs: { ...home.whyUs, cards } })}
          renderItem={(card, _i, update) => (
            <>
              <LabeledInput label="Title" value={card.title} onChange={(v) => update({ ...card, title: v })} />
              <LabeledTextarea
                label="Description"
                value={card.description}
                onChange={(v) => update({ ...card, description: v })}
              />
            </>
          )}
        />
      </Group>

      <Group title="Services Preview Section">
        <LabeledInput
          label="Title"
          value={home.servicesPreview.title}
          onChange={(v) =>
            onChange({ ...home, servicesPreview: { ...home.servicesPreview, title: v } })
          }
        />
        <LabeledTextarea
          label="Subtitle"
          value={home.servicesPreview.subtitle}
          onChange={(v) =>
            onChange({ ...home, servicesPreview: { ...home.servicesPreview, subtitle: v } })
          }
        />
        <StringListEditor
          label="Service Items"
          items={home.servicesPreview.items}
          onChange={(v) =>
            onChange({ ...home, servicesPreview: { ...home.servicesPreview, items: v } })
          }
          placeholder="service"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="CTA Label"
            value={home.servicesPreview.cta.label}
            onChange={(v) =>
              onChange({
                ...home,
                servicesPreview: {
                  ...home.servicesPreview,
                  cta: { ...home.servicesPreview.cta, label: v },
                },
              })
            }
          />
          <LabeledInput
            label="CTA Link"
            value={home.servicesPreview.cta.href}
            onChange={(v) =>
              onChange({
                ...home,
                servicesPreview: {
                  ...home.servicesPreview,
                  cta: { ...home.servicesPreview.cta, href: v },
                },
              })
            }
          />
        </div>
      </Group>

      <Group title="Process Section">
        <LabeledInput
          label="Title"
          value={home.process.title}
          onChange={(v) => onChange({ ...home, process: { ...home.process, title: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={home.process.subtitle}
          onChange={(v) => onChange({ ...home, process: { ...home.process, subtitle: v } })}
        />
        <ArrayEditor
          label="step"
          items={home.process.steps}
          newItem={() => ({ number: "", title: "", description: "" })}
          onChange={(steps) => onChange({ ...home, process: { ...home.process, steps } })}
          renderItem={(step, _i, update) => (
            <>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-[100px_1fr]">
                <LabeledInput label="Number" value={step.number} onChange={(v) => update({ ...step, number: v })} />
                <LabeledInput label="Title" value={step.title} onChange={(v) => update({ ...step, title: v })} />
              </div>
              <LabeledTextarea
                label="Description"
                value={step.description}
                onChange={(v) => update({ ...step, description: v })}
              />
            </>
          )}
        />
      </Group>

      <Group title="Results Preview Section">
        <LabeledInput
          label="Title"
          value={home.resultsPreview.title}
          onChange={(v) =>
            onChange({ ...home, resultsPreview: { ...home.resultsPreview, title: v } })
          }
        />
        <LabeledTextarea
          label="Subtitle"
          value={home.resultsPreview.subtitle}
          onChange={(v) =>
            onChange({ ...home, resultsPreview: { ...home.resultsPreview, subtitle: v } })
          }
        />
        <ArrayEditor
          label="result card"
          items={home.resultsPreview.cards}
          newItem={() => ({ title: "", description: "", metrics: [] })}
          onChange={(cards) =>
            onChange({ ...home, resultsPreview: { ...home.resultsPreview, cards } })
          }
          renderItem={(card, _i, update) => (
            <>
              <LabeledInput label="Title" value={card.title} onChange={(v) => update({ ...card, title: v })} />
              <LabeledTextarea
                label="Description"
                value={card.description}
                onChange={(v) => update({ ...card, description: v })}
              />
              <StringListEditor
                label="Metrics"
                items={card.metrics}
                onChange={(v) => update({ ...card, metrics: v })}
                placeholder="metric"
              />
            </>
          )}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="CTA Label"
            value={home.resultsPreview.cta.label}
            onChange={(v) =>
              onChange({
                ...home,
                resultsPreview: {
                  ...home.resultsPreview,
                  cta: { ...home.resultsPreview.cta, label: v },
                },
              })
            }
          />
          <LabeledInput
            label="CTA Link"
            value={home.resultsPreview.cta.href}
            onChange={(v) =>
              onChange({
                ...home,
                resultsPreview: {
                  ...home.resultsPreview,
                  cta: { ...home.resultsPreview.cta, href: v },
                },
              })
            }
          />
        </div>
      </Group>

      <Group title="Foundation Offer Section">
        <LabeledInput
          label="Title"
          value={home.foundationOffer.title}
          onChange={(v) =>
            onChange({ ...home, foundationOffer: { ...home.foundationOffer, title: v } })
          }
        />
        <LabeledTextarea
          label="Subtitle"
          value={home.foundationOffer.subtitle}
          onChange={(v) =>
            onChange({ ...home, foundationOffer: { ...home.foundationOffer, subtitle: v } })
          }
        />
        <LabeledInput
          label="Price"
          value={home.foundationOffer.price}
          onChange={(v) =>
            onChange({ ...home, foundationOffer: { ...home.foundationOffer, price: v } })
          }
        />
        <StringListEditor
          label="Included Items"
          items={home.foundationOffer.included}
          onChange={(v) =>
            onChange({ ...home, foundationOffer: { ...home.foundationOffer, included: v } })
          }
          placeholder="item"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="CTA Label"
            value={home.foundationOffer.cta.label}
            onChange={(v) =>
              onChange({
                ...home,
                foundationOffer: {
                  ...home.foundationOffer,
                  cta: { ...home.foundationOffer.cta, label: v },
                },
              })
            }
          />
          <LabeledInput
            label="CTA Link"
            value={home.foundationOffer.cta.href}
            onChange={(v) =>
              onChange({
                ...home,
                foundationOffer: {
                  ...home.foundationOffer,
                  cta: { ...home.foundationOffer.cta, href: v },
                },
              })
            }
          />
        </div>
      </Group>

      <Group title="Final CTA Section">
        <LabeledInput
          label="Title"
          value={home.finalCta.title}
          onChange={(v) => onChange({ ...home, finalCta: { ...home.finalCta, title: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={home.finalCta.subtitle}
          onChange={(v) => onChange({ ...home, finalCta: { ...home.finalCta, subtitle: v } })}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="CTA Label"
            value={home.finalCta.cta.label}
            onChange={(v) =>
              onChange({
                ...home,
                finalCta: { ...home.finalCta, cta: { ...home.finalCta.cta, label: v } },
              })
            }
          />
          <LabeledInput
            label="CTA Link"
            value={home.finalCta.cta.href}
            onChange={(v) =>
              onChange({
                ...home,
                finalCta: { ...home.finalCta, cta: { ...home.finalCta.cta, href: v } },
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
