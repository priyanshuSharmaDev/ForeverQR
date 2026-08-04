import { AdSlot } from "../components/ads/AdSlot";
import { SEO } from "../components/seo/SEO";
import { routes } from "../constants/routes";
import { commonFaqs, seoConfigs } from "../constants/seo";
import { ExamplesSection } from "../sections/ExamplesSection";
import { FAQSection } from "../sections/FAQSection";
import { FeaturesSection } from "../sections/FeaturesSection";
import { GeneratorSection } from "../sections/GeneratorSection";
import { HeroSection } from "../sections/HeroSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { InformationSection } from "../sections/InformationSection";
import { RelatedToolsSection } from "../sections/RelatedToolsSection";
import { UseCasesSection } from "../sections/UseCasesSection";

export default function HomePage() {
  const seo = seoConfigs[routes.home];
  return (
    <>
      <SEO {...seo} />
      <HeroSection />
      <AdSlot placement="Below hero" minHeight={120} className="mx-auto max-w-7xl" />
      <GeneratorSection />
      <AdSlot placement="Between generator and features" minHeight={120} className="mx-auto max-w-7xl" />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ExamplesSection />
      <InformationSection />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-bold">Google Forms QR codes</h2>
        <p className="mt-3 max-w-3xl text-text-secondary">Forever QR directly encodes Google Forms URLs for registrations, surveys, feedback forms, and classroom activities. Check sharing permissions before printing so scanners can open the form.</p>
      </section>
      <FAQSection faqs={commonFaqs} />
      <AdSlot placement="Between use cases and FAQ" minHeight={120} className="mx-auto max-w-7xl" />
      <RelatedToolsSection />
      <AdSlot placement="Above footer" minHeight={120} className="mx-auto max-w-7xl" />
    </>
  );
}
