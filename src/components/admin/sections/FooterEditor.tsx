"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, LabeledTextarea, StringListEditor } from "@/components/admin/FormFields";
import type { FooterContent } from "@/lib/types";

export default function FooterEditor({
  footer,
  onChange,
}: {
  footer: FooterContent;
  onChange: (footer: FooterContent) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Brand">
        <LabeledInput
          label="Tagline"
          value={footer.tagline}
          onChange={(v) => onChange({ ...footer, tagline: v })}
        />
        <LabeledTextarea
          label="Description"
          value={footer.description}
          onChange={(v) => onChange({ ...footer, description: v })}
        />
        <LabeledInput
          label="Copyright"
          value={footer.copyright}
          onChange={(v) => onChange({ ...footer, copyright: v })}
        />
      </Group>

      <Group title="Quick Links">
        <ArrayEditor
          label="link"
          items={footer.quickLinks}
          newItem={() => ({ label: "", href: "" })}
          onChange={(quickLinks) => onChange({ ...footer, quickLinks })}
          renderItem={(link, _i, update) => (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <LabeledInput label="Label" value={link.label} onChange={(v) => update({ ...link, label: v })} />
              <LabeledInput label="Link" value={link.href} onChange={(v) => update({ ...link, href: v })} />
            </div>
          )}
        />
      </Group>

      <Group title="Services Links">
        <StringListEditor
          label="Services Links"
          items={footer.servicesLinks}
          onChange={(v) => onChange({ ...footer, servicesLinks: v })}
          placeholder="service"
        />
      </Group>

      <Group title="Policy Links">
        <ArrayEditor
          label="link"
          items={footer.policyLinks}
          newItem={() => ({ label: "", href: "" })}
          onChange={(policyLinks) => onChange({ ...footer, policyLinks })}
          renderItem={(link, _i, update) => (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <LabeledInput label="Label" value={link.label} onChange={(v) => update({ ...link, label: v })} />
              <LabeledInput label="Link" value={link.href} onChange={(v) => update({ ...link, href: v })} />
            </div>
          )}
        />
      </Group>

      <Group title="Newsletter">
        <LabeledInput
          label="Title"
          value={footer.newsletter.title}
          onChange={(v) =>
            onChange({ ...footer, newsletter: { ...footer.newsletter, title: v } })
          }
        />
        <LabeledInput
          label="Placeholder"
          value={footer.newsletter.placeholder}
          onChange={(v) =>
            onChange({ ...footer, newsletter: { ...footer.newsletter, placeholder: v } })
          }
        />
        <LabeledInput
          label="Button Label"
          value={footer.newsletter.button}
          onChange={(v) =>
            onChange({ ...footer, newsletter: { ...footer.newsletter, button: v } })
          }
        />
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
