import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles } from "lucide-react";

const partners = [
  {
    name: "Brains & Hammers",
    logo: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
  {
    name: "Cappa & D'Alberto",
    logo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Julius Berger",
    logo: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },
  {
    name: "UPDC",
    logo: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
  },
  {
    name: "Revolution Plus",
    logo: "https://images.unsplash.com/photo-1599423300746-b62533397364",
  },
  {
    name: "Landwey",
    logo: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
  },
];

const PartnersSlider = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="partners"
      className="py-16 bg-surface border-y border-border/50 overflow-hidden"
      ref={ref}
    >
      <div
        className={`container-max px-4 sm:px-6 lg:px-8 mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <Sparkles size={14} className="text-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Trusted Partners
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Partnered With Verified Real Estate Companies
          </h2>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className="relative group">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        {/* Slider */}
        <div className="flex animate-[scrollLeft_35s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group/card flex-shrink-0 mx-5"
            >
              <div
                className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-border/50 bg-background/70 backdrop-blur-xl 
  transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:border-gold/40 min-w-[260px]"
              >
                {/* Logo */}
                <div className="w-14 h-14 rounded-full overflow-hidden border border-border/40 bg-white flex items-center justify-center">
                  <img
                    src={`${partner.logo}`}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p className="text-foreground text-sm font-semibold tracking-wide leading-tight">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
