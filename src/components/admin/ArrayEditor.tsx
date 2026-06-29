"use client";

import { Plus, Trash2 } from "lucide-react";
import type { ReactNode } from "react";

export default function ArrayEditor<T>({
  items,
  onChange,
  newItem,
  renderItem,
  label,
}: {
  items: T[];
  onChange: (items: T[]) => void;
  newItem: () => T;
  renderItem: (item: T, index: number, update: (next: T) => void) => ReactNode;
  label: string;
}) {
  function updateAt(index: number, next: T) {
    const copy = [...items];
    copy[index] = next;
    onChange(copy);
  }
  function removeAt(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="glass relative space-y-3 rounded-xl2 p-5">
          <button
            type="button"
            onClick={() => removeAt(i)}
            className="absolute right-4 top-4 text-bg-soft/40 transition-colors hover:text-red-400"
            aria-label={`Remove ${label}`}
          >
            <Trash2 size={16} />
          </button>
          {renderItem(item, i, (next) => updateAt(i, next))}
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, newItem()])}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-bg-soft/70 transition-colors hover:border-green-bright/40 hover:text-green-bright"
      >
        <Plus size={14} /> Add {label}
      </button>
    </div>
  );
}
