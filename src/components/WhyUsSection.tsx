import { ShieldCheck, Clock, Handshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "La fagfolk gjøre jobben",
    description:
      "For å sikre at jobben gjøres riktig, og for å unngå overraskelser er det alltid best å la fagfolk gjøre jobben",
  },
  {
    icon: Clock,
    title: "Til avtalt tid og pris",
    description:
      "Vi holder det vi lover, og holder deg som kunde oppdatert til enhver tid.",
  },
  {
    icon: Handshake,
    title: "Fleksibel aktør",
    description:
      "Vi kartlegger kundens behov og tilpasser deretter en løsning som begge partner er fornøyd med.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
