import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroBanner1 from "@/assets/hero_banner1.jpg";
import heroBanner2 from "@/assets/hero_banner2.jpg";

const slides = [
  {
    title: "Pålitelig og sikker maskinentreprenør!",
    subtitle:
      "VI NYTER STOR TILLIT BLANT VÅRE KUNDER OG KAN VISE TIL GODE REFERANSER FRA TIDLIGERE ARBEID",
    image: heroBanner1,
  },
  {
    title: "VI SKAL VÆRE DITT NATURLIGE VALG",
    subtitle:
      "FOR Å DEKKE ETTERSPØRSELEN ETTER EN MASKINENTREPRENØR",
    image: heroBanner2,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer.current);
  }, []);

  return (
    <section id="forside" className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg max-w-2xl mb-8 tracking-wide opacity-90 uppercase">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading text-lg tracking-wide px-8"
                asChild
              >
                <a href="#kontakt">Kontakt oss</a>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
