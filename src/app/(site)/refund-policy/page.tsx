import { getSiteContent } from "@/lib/content";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Refund Policy | Growth Maker",
};

export default async function RefundPolicyPage() {
  const content = await getSiteContent();
  const { brand, contact } = content;

  return (
    <LegalPage
      title="Refund Policy"
      subtitle={`Our approach to refunds for ${brand.name} growth systems and services.`}
    >
      <p>
        At {brand.name}, we are committed to delivering measurable value through our performance
        marketing, sales funnel, automation, and creative services. This Refund Policy outlines
        the terms under which refunds may be considered.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Service-Based Engagements</h2>
      <p>
        Because our services involve strategy, planning, and execution work that begins
        immediately after onboarding, fees already paid for work completed or in progress are
        generally non-refundable.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Foundation Growth System</h2>
      <p>
        For the Foundation Growth System package, refunds may be considered on a case-by-case
        basis if no deliverables have been started. Once website design, funnel build, or
        automation setup work has begun, the corresponding portion of the fee is non-refundable.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Ad Spend</h2>
      <p>
        Any advertising budget paid directly to platforms such as Meta or Google is non-refundable
        once campaigns have been launched, as this spend is managed by the advertising platform
        and not by {brand.name}.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">How to Request a Review</h2>
      <p>
        If you believe you are eligible for a refund, please contact us at{" "}
        {contact.details.email} with your details and reason for the request. We will review each
        request individually and respond within a reasonable timeframe.
      </p>
    </LegalPage>
  );
}
