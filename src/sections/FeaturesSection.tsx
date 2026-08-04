import { BadgeCheck, Palette, Shield, Smartphone } from "lucide-react";

const features = [
  "Free QR code creation", "No account required", "Static QR codes", "Google Forms support", "Custom colors", "Gradients", "Logo support", "Custom frames", "High-resolution PNG", "SVG download", "Mobile-friendly", "Privacy-friendly browser processing", "No URL shortener dependency", "Print-ready QR codes"
];

export function FeaturesSection() {
  const icons = [BadgeCheck, Palette, Shield, Smartphone];
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-3xl font-bold">Professional QR features</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = icons[index % icons.length];
          return <article key={feature} className="rounded-lg border border-border bg-white p-5"><Icon className="h-5 w-5 text-primary" /><h3 className="mt-3 font-bold">{feature}</h3><p className="mt-2 text-sm text-text-secondary">Designed for public sharing, mobile scanning, and static hosting.</p></article>;
        })}
      </div>
    </section>
  );
}
