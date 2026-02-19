import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, MapPin, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Du må godta vilkårene", variant: "destructive" });
      return;
    }
    toast({ title: "Melding sendt!", description: "Vi tar kontakt så snart som mulig." });
    setForm({ name: "", email: "", phone: "", message: "" });
    setConsent(false);
  };

  return (
    <section id="kontakt" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Kontakt oss
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Map placeholder */}
          <div className="bg-muted rounded-lg overflow-hidden min-h-[350px] flex items-center justify-center">
            <iframe
              title="Skodje kart"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.7%2C62.45%2C6.85%2C62.52&layer=mapnik"
              className="w-full h-full min-h-[350px] border-0"
              loading="lazy"
            />
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Ditt navn*</label>
              <Input
                required
                placeholder="Ditt navn"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Din e-post*</label>
              <Input
                required
                type="email"
                placeholder="Din e-post"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Ditt telefonnummer</label>
              <Input
                placeholder="Ditt telefonnummer"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Din henvendelse...*</label>
              <Textarea
                required
                placeholder="Din henvendelse..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="flex items-start gap-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(v) => setConsent(v === true)}
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground leading-snug cursor-pointer">
                Jeg godtar at informasjonen brukes til kontakt *
              </label>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading tracking-wide"
            >
              Send melding
            </Button>
          </form>
        </div>

        {/* Contact details */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground text-sm">
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" /> 926 04 072
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> 6260 Skodje
          </span>
          <span className="flex items-center gap-2">
            <Building className="h-4 w-4 text-accent" /> Orgnr 912 166 805
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
