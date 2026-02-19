import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="omoss" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Welcome to Fremi!
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          Fremi performs excavation, and contractor services in the private and food market in Møre og Romsdal and its environs. It's just contacting us about work areas, we're very flexible, and we tailor solutions that are tailored to our customers. All work is done professionally and with very high standards. Materials used are of high quality from well-known product providers. Our strength is trust and focus on best solutions as well as always top quality.
        </p>
        <p className="text-foreground font-medium text-lg mb-8">
          Contact us for a nice and non-binding chat!
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
