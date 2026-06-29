"use client";

import { Plus, Trash2 } from "lucide-react";

export function LabeledInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-bg-soft/50">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field mt-2"
      />
    </label>
  );
}

export function LabeledTextarea({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-bg-soft/50">
        {label}
      </span>
      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field mt-2 resize-none"
      />
    </label>
  );
}

export function StringListEditor({
  label,
  items,
  onChange,
  placeholder = "New item",
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}) {
  function updateAt(index: number, value: string) {
    const copy = [...items];
    copy[index] = value;
    onChange(copy);
  }
  function removeAt(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-wider text-bg-soft/50">
        {label}
      </span>
      <div className="mt-2 space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateAt(i, e.target.value)}
              className="input-field"
            />
            <button
              type="button"
              onClick={() => removeAt(i)}
              className="shrink-0 text-bg-soft/40 transition-colors hover:text-red-400"
              aria-label="Remove item"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, ""])}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-bg-soft/70 transition-colors hover:border-green-bright/40 hover:text-green-bright"
        >
          <Plus size={14} /> Add {placeholder}
        </button>
      </div>
    </div>
  );
}
