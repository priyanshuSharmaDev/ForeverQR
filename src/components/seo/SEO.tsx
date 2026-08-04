import { Helmet } from "react-helmet-async";
import { siteName, siteUrl } from "../../constants/seo";
import type { FAQItem } from "../../types/seo";
import { appStructuredData, faqStructuredData, websiteStructuredData } from "../../utils/structuredData";

export function SEO({ title, description, path, faqs = [] }: { title: string; description: string; path: string; faqs?: FAQItem[] }) {
  const canonical = `${siteUrl}${path === "/" ? "" : path}`;
  const data = path === "/" ? [websiteStructuredData(siteUrl, siteName), appStructuredData(siteUrl), faqStructuredData(faqs)] : [faqStructuredData(faqs)];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}/og-image-placeholder.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
