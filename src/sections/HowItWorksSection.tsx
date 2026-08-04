import { Download, Paintbrush, QrCode, ScanLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: [string, string, LucideIcon][] = [
  ["Paste or enter your content", "Add a Google Form URL, website link, Wi-Fi details, or plain text.", QrCode],
  ["Customize QR appearance", "Choose dots, corners, colors, gradient, logo, and frame options.", Paintbrush],
  ["Test the QR code", "Open the destination and scan-test before printing.", ScanLine],
  ["Download and share", "Export PNG or SVG. The downloaded QR does not depend on this website.", Download]
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map(([title, text, Icon], index) => <article key={title as string} className="rounded-lg border border-border p-5"><Icon className="h-6 w-6 text-accent" /><h3 className="mt-3 font-bold">{index + 1}. {title}</h3><p className="mt-2 text-sm text-text-secondary">{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
