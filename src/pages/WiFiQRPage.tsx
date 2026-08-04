import { SEO } from "../components/seo/SEO";
import { routes } from "../constants/routes";
import { seoConfigs } from "../constants/seo";
import { FAQSection } from "../sections/FAQSection";
import { GeneratorSection } from "../sections/GeneratorSection";

export default function WiFiQRPage() {
  const seo = seoConfigs[routes.wifi];
  return (
    <>
      <SEO {...seo} />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">{seo.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">Create a Wi-Fi QR code for WPA/WPA2, WEP, or open networks. Credentials are converted into QR text locally and are not uploaded or stored in analytics.</p>
      </section>
      <GeneratorSection type="wifi" />
      <FAQSection faqs={seo.faqs || []} />
    </>
  );
}
