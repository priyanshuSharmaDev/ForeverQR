import { SEO } from "../components/seo/SEO";
import { routes } from "../constants/routes";
import { seoConfigs } from "../constants/seo";
import { FAQSection } from "../sections/FAQSection";
import { GeneratorSection } from "../sections/GeneratorSection";
import { InformationSection } from "../sections/InformationSection";

export default function URLQRPage() {
  const seo = seoConfigs[routes.url];
  return (
    <>
      <SEO {...seo} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">{seo.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">Create a static QR code for websites, menus, landing pages, documents, and public forms. Forever QR does not shorten the URL or route scans through a tracking link.</p>
      </section>
      <GeneratorSection type="url" />
      <InformationSection />
      <FAQSection faqs={seo.faqs || []} />
    </>
  );
}
