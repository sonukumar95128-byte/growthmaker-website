import { getSiteContent } from "@/lib/content";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetailsSection from "@/components/contact/ContactDetailsSection";
import FaqSection from "@/components/contact/FaqSection";

export const metadata = {
  title: "Contact Us | Growth Maker",
  description:
    "Book your free strategy call with Growth Maker and start building your performance marketing, sales funnel, and automation system.",
};

export default async function ContactPage() {
  const content = await getSiteContent();
  const { contact, faqs } = content;

  return (
    <main>
      <PageHero title={contact.hero.title} subtitle={contact.hero.subtitle} />
      <section className="section-pad bg-bg-dark">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <ContactForm form={contact.form} />
          <ContactDetailsSection details={contact.details} />
        </div>
      </section>
      <FaqSection faqs={faqs} />
    </main>
  );
}
