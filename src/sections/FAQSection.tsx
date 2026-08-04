import { useState } from "react";
import type { FAQItem } from "../types/seo";

export function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="text-3xl font-bold">Frequently asked questions</h2>
      <div className="mt-6 grid gap-3">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="rounded-lg border border-border bg-white">
            <button className="flex w-full items-center justify-between p-4 text-left font-bold" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
              {faq.question}<span aria-hidden>{open === index ? "-" : "+"}</span>
            </button>
            <div hidden={open !== index} className="px-4 pb-4 text-sm text-text-secondary">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
