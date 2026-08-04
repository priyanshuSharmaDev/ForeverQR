import { PageContainer } from "../components/layout/PageContainer";
import { SEO } from "../components/seo/SEO";

export default function TermsPage() {
  return <PageContainer><SEO title="Terms of Use | Forever QR" description="Terms of Use placeholders for Forever QR." path="/terms" /><h1 className="text-4xl font-extrabold">Terms of Use</h1><div className="mt-6 grid gap-4 text-text-secondary"><p>Effective date: [Effective date]. Operator: [Company name]. Jurisdiction: [Legal jurisdiction]. This page is a production placeholder and should be reviewed before launch.</p><p>Users are responsible for the content they encode and the legality, availability, and safety of destination links.</p><p>The service is provided as a static browser tool and may be supported by advertising.</p></div></PageContainer>;
}
