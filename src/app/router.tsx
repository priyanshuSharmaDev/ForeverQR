import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const QRCodeGeneratorPage = lazy(() => import("../pages/QRCodeGeneratorPage"));
const GoogleFormsQRPage = lazy(() => import("../pages/GoogleFormsQRPage"));
const URLQRPage = lazy(() => import("../pages/URLQRPage"));
const WiFiQRPage = lazy(() => import("../pages/WiFiQRPage"));
const TextQRPage = lazy(() => import("../pages/TextQRPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));
const TermsPage = lazy(() => import("../pages/TermsPage"));
const DisclaimerPage = lazy(() => import("../pages/DisclaimerPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-6 text-text-secondary">Loading Forever QR...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/qr-code-generator" element={<QRCodeGeneratorPage />} />
            <Route path="/google-form-qr-code" element={<GoogleFormsQRPage />} />
            <Route path="/url-qr-code-generator" element={<URLQRPage />} />
            <Route path="/wifi-qr-code-generator" element={<WiFiQRPage />} />
            <Route path="/text-qr-code-generator" element={<TextQRPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
