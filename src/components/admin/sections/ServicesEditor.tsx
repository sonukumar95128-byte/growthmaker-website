"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, LabeledTextarea, StringListEditor } from "@/components/admin/FormFields";
import type { ServicesContent } from "@/lib/types";

export default function ServicesEditor({
  services,
  onChange,
}: {
  services: ServicesContent;
  onChange: (services: ServicesContent) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Hero">
        <LabeledInput
          label="Title"
          value={services.hero.title}
          onChange={(v) => onChange({ ...services, hero: { ...services.hero, title: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={services.hero.subtitle}
          onChange={(v) => onChange({ ...services, hero: { ...services.hero, subtitle: v } })}
        />
      </Group>

      <Group title="Service Items">
        <ArrayEditor
          label="service"
          items={services.items}
          newItem={() => ({ title: "", description: "" })}
          onChange={(items) => onChange({ ...services, items })}
          renderItem={(item, _i, update) => (
            <>
              <LabeledInput label="Title" value={item.title} onChange={(v) => update({ ...item, title: v })} />
              <LabeledTextarea
                label="Description"
                value={item.description}
                onChange={(v) => update({ ...item, description: v })}
              />
            </>
          )}
        />
      </Group>

      <Group title="Foundation Package">
        <LabeledInput
          label="Title"
          value={services.package.title}
          onChange={(v) => onChange({ ...services, package: { ...services.package, title: v } })}
        />
        <LabeledInput
          label="Price"
          value={services.package.price}
          onChange={(v) => onChange({ ...services, package: { ...services.package, price: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={services.package.subtitle}
          onChange={(v) =>
            onChange({ ...services, package: { ...services.package, subtitle: v } })
          }
        />
        <StringListEditor
          label="Includes"
          items={services.package.includes}
          onChange={(v) =>
            onChange({ ...services, package: { ...services.package, includes: v } })
          }
          placeholder="item"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="CTA Label"
            value={services.package.cta.label}
            onChange={(v) =>
              onChange({
                ...services,
                package: { ...services.package, cta: { ...services.package.cta, label: v } },
              })
            }
          />
          <LabeledInput
            label="CTA Link"
            value={services.package.cta.href}
            onChange={(v) =>
              onChange({
                ...services,
                package: { ...services.package, cta: { ...services.package.cta, href: v } },
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
