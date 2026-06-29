import { getSiteContent } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import ServicesPackageSection from "@/components/services/ServicesPackageSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata = {
  title: "Services | Growth Maker",
  description:
    "Performance marketing, sales funnels, automation, website design, and creative services to help your business build a complete digital growth system.",
};

export default async function ServicesPage() {
  const content = await getSiteContent();
  const { services } = content;

  return (
    <main>
      <PageHero title={services.hero.title} subtitle={services.hero.subtitle} />
      <ServicesGridSection items={services.items} />
      <ServicesPackageSection pkg={services.package} />
      <FinalCtaSection data={content.contact.finalCta} />
    </main>
  );
}
