import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const siteUrl = process.env.VITE_SITE_URL || "https://example.com";
const routes = [
  ["/", "Create Free Custom QR Codes That Don't Expire"],
  ["/qr-code-generator", "Free QR Code Generator"],
  ["/google-form-qr-code", "Free Google Form QR Code Generator"],
  ["/url-qr-code-generator", "Create a QR Code for Any URL"],
  ["/wifi-qr-code-generator", "Free Wi-Fi QR Code Generator"],
  ["/text-qr-code-generator", "Free Text QR Code Generator"],
  ["/about", "About Forever QR"],
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms of Use"],
  ["/disclaimer", "Disclaimer"],
  ["/contact", "Contact"]
];

const template = await readFile("dist/index.html", "utf8");

const descriptions = {
  "/": "Create free custom QR codes for Google Forms, websites, Wi-Fi, and text. No login, no URL shortening, and browser-only generation.",
  "/google-form-qr-code": "Create a custom QR code for Google Forms, surveys, registrations, classroom forms, and feedback forms.",
  "/url-qr-code-generator": "Create a static QR code for any HTTP or HTTPS URL with custom colors, logo support, and PNG or SVG downloads.",
  "/wifi-qr-code-generator": "Create a Wi-Fi QR code locally in your browser. Credentials are not uploaded or stored.",
  "/text-qr-code-generator": "Create a plain text QR code online with custom styling and high-resolution downloads."
};

for (const [path, h1] of routes) {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const description = descriptions[path] || `${h1} from Forever QR. Browser-only static QR code tools with no login.`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": path === "/" ? "SoftwareApplication" : "WebPage",
    name: h1,
    url,
    description,
    applicationCategory: path === "/" ? "UtilitiesApplication" : undefined,
    operatingSystem: path === "/" ? "Web" : undefined,
    offers: path === "/" ? { "@type": "Offer", price: "0", priceCurrency: "USD" } : undefined
  });
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${h1} | Forever QR</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
    .replace("</head>", `<link rel="canonical" href="${url}" /><script type="application/ld+json">${jsonLd}</script></head>`)
    .replace('<div id="root"></div>', `<div id="root"><main><h1>${h1}</h1><p>${description}</p></main></div>`);
  const out = path === "/" ? "dist/index.html" : join("dist", path, "index.html");
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
}
