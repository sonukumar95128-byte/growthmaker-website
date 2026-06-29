"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, LabeledTextarea, StringListEditor } from "@/components/admin/FormFields";
import type { AboutContent } from "@/lib/types";

export default function AboutEditor({
  about,
  onChange,
}: {
  about: AboutContent;
  onChange: (about: AboutContent) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Hero">
        <LabeledInput
          label="Title"
          value={about.hero.title}
          onChange={(v) => onChange({ ...about, hero: { ...about.hero, title: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={about.hero.subtitle}
          onChange={(v) => onChange({ ...about, hero: { ...about.hero, subtitle: v } })}
        />
      </Group>

      <Group title="Our Story">
        <LabeledInput
          label="Title"
          value={about.story.title}
          onChange={(v) => onChange({ ...about, story: { ...about.story, title: v } })}
        />
        <StringListEditor
          label="Paragraphs"
          items={about.story.paragraphs}
          onChange={(v) => onChange({ ...about, story: { ...about.story, paragraphs: v } })}
          placeholder="paragraph"
        />
      </Group>

      <Group title="Mission">
        <LabeledInput
          label="Title"
          value={about.mission.title}
          onChange={(v) => onChange({ ...about, mission: { ...about.mission, title: v } })}
        />
        <LabeledTextarea
          label="Content"
          value={about.mission.content}
          onChange={(v) => onChange({ ...about, mission: { ...about.mission, content: v } })}
        />
      </Group>

      <Group title="Vision">
        <LabeledInput
          label="Title"
          value={about.vision.title}
          onChange={(v) => onChange({ ...about, vision: { ...about.vision, title: v } })}
        />
        <LabeledTextarea
          label="Content"
          value={about.vision.content}
          onChange={(v) => onChange({ ...about, vision: { ...about.vision, content: v } })}
        />
      </Group>

      <Group title="Core Values">
        <LabeledInput
          label="Title"
          value={about.coreValues.title}
          onChange={(v) =>
            onChange({ ...about, coreValues: { ...about.coreValues, title: v } })
          }
        />
        <ArrayEditor
          label="value"
          items={about.coreValues.items}
          newItem={() => ({ title: "", description: "" })}
          onChange={(items) =>
            onChange({ ...about, coreValues: { ...about.coreValues, items } })
          }
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
