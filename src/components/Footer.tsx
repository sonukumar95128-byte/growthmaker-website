import Link from "next/link";
import Image from "next/image";
import type { Brand, FooterContent } from "@/lib/types";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer({
  footer,
  brand,
}: {
  footer: FooterContent;
  brand: Brand;
}) {
  return (
    <footer className="border-t border-white/5 bg-bg-deepest">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/assets/logo/growth-maker-mark.png"
              alt={brand.name}
              width={170}
              height={125}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm font-semibold text-green-bright">{footer.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bg-soft/60">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bg-soft/90">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bg-soft/60 transition-colors hover:text-green-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bg-soft/90">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              {footer.servicesLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-bg-soft/60 transition-colors hover:text-green-bright"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bg-soft/90">
              {footer.newsletter.title}
            </h4>
            <NewsletterForm
              placeholder={footer.newsletter.placeholder}
              buttonLabel={footer.newsletter.button}
            />
            <ul className="mt-6 space-y-2">
              {footer.policyLinks.map((policy) => (
                <li key={policy.href}>
                  <Link
                    href={policy.href}
                    className="text-xs text-bg-soft/40 transition-colors hover:text-green-bright"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-bg-soft/40">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
