import { ShieldCheck, Clock, Handshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Let professionals do the job",
    description:
      "To ensure that the job is done right, and to avoid surprises it is always best to let professionals do the job.",
  },
  {
    icon: Clock,
    title: "At the agreed time and price",
    description:
      "We keep what we promise and keep you as a customer up to date at all times.",
  },
  {
    icon: Handshake,
    title: "Flexible player",
    description:
      "We map the customer's needs and then adapt a solution that both partners are satisfied with.",
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
