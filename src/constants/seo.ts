import { routes } from "./routes";
import type { FAQItem, SeoConfig } from "../types/seo";

export const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";
export const siteName = import.meta.env.VITE_SITE_NAME || "Forever QR";

export const commonFaqs: FAQItem[] = [
  { question: "Do QR codes created here expire?", answer: "Static QR codes do not contain an expiry date. They remain usable as long as the encoded destination remains available." },
  { question: "Is this QR code generator free?", answer: "Yes. You can create and download QR codes without an account or payment." },
  { question: "Do I need an account?", answer: "No login or registration is required." },
  { question: "Can I create a QR code for Google Forms?", answer: "Yes. Paste a Google Forms URL and the QR code will encode that original link directly." },
  { question: "Is my URL uploaded or stored?", answer: "QR generation happens in your browser. Recent QR codes are stored only in this browser when history is available." },
  { question: "Can I add a logo?", answer: "Yes. PNG, JPEG, and WebP logos up to 2 MB can be processed locally in your browser." },
  { question: "Can I change QR colors?", answer: "Yes. You can use solid colors or gradients, with warnings when contrast may reduce scan reliability." },
  { question: "Which file format should I download?", answer: "PNG is convenient for common digital use, while SVG is best for professional printing and resizing." },
  { question: "Is SVG suitable for printing?", answer: "Yes. SVG is vector-based and works well for print workflows." },
  { question: "Can I change the destination after downloading?", answer: "No. Static QR codes encode the destination directly, so create a new QR code if the destination changes." },
  { question: "Why is my QR code not scanning?", answer: "Low contrast, tiny print size, large logos, small margins, or a removed destination can cause scan issues." },
  { question: "Can I use the QR code commercially?", answer: "You may use generated QR images commercially, but you are responsible for your destination and use case." },
  { question: "Does the website track QR scans?", answer: "No. Static QR codes do not route through Forever QR, so scan analytics are not provided." },
  { question: "Can I generate Wi-Fi QR codes?", answer: "Yes. Wi-Fi QR codes are generated locally and credentials are not uploaded." },
  { question: "Does the QR code depend on this website?", answer: "No. Once downloaded, the QR image directly contains your content and does not depend on this website." }
];

export const seoConfigs: Record<string, SeoConfig> = {
  [routes.home]: {
    path: routes.home,
    title: "Free QR Code Generator - Custom QR Codes with Logo | Forever QR",
    description: "Create free custom QR codes for Google Forms, websites, Wi-Fi, and text. Add colors, gradients, logos, and frames. No login or URL shortening required.",
    h1: "Create Free Custom QR Codes That Don't Expire",
    faqs: commonFaqs
  },
  [routes.generator]: {
    path: routes.generator,
    title: "Free QR Code Generator - Create Custom QR Codes Online | Forever QR",
    description: "Use Forever QR to create static custom QR codes in your browser with logos, frames, colors, PNG downloads, and SVG downloads.",
    h1: "Free QR Code Generator",
    faqs: commonFaqs
  },
  [routes.googleForm]: {
    path: routes.googleForm,
    title: "Free Google Form QR Code Generator | Forever QR",
    description: "Create a custom QR code for Google Forms, registrations, surveys, feedback forms, events, and classroom materials.",
    h1: "Free Google Form QR Code Generator",
    faqs: commonFaqs.slice(0, 6)
  },
  [routes.url]: {
    path: routes.url,
    title: "Create a QR Code for Any URL | Forever QR",
    description: "Create a static QR code for any HTTP or HTTPS URL. Download PNG or SVG without URL shortening or login.",
    h1: "Create a QR Code for Any URL",
    faqs: commonFaqs.slice(0, 8)
  },
  [routes.wifi]: {
    path: routes.wifi,
    title: "Free Wi-Fi QR Code Generator | Forever QR",
    description: "Create a Wi-Fi QR code locally in your browser for WPA, WEP, or open networks. No credentials are uploaded.",
    h1: "Free Wi-Fi QR Code Generator",
    faqs: commonFaqs.filter((f) => /Wi-Fi|stored|free|account|depend/.test(f.question + f.answer))
  },
  [routes.text]: {
    path: routes.text,
    title: "Free Text QR Code Generator | Forever QR",
    description: "Create a plain text QR code online with custom styling, frames, and high-resolution downloads.",
    h1: "Free Text QR Code Generator",
    faqs: commonFaqs.slice(0, 5)
  }
};
