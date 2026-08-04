export function InformationSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="rounded-lg border border-border bg-white p-6">
        <h2 className="text-3xl font-bold">Important QR permanence information</h2>
        <div className="mt-4 grid gap-4 text-text-secondary md:grid-cols-2">
          <p>The QR code is static. Your original destination is encoded directly, no shortened URL is created, and the downloaded QR does not depend on Forever QR.</p>
          <p>Static QR codes do not contain an expiry date. The destination URL may still be changed, removed, restricted, or made private. A deleted Google Form cannot be restored by the QR.</p>
          <p>Scan-test before printing. High contrast and enough quiet margin improve reliability, especially for posters, packaging, and classroom handouts.</p>
          <p>SVG is best for professional printing. PNG is convenient for normal digital use and quick sharing.</p>
        </div>
      </div>
    </section>
  );
}
