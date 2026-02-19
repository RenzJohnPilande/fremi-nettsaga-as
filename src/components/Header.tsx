import { useState } from "react";
import { Mail, Phone, MapPin, Building, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Forside", href: "#forside" },
    { label: "Tjenester", href: "#tjenester" },
    { label: "Om oss", href: "#omoss" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-xs md:text-sm md:justify-end">
          <a href="mailto:fro-fre@outlook.com" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Mail className="h-3 w-3" /> fro-fre@outlook.com
          </a>
          <a href="tel:92604072" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Phone className="h-3 w-3" /> 926 04 072
          </a>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> 6260 Skodje
          </span>
          <span className="flex items-center gap-1">
            <Building className="h-3 w-3" /> Orgnr 912 166 805
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-card/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#forside" className="font-heading text-2xl font-bold tracking-wider text-primary">
            FREMI
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-heading text-sm font-medium uppercase tracking-wide text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <ul className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 font-heading text-sm font-medium uppercase tracking-wide text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
