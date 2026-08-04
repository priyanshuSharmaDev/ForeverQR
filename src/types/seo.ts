export type FAQItem = { question: string; answer: string };

export type SeoConfig = {
  path: string;
  title: string;
  description: string;
  h1: string;
  faqs?: FAQItem[];
};
