import { getSiteContent } from "@/lib/content";
import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResultsPreviewSection from "@/components/home/ResultsPreviewSection";
import FoundationOfferSection from "@/components/home/FoundationOfferSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default async function HomePage() {
  const content = await getSiteContent();
  const { home } = content;

  return (
    <main>
      <Hero hero={home.hero} />
      <StatsSection stats={home.stats} />
      <WhyUsSection whyUs={home.whyUs} />
      <ServicesPreviewSection servicesPreview={home.servicesPreview} />
      <ProcessSection process={home.process} />
      <ResultsPreviewSection resultsPreview={home.resultsPreview} />
      <FoundationOfferSection offer={home.foundationOffer} />
      <FinalCtaSection data={home.finalCta} />
    </main>
  );
}
