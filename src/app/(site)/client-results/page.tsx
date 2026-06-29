import { getSiteContent } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import OverviewSection from "@/components/clientResults/OverviewSection";
import CaseStudiesSection from "@/components/clientResults/CaseStudiesSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata = {
  title: "Client Results & Case Studies | Growth Maker",
  description:
    "See how Growth Maker has helped coaches, fitness trainers, education brands, and real-estate agents build measurable digital growth systems.",
};

export default async function ClientResultsPage() {
  const content = await getSiteContent();
  const { clientResults } = content;

  return (
    <main>
      <PageHero title={clientResults.hero.title} subtitle={clientResults.hero.subtitle} />
      <OverviewSection overview={clientResults.overview} />
      <CaseStudiesSection caseStudies={clientResults.caseStudies} />
      <FinalCtaSection data={clientResults.finalCta} />
    </main>
  );
}
