import { PageContainer } from "../components/layout/PageContainer";
import { SEO } from "../components/seo/SEO";

export default function DisclaimerPage() {
  return <PageContainer><SEO title="Disclaimer | Forever QR" description="Disclaimer for static QR codes created with Forever QR." path="/disclaimer" /><h1 className="text-4xl font-extrabold">Disclaimer</h1><div className="mt-6 grid gap-4 text-text-secondary"><p>Users are responsible for encoded URLs and content. Forever QR does not control destination pages.</p><p>QR availability depends on destination availability. Test before printing, especially for Google Forms permissions and public access.</p><p>The website may be supported by advertising. Replace legal placeholders before public launch.</p></div></PageContainer>;
}
