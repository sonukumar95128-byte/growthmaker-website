import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { PrimaryLink } from "@/components/ui/Button";
import {
  Megaphone,
  GitBranch,
  Globe,
  MessageSquare,
  Video,
  GraduationCap,
  Mail,
  Film,
  Palette,
  Search,
  CreditCard,
  Users2,
} from "lucide-react";
import type { HomeServicesPreview } from "@/lib/types";

const icons = [
  Megaphone,
  GitBranch,
  Globe,
  MessageSquare,
  Video,
  GraduationCap,
  Mail,
  Film,
  Palette,
  Search,
  CreditCard,
  Users2,
];

export default function ServicesPreviewSection({
  servicesPreview,
}: {
  servicesPreview: HomeServicesPreview;
}) {
  return (
    <section className="section-pad bg-bg-dark">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading title={servicesPreview.title} subtitle={servicesPreview.subtitle} />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {servicesPreview.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <GlassCard key={service} delay={i * 0.05} className="flex flex-col items-start">
                <Icon size={22} className="text-green-bright" />
                <p className="mt-4 text-sm font-semibold leading-snug text-bg-soft">{service}</p>
              </GlassCard>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <PrimaryLink href={servicesPreview.cta.href}>{servicesPreview.cta.label}</PrimaryLink>
        </div>
      </div>
    </section>
  );
}
