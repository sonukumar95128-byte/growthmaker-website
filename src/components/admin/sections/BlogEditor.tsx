"use client";

import ArrayEditor from "@/components/admin/ArrayEditor";
import { LabeledInput, LabeledTextarea, StringListEditor } from "@/components/admin/FormFields";
import type { BlogContent } from "@/lib/types";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function BlogEditor({
  blog,
  onChange,
}: {
  blog: BlogContent;
  onChange: (blog: BlogContent) => void;
}) {
  return (
    <div className="space-y-10">
      <Group title="Hero">
        <LabeledInput
          label="Title"
          value={blog.hero.title}
          onChange={(v) => onChange({ ...blog, hero: { ...blog.hero, title: v } })}
        />
        <LabeledTextarea
          label="Subtitle"
          value={blog.hero.subtitle}
          onChange={(v) => onChange({ ...blog, hero: { ...blog.hero, subtitle: v } })}
        />
      </Group>

      <Group title="Categories">
        <StringListEditor
          label="Categories"
          items={blog.categories}
          onChange={(v) => onChange({ ...blog, categories: v })}
          placeholder="category"
        />
      </Group>

      <Group title="Posts">
        <ArrayEditor
          label="post"
          items={blog.posts}
          newItem={() => ({
            slug: `new-post-${Date.now()}`,
            title: "",
            category: blog.categories[0] || "",
            excerpt: "",
            content: "",
          })}
          onChange={(posts) => onChange({ ...blog, posts })}
          renderItem={(post, _i, update) => (
            <>
              <LabeledInput
                label="Title"
                value={post.title}
                onChange={(v) => update({ ...post, title: v, slug: post.slug || slugify(v) })}
              />
              <LabeledInput
                label="Slug (URL)"
                value={post.slug}
                onChange={(v) => update({ ...post, slug: slugify(v) })}
              />
              <LabeledInput
                label="Category"
                value={post.category}
                onChange={(v) => update({ ...post, category: v })}
              />
              <LabeledTextarea
                label="Excerpt"
                value={post.excerpt}
                onChange={(v) => update({ ...post, excerpt: v })}
              />
              <LabeledTextarea
                label="Full Content"
                rows={5}
                value={post.content}
                onChange={(v) => update({ ...post, content: v })}
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
