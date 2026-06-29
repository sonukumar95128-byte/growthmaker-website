"use client";

import { LabeledInput, LabeledTextarea, StringListEditor } from "@/components/admin/FormFields";
import type { ContactContent } from "@/lib/types";

export default function ContactEditor({
  contact,
  onChange,
}: {
  contact: ContactContent;
  onChange: (contact: ContactContent) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Hero">
        <LabeledInput
          label="Title"
          value={contact.hero.title}
          onChange={(v) => onChange({ ...contact, hero: { ...contact.hero, title: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={contact.hero.subtitle}
          onChange={(v) => onChange({ ...contact, hero: { ...contact.hero, subtitle: v } })}
        />
      </Group>

      <Group title="Form Options">
        <LabeledInput
          label="Submit Button Label"
          value={contact.form.submitLabel}
          onChange={(v) => onChange({ ...contact, form: { ...contact.form, submitLabel: v } })}
        />
        <StringListEditor
          label="Business Type Options"
          items={contact.form.businessTypeOptions}
          onChange={(v) =>
            onChange({ ...contact, form: { ...contact.form, businessTypeOptions: v } })
          }
          placeholder="option"
        />
        <StringListEditor
          label="Revenue Range Options"
          items={contact.form.revenueRangeOptions}
          onChange={(v) =>
            onChange({ ...contact, form: { ...contact.form, revenueRangeOptions: v } })
          }
          placeholder="option"
        />
        <StringListEditor
          label="Service Options"
          items={contact.form.serviceOptions}
          onChange={(v) =>
            onChange({ ...contact, form: { ...contact.form, serviceOptions: v } })
          }
          placeholder="option"
        />
      </Group>

      <Group title="Contact Details">
        <LabeledInput
          label="Email"
          value={contact.details.email}
          onChange={(v) => onChange({ ...contact, details: { ...contact.details, email: v } })}
        />
        <LabeledInput
          label="Phone"
          value={contact.details.phone}
          onChange={(v) => onChange({ ...contact, details: { ...contact.details, phone: v } })}
        />
        <LabeledInput
          label="Location"
          value={contact.details.location}
          onChange={(v) =>
            onChange({ ...contact, details: { ...contact.details, location: v } })
          }
        />
        <LabeledInput
          label="Working Hours"
          value={contact.details.workingHours}
          onChange={(v) =>
            onChange({ ...contact, details: { ...contact.details, workingHours: v } })
          }
        />
      </Group>

      <Group title="Final CTA">
        <LabeledInput
          label="Title"
          value={contact.finalCta.title}
          onChange={(v) =>
            onChange({ ...contact, finalCta: { ...contact.finalCta, title: v } })
          }
        />
        <LabeledTextarea
          label="Subtitle"
          value={contact.finalCta.subtitle}
          onChange={(v) =>
            onChange({ ...contact, finalCta: { ...contact.finalCta, subtitle: v } })
          }
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LabeledInput
            label="CTA Label"
            value={contact.finalCta.cta.label}
            onChange={(v) =>
              onChange({
                ...contact,
                finalCta: { ...contact.finalCta, cta: { ...contact.finalCta.cta, label: v } },
              })
            }
          />
          <LabeledInput
            label="CTA Link"
            value={contact.finalCta.cta.href}
            onChange={(v) =>
              onChange({
                ...contact,
                finalCta: { ...contact.finalCta, cta: { ...contact.finalCta.cta, href: v } },
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
