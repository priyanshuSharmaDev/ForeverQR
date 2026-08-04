# Forever QR

Forever QR is a production-ready public QR code generator built with React, TypeScript, Vite, Tailwind CSS, React Router, `qr-code-styling`, React Hook Form-ready validation utilities, Zod-compatible patterns, Helmet metadata, Vitest, and React Testing Library.

It is free to use, requires no login, has no backend, uses no paid QR API, and does not shorten URLs. QR codes are generated entirely in the browser and directly encode the user's original content, including Google Forms URLs.

## Features

- Static QR codes for URLs, Google Forms, text, and Wi-Fi
- Advanced dot, corner, color, gradient, logo, frame, and label controls
- PNG, SVG, JPEG, and WebP export actions through `qr-code-styling`
- Browser-only logo validation and processing for PNG, JPEG, and WebP up to 2 MB
- Scan-quality warnings for contrast, margins, logo size, and decorative styles
- Recent QR configurations stored only in localStorage, capped at five
- SEO landing pages, metadata, JSON-LD, sitemap, robots, manifest, and OG placeholder
- AdSense-ready reserved ad placements disabled by default
- Cookie consent architecture with non-essential scripts off by default
- Netlify-ready redirects, cache headers, and security headers

## Local Setup

```bash
npm install
npm run dev
```

## Commands

```bash
npm run lint
npm run test
npm run build
npm run preview
```

## Deployment

Netlify:

1. Set the build command to `npm run build`.
2. Set the publish directory to `dist`.
3. Keep `netlify.toml` and `public/_redirects` for refresh-safe routes.
4. Replace `https://example.com` in `public/sitemap.xml` and `public/robots.txt`.

Vercel or Cloudflare Pages:

1. Use `npm run build`.
2. Publish `dist`.
3. Configure SPA fallback to `/index.html` if your host needs it.

## Environment Variables

Copy `.env.example` to `.env` for local configuration.

```bash
VITE_SITE_URL=https://example.com
VITE_SITE_NAME=Forever QR
VITE_CONTACT_EMAIL=
VITE_ADSENSE_ENABLED=false
VITE_ADSENSE_CLIENT_ID=
VITE_ANALYTICS_ENABLED=false
VITE_GA_MEASUREMENT_ID=
VITE_COOKIE_CONSENT_ENABLED=true
```

Do not commit real credentials or private account values.

## SEO Setup

- Update `VITE_SITE_URL` to the final production domain.
- Replace `https://example.com` in `public/sitemap.xml` and `public/robots.txt`.
- Replace `public/og-image-placeholder.png` with a final 1200 x 630 branded Open Graph image if desired.
- Submit `/sitemap.xml` in Google Search Console.
- Use URL inspection for `/`, `/qr-code-generator`, `/google-form-qr-code`, `/url-qr-code-generator`, `/wifi-qr-code-generator`, and `/text-qr-code-generator`.
- Submit the same sitemap in Bing Webmaster Tools.

The build runs a lightweight prerender step so route HTML contains page-specific title, description, canonical, H1, visible copy, and JSON-LD before the React app hydrates.

## AdSense

Ads are disabled by default. To enable later:

1. Add the real publisher ID to `VITE_ADSENSE_CLIENT_ID`.
2. Set `VITE_ADSENSE_ENABLED=true`.
3. Insert the approved AdSense loader after consent in the ad integration area.
4. Replace `public/ads.txt` with the exact record from AdSense after approval.
5. Review `netlify.toml` CSP if Google requests additional domains.

Do not publish the placeholder `ads.txt` as a real record.

## Analytics

Analytics are disabled by default. If enabled, only generic events should be sent:

- `generator_opened`
- `qr_generated`
- `qr_downloaded`
- `preset_selected`

Never send QR contents, destination URLs, Wi-Fi passwords, or logo data.

## Privacy Behavior

The app has no backend and does not fetch or verify submitted URLs. QR content and logo processing happen locally in the browser. Recent history may be stored in localStorage only on the user's device. Users can clear recent items in the app or clear browser storage.

## Static QR Limitation

Static QR codes directly encode content. They do not contain an expiry date and do not depend on Forever QR after download. They remain usable as long as the destination URL or encoded content remains available. If a Google Form is deleted, restricted, or made private, the QR code cannot restore access.

## Security Notes

- Unsafe URL protocols are rejected.
- Uploaded SVG logos are disabled until safe sanitization is implemented.
- User content is not rendered through `dangerouslySetInnerHTML`.
- External test links use `rel="noopener noreferrer"`.
- Netlify headers include content-type, referrer, permissions, frame, and CSP recommendations.

## Browser Support

Target the latest two stable versions of Chrome, Edge, Firefox, and Safari, plus Chrome on Android and Safari on iOS. Clipboard, WebP, File API, and localStorage features include graceful fallbacks where practical.

## Known Limitations

- Static QR destinations cannot be edited after download.
- Scan analytics are not available because scans do not route through this website.
- Framed composition export is represented in the UI, while raw QR export uses `qr-code-styling` formats.
- Legal pages contain placeholders and should be reviewed before public launch.

## Lighthouse Checklist

- Use the production build.
- Confirm no real ad or analytics scripts load before consent.
- Confirm `VITE_SITE_URL` matches the deployed domain.
- Test at 320, 375, 768, 1024, 1440, and 1920 px widths.
- Scan-test printed QR codes before distribution.

## Pre-launch Checklist

- Replace legal placeholders for company, operator, country, jurisdiction, email, and effective date.
- Replace sitemap and robots domain placeholders.
- Replace or approve the Open Graph image.
- Verify Google Forms sharing permissions.
- Submit the sitemap to Google Search Console and Bing Webmaster Tools.
- Add real AdSense values only after account approval and consent review.
