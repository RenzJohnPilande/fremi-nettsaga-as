import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="omoss" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Velkommen til Fremi!
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          Fremi utfører grave-, og entreprenørtjenester innen privat- og næringsmarkedet i Møre og Romsdal og omegn. Det er bare å ta kontakt med oss angående arbeidsområder, vi er svært fleksible, og vi skreddersyr løsninger som er tilpasset våre kunder. Alt arbeid blir utført profesjonelt og med svært høy standard. Materialer som anvendes er av høy kvalitet fra kjente vareleverandører. Vår styrke er er tillit og fokus på beste løsninger samt alltid topp kvalitet.
        </p>
        <p className="text-foreground font-medium text-lg mb-8">
          Kontakt oss for en hyggelig og uforpliktende prat!
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading tracking-wide px-8"
          asChild
        >
          <a href="#kontakt">Ta kontakt</a>
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
