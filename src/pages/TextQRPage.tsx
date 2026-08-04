import { SEO } from "../components/seo/SEO";
import { routes } from "../constants/routes";
import { seoConfigs } from "../constants/seo";
import { FAQSection } from "../sections/FAQSection";
import { GeneratorSection } from "../sections/GeneratorSection";

export default function TextQRPage() {
  const seo = seoConfigs[routes.text];
  return (
    <>
      <SEO {...seo} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">{seo.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">Encode plain text for labels, instructions, classroom materials, or offline notes. The generated QR contains only the text you enter.</p>
      </section>
      <GeneratorSection type="text" />
      <FAQSection faqs={seo.faqs || []} />
    </>
  );
}
