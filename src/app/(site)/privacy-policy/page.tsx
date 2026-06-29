import { getSiteContent } from "@/lib/content";
import LegalPage from "@/components/legal/LegalPage";

export const metadata = {
  title: "Privacy Policy | Growth Maker",
};

export default async function PrivacyPolicyPage() {
  const content = await getSiteContent();
  const { brand, contact } = content;

  return (
    <LegalPage
      title="Privacy Policy"
      subtitle={`How ${brand.name} collects, uses, and protects your information.`}
    >
      <p>
        This Privacy Policy explains how {brand.name} (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) collects, uses, and safeguards information you share with us through our
        website, contact forms, and strategy call bookings.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Information We Collect</h2>
      <p>
        When you fill out our contact form, we collect your full name, email address, phone
        number, business type, revenue range, the service you are interested in, and any message
        you choose to share with us.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">How We Use Your Information</h2>
      <p>
        We use the information you provide to respond to your enquiry, schedule a strategy call,
        understand your business needs, and recommend the right growth system for you. We do not
        sell or rent your personal information to third parties.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Data Storage</h2>
      <p>
        Submissions made through our contact form are securely stored and are only accessible to
        the {brand.name} team for the purpose of following up on your enquiry.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information at any
        time by contacting us at {contact.details.email}.
      </p>

      <h2 className="font-heading text-xl font-bold text-bg-soft">Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please reach out to us at{" "}
        {contact.details.email} or {contact.details.phone}.
      </p>
    </LegalPage>
  );
}
