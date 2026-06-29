"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, StringListEditor } from "@/components/admin/FormFields";
import type { Brand, Nav } from "@/lib/types";

export default function BrandEditor({
  brand,
  nav,
  onChangeBrand,
  onChangeNav,
}: {
  brand: Brand;
  nav: Nav;
  onChangeBrand: (brand: Brand) => void;
  onChangeNav: (nav: Nav) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Brand">
        <LabeledInput label="Name" value={brand.name} onChange={(v) => onChangeBrand({ ...brand, name: v })} />
        <LabeledInput
          label="Tagline"
          value={brand.tagline}
          onChange={(v) => onChangeBrand({ ...brand, tagline: v })}
        />
        <LabeledInput
          label="Positioning"
          value={brand.positioning}
          onChange={(v) => onChangeBrand({ ...brand, positioning: v })}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <LabeledInput
            label="Primary CTA"
            value={brand.primaryCta}
            onChange={(v) => onChangeBrand({ ...brand, primaryCta: v })}
          />
          <LabeledInput
            label="Secondary CTA"
            value={brand.secondaryCta}
            onChange={(v) => onChangeBrand({ ...brand, secondaryCta: v })}
          />
        </div>
        <StringListEditor
          label="Target Audience"
          items={brand.targetAudience}
          onChange={(v) => onChangeBrand({ ...brand, targetAudience: v })}
          placeholder="audience"
        />
        <LabeledInput label="Tone" value={brand.tone} onChange={(v) => onChangeBrand({ ...brand, tone: v })} />
      </Group>

      <Group title="Navigation">
        <ArrayEditor
          label="nav link"
          items={nav.links}
          newItem={() => ({ label: "", href: "" })}
          onChange={(links) => onChangeNav({ ...nav, links })}
          renderItem={(link, _i, update) => (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <LabeledInput label="Label" value={link.label} onChange={(v) => update({ ...link, label: v })} />
              <LabeledInput label="Link" value={link.href} onChange={(v) => update({ ...link, href: v })} />
            </div>
          )}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <LabeledInput
            label="Nav CTA Label"
            value={nav.cta.label}
            onChange={(v) => onChangeNav({ ...nav, cta: { ...nav.cta, label: v } })}
          />
          <LabeledInput
            label="Nav CTA Link"
            value={nav.cta.href}
            onChange={(v) => onChangeNav({ ...nav, cta: { ...nav.cta, href: v } })}
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
