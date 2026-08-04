import { Link } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { SEO } from "../components/seo/SEO";

export default function NotFoundPage() {
  return <PageContainer><SEO title="Page Not Found | Forever QR" description="The requested Forever QR page could not be found." path="/404" /><h1 className="text-4xl font-extrabold">Page not found</h1><p className="mt-4 text-text-secondary">This page is not available.</p><Link className="mt-6 inline-flex rounded-lg bg-primary px-4 py-3 font-semibold text-white" to="/">Go to the QR generator</Link></PageContainer>;
}
