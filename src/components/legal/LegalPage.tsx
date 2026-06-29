import PageHero from "@/components/ui/PageHero";
import type { ReactNode } from "react";

export default function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main>
      <PageHero title={title} subtitle={subtitle} />
      <section className="section-pad bg-bg-dark">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-base leading-relaxed text-bg-soft/70 lg:px-8 lg:text-lg">
          {children}
        </div>
      </section>
    </main>
  );
}
