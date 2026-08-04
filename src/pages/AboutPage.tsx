import { PageContainer } from "../components/layout/PageContainer";
import { SEO } from "../components/seo/SEO";

export default function AboutPage() {
  return <PageContainer><SEO title="About Forever QR | Forever QR" description="Learn about Forever QR, a browser-only static QR code generator." path="/about" /><h1 className="text-4xl font-extrabold">About Forever QR</h1><p className="mt-4 max-w-3xl text-text-secondary">Forever QR is a public, no-login QR code generator for static QR codes. It is designed for simple browser-only generation, customization, and download.</p><p className="mt-4 text-text-secondary">Operator placeholder: [Company or operator name]. Contact placeholder: [contact email].</p></PageContainer>;
}
