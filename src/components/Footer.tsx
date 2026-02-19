import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">FREMI</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Maskinentreprenør i Møre og Romsdal. Graving, drenering og transport av masser.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Hurtiglenker</h4>
            <ul className="space-y-2 text-sm">
              {["Forside", "Tjenester", "Om oss", "Kontakt"].map((label) => (
                <li key={label}>
                  <a
                    href={`#${label === "Forside" ? "forside" : label === "Tjenester" ? "tjenester" : label === "Om oss" ? "omoss" : "kontakt"}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> fro-fre@outlook.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 926 04 072
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 6260 Skodje
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Fremi v/ Frode Fremmerlid. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
