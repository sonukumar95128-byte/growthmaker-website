import { getSiteContent } from "@/lib/content";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Terms & Conditions | Growth Maker",
};

export default async function TermsConditionsPage() {
  const content = await getSiteContent();
  const { brand, contact } = content;

  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle={`The terms that govern your use of the ${brand.name} website and services.`}
    >
      <p>
        These Terms & Conditions govern your use of the {brand.name} website and any services
        booked through our contact form or strategy calls. By using our website, you agree to
        these terms.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Use of Our Website</h2>
      <p>
        Our website content, including text, graphics, and the {brand.name} logo, is provided for
        informational purposes about our services. You may not copy, reproduce, or redistribute
        our content without permission.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Services</h2>
      <p>
        {brand.name} provides performance marketing, sales funnel automation, website design,
        WhatsApp automation, and related digital growth services. The scope, timeline, and pricing
        of any engagement will be confirmed separately with each client before work begins.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">No Guaranteed Results</h2>
      <p>
        While we design every strategy with a result-first mindset, digital marketing outcomes
        depend on multiple factors including market conditions, offer strength, and audience
        behavior. We do not guarantee specific revenue or lead volume outcomes.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Client Responsibilities</h2>
      <p>
        Clients are responsible for providing accurate business information, timely feedback, and
        access to necessary accounts or platforms required to deliver the agreed services.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Changes to These Terms</h2>
      <p>
        We may update these Terms & Conditions from time to time. Continued use of our website
        after changes are posted constitutes acceptance of the revised terms.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Contact Us</h2>
      <p>
        For any questions about these terms, please contact us at {contact.details.email} or{" "}
        {contact.details.phone}.
      </p>
    </LegalPage>
  );
}
