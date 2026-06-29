import { getSiteContent } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import StorySection from "@/components/about/StorySection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export const metadata = {
  title: "About Us | Growth Maker",
  description:
    "Growth Maker is your digital growth partner, building performance marketing systems, funnels, and automation for coaches, consultants, and education brands.",
};

export default async function AboutPage() {
  const content = await getSiteContent();
  const { about } = content;

  return (
    <main>
      <PageHero title={about.hero.title} subtitle={about.hero.subtitle} />
      <StorySection story={about.story} />
      <MissionVisionSection mission={about.mission} vision={about.vision} />
      <CoreValuesSection coreValues={about.coreValues} />
      <FinalCtaSection data={content.contact.finalCta} />
    </main>
  );
}
