const cases = ["Google Forms", "Event registration", "Restaurant menus", "Product packaging", "Business cards", "Feedback forms", "Classroom materials", "Wi-Fi access", "Posters and flyers", "Payment or information links", "Surveys", "Contactless forms"];

export function UseCasesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-3xl font-bold">Popular QR code use cases</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cases.map((item) => <article key={item} className="rounded-lg border border-border bg-white p-4"><h3 className="font-bold">{item}</h3><p className="mt-2 text-sm text-text-secondary">Create a clean static QR code for sharing this destination offline or online.</p></article>)}
      </div>
    </section>
  );
}
