import Link from "next/link";
import type { ReactNode } from "react";

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-growth-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-bg-soft transition-colors hover:border-green-bright/50 hover:text-green-bright"
    >
      {children}
    </Link>
  );
}
