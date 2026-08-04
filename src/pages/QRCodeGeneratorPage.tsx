import { AdSlot } from "../components/ads/AdSlot";
import { SEO } from "../components/seo/SEO";
import { routes } from "../constants/routes";
import { seoConfigs } from "../constants/seo";
import { FAQSection } from "../sections/FAQSection";
import { GeneratorSection } from "../sections/GeneratorSection";
import { InformationSection } from "../sections/InformationSection";
import { RelatedToolsSection } from "../sections/RelatedToolsSection";

export default function QRCodeGeneratorPage() {
  const seo = seoConfigs[routes.generator];
  return (
    <>
      <SEO {...seo} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">{seo.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">
          Create custom static QR codes for websites, Google Forms, Wi-Fi access, and text. Everything is generated locally in your browser with no account and no URL shortener.
        </p>
      </section>
      <AdSlot placement="Below generator page intro" minHeight={120} className="mx-auto max-w-7xl" />
      <GeneratorSection type="url" />
      <InformationSection />
      <FAQSection faqs={seo.faqs || []} />
      <RelatedToolsSection />
    </>
  );
}
