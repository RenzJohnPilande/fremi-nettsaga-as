import { Card, CardContent } from "@/components/ui/card";
import gravingImg from "@/assets/graving.jpg";
import dreneringImg from "@/assets/drenering.jpg";
import tomteutgravingImg from "@/assets/tomteutgraving.jpg";
import massetransportImg from "@/assets/massetransport.jpg";

const services = [
  {
    image: gravingImg,
    title: "Graving",
    description:
      "Vi utfører alt innen grunnarbeid og graving. Trenger du hjelp ved planering for grunnmur er vi de rette til saken. Vi graver også grøfter for legging av vann- og avløpsrør. Velg oss, og du får en solid aktør innen grunn- og betong!",
  },
  {
    image: dreneringImg,
    title: "Drenering",
    description:
      "God drenering rundt huset hindrer fukt- og kondensskader i grunnmuren. Om du kun isolerer innvendig er faren større for at det oppstår fukt. Vi tar jobben for deg!",
  },
  {
    image: tomteutgravingImg,
    title: "Tomteutgraving",
    description:
      "Vi graver tomtene for deg! Et bra resultat krever godt grunnarbeid. Vi  utfører alltid grunnarbeid i henhold til Norsk Standard og vi har lang erfaring innen faget!",
  },
  {
    image: massetransportImg,
    title: "Massetransport",
    description:
      "Vi sørger for at overskuddsmasse etter graving blir fraktet vekk. Vi skaffer også jord, stein og singel ved behov. Ta kontakt for priser.",
  },
];

const ServicesSection = () => {
  return (
    <section id="tjenester" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Graving, drenering og transport av masser i Møre og Romsdal!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-none shadow-lg hover:shadow-xl transition-shadow bg-card overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
