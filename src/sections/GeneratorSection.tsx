import { QRGenerator } from "../components/qr/QRGenerator";
import type { QRContentType } from "../types/qr";

export function GeneratorSection({ type = "url" }: { type?: QRContentType }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <QRGenerator contentType={type} />
    </section>
  );
}
