import { qrPresets } from "../constants/qrPresets";

export function ExamplesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-bold">Example styles</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {qrPresets.map((preset) => <article key={preset.name} className="rounded-lg border border-border p-4"><div className="grid aspect-square grid-cols-4 gap-1 rounded bg-surface-muted p-3">{Array.from({ length: 16 }, (_, i) => <span key={i} className="rounded-sm bg-primary" style={{ opacity: i % 3 ? 1 : 0.25 }} />)}</div><h3 className="mt-3 font-bold">{preset.name}</h3></article>)}
        </div>
      </div>
    </section>
  );
}
