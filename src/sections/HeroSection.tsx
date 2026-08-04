import { ArrowDown, QrCode, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "../components/common/Button";

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-text-primary md:text-6xl">Create Free Custom QR Codes That Don't Expire</h1>
          <p className="mt-5 max-w-2xl text-lg text-text-secondary">
            Generate high-quality QR codes for Google Forms, websites, Wi-Fi, and text. Customize colors, shapes, logos, and frames. No login required.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-text-secondary">
            {["Free to use", "No login", "Created in your browser", "No URL shortening", "No tracking by default"].map((item) => <span key={item} className="rounded-full bg-white px-3 py-2">{item}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => document.getElementById("generator")?.scrollIntoView()} icon={<QrCode className="h-4 w-4" />}>Create QR Code</Button>
            <Button variant="secondary" onClick={() => document.getElementById("how-it-works")?.scrollIntoView()} icon={<ArrowDown className="h-4 w-4" />}>See How It Works</Button>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-white p-6 shadow-soft">
          <div className="grid aspect-square place-items-center rounded-lg bg-primary-light">
            <div className="grid grid-cols-5 gap-2 rounded-lg bg-white p-5 shadow-soft">
              {Array.from({ length: 25 }, (_, i) => <span key={i} className={`h-8 w-8 rounded ${i % 4 === 0 ? "bg-primary" : i % 5 === 0 ? "bg-accent" : "bg-text-primary"}`} />)}
            </div>
          </div>
          <p className="mt-4 flex gap-2 text-sm text-text-secondary"><ShieldCheck className="h-4 w-4 text-success" /> The QR code itself does not expire and remains usable as long as the destination remains available.</p>
          <p className="mt-2 flex gap-2 text-sm text-text-secondary"><Sparkles className="h-4 w-4 text-accent" /> Style it for print, posters, forms, classrooms, and packaging.</p>
        </div>
      </div>
    </section>
  );
}
