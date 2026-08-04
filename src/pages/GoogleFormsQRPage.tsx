import { SEO } from "../components/seo/SEO";
import { routes } from "../constants/routes";
import { seoConfigs } from "../constants/seo";
import { FAQSection } from "../sections/FAQSection";
import { GeneratorSection } from "../sections/GeneratorSection";
import { InformationSection } from "../sections/InformationSection";
import { RelatedToolsSection } from "../sections/RelatedToolsSection";

export default function GoogleFormsQRPage() {
  const seo = seoConfigs[routes.googleForm];
  return (
    <>
      <SEO {...seo} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">{seo.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">Paste your Google Forms link to create a custom QR code for event forms, surveys, registrations, feedback forms, and classroom forms. The QR directly contains the original form URL.</p>
      </section>
      <GeneratorSection type="google-form" />
      <InformationSection />
      <section className="mx-auto max-w-7xl px-4 py-12"><h2 className="text-3xl font-bold">Before you print a Google Form QR code</h2><p className="mt-3 text-text-secondary">Open the form in a private browser window or scan the QR from another device. Confirm that permissions allow the intended audience to respond.</p></section>
      <FAQSection faqs={seo.faqs || []} />
      <RelatedToolsSection />
    </>
  );
}
