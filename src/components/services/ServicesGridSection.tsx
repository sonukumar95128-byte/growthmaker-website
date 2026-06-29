import GlassCard from "@/components/ui/GlassCard";
import {
  GitBranch,
  GraduationCap,
  Mail,
  Video,
  CreditCard,
  MessageCircle,
  Workflow,
  Megaphone,
  Users2,
  Palette,
  Film,
  Search,
  Globe,
  LayoutTemplate,
} from "lucide-react";
import type { ServiceItem } from "@/lib/types";

const icons = [
  GitBranch,
  GraduationCap,
  Mail,
  Video,
  CreditCard,
  MessageCircle,
  Workflow,
  Megaphone,
  Users2,
  Palette,
  Film,
  Search,
  Globe,
  LayoutTemplate,
];

export default function ServicesGridSection({ items }: { items: ServiceItem[] }) {
  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <GlassCard key={item.title} delay={(i % 3) * 0.08}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-growth-gradient">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-bg-soft">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bg-soft/60">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
