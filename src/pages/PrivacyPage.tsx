import { PageContainer } from "../components/layout/PageContainer";
import { SEO } from "../components/seo/SEO";

export default function PrivacyPage() {
  return <PageContainer><SEO title="Privacy Policy | Forever QR" description="Privacy information for Forever QR browser-only QR code generation." path="/privacy" /><h1 className="text-4xl font-extrabold">Privacy Policy</h1><div className="mt-6 grid gap-4 text-text-secondary"><p>Effective date: [Effective date]. Operator: [Company name], [Country]. This template is not legal advice.</p><p>QR generation happens locally in your browser. URLs, Wi-Fi credentials, text, and uploaded logos are not sent to a backend by this application.</p><p>Recent QR configurations may be stored in localStorage only in this browser. You can clear them from the app or browser settings.</p><p>Advertising and analytics are disabled by default. If enabled in the future, providers may use cookies after consent where required. Forever QR does not provide scan analytics.</p></div></PageContainer>;
}
