import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

const links = [
  ["QR Generator", routes.generator],
  ["Google Form QR", routes.googleForm],
  ["URL QR", routes.url],
  ["Wi-Fi QR", routes.wifi],
  ["Text QR", routes.text],
  ["About", routes.about],
  ["Contact", routes.contact],
  ["Privacy", routes.privacy],
  ["Terms", routes.terms],
  ["Disclaimer", routes.disclaimer]
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-[1.4fr_2fr]">
        <div>
          <p className="text-lg font-bold">Forever QR</p>
          <p className="mt-2 max-w-md text-sm text-text-secondary">
            Static QR codes encode your destination directly. They have no built-in expiry date and remain usable as long as that destination remains available.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3" aria-label="Footer navigation">
          {links.map(([label, href]) => <Link key={href} className="font-semibold text-text-secondary hover:text-primary" to={href}>{label}</Link>)}
        </nav>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-sm text-text-muted">© {new Date().getFullYear()} Forever QR. Replace legal placeholders before launch.</div>
    </footer>
  );
}
