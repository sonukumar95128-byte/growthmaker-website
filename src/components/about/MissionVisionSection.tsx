import GlassCard from "@/components/ui/GlassCard";
import { Target, Eye } from "lucide-react";
import type { MissionVision } from "@/lib/types";

export default function MissionVisionSection({
  mission,
  vision,
}: {
  mission: MissionVision;
  vision: MissionVision;
}) {
  return (
    <section className="section-pad bg-bg-deepest">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <GlassCard>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-growth-gradient">
              <Target size={22} className="text-white" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-bg-soft">{mission.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-bg-soft/65 lg:text-base">
              {mission.content}
            </p>
          </GlassCard>
          <GlassCard delay={0.1}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-growth-gradient">
              <Eye size={22} className="text-white" />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-bg-soft">{vision.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-bg-soft/65 lg:text-base">
              {vision.content}
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
