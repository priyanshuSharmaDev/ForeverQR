import { Link } from "react-router-dom";
import { routes } from "../constants/routes";

const tools = [["Google Form QR", routes.googleForm], ["URL QR Generator", routes.url], ["Wi-Fi QR Generator", routes.wifi], ["Text QR Generator", routes.text]];

export function RelatedToolsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-3xl font-bold">Related generators</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {tools.map(([label, href]) => <Link key={href} to={href} className="rounded-lg border border-border bg-white p-5 font-bold text-primary hover:border-primary">{label}</Link>)}
      </div>
    </section>
  );
}
