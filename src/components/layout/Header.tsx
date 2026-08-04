import { Menu, QrCode, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "../common/Button";

const nav = [
  ["QR Generator", "/qr-code-generator"],
  ["Google Form QR", "/google-form-qr-code"],
  ["Features", "/#features"],
  ["How It Works", "/#how-it-works"],
  ["FAQ", "/#faq"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-text-primary" aria-label="Forever QR home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-white"><QrCode className="h-5 w-5" /></span>
          Forever QR
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <NavLink key={href} to={href} className="text-sm font-semibold text-text-secondary hover:text-primary">
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button onClick={() => document.getElementById("generator")?.scrollIntoView()}>Create QR Code</Button>
        </div>
        <Button variant="ghost" className="md:hidden" aria-label="Open menu" icon={open ? <X /> : <Menu />} onClick={() => setOpen((v) => !v)} />
      </div>
      {open ? <MobileMenu onClose={() => setOpen(false)} /> : null}
    </header>
  );
}

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <nav aria-label="Mobile navigation" className="grid gap-2 border-t border-border bg-white px-4 py-4 md:hidden">
      {nav.map(([label, href]) => (
        <Link key={href} to={href} onClick={onClose} className="rounded-lg px-3 py-3 text-sm font-semibold text-text-secondary hover:bg-primary-light">
          {label}
        </Link>
      ))}
    </nav>
  );
}
