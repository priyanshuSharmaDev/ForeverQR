import { PageContainer } from "../components/layout/PageContainer";
import { SEO } from "../components/seo/SEO";

export default function ContactPage() {
  const email = import.meta.env.VITE_CONTACT_EMAIL || "[contact email]";
  return <PageContainer><SEO title="Contact Forever QR | Forever QR" description="Contact information for Forever QR." path="/contact" /><h1 className="text-4xl font-extrabold">Contact</h1><p className="mt-4 text-text-secondary">For support, legal, or advertising questions, contact: {email}</p><p className="mt-4 text-text-secondary">Operator placeholder: [Company or operator name], [Country].</p></PageContainer>;
}
