import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/content";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const content = await getSiteContent();

  return (
    <>
      <Navbar brand={content.brand} nav={content.nav} />
      {children}
      <Footer footer={content.footer} brand={content.brand} />
    </>
  );
}
