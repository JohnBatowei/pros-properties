import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles } from "lucide-react";
import julius from '@/assets/julius.jpg';
import log1 from '@/assets/log2.jpg';
import log7 from '@/assets/log7.jpg';
import log3 from '@/assets/log3.jpg';
import log4 from '@/assets/log4.jpg';
import log5 from '@/assets/log5.jpg';
import log6 from '@/assets/log6.jpg';
import log8 from '@/assets/log8.jpg';
import beacon from '@/assets/becon_realty_logo-removebg-preview.png';

const partners = [

  {
    name: "Bamcom real estate",
    logo: log7,
  },
  {
    name: "Brains & Hammers",
    logo: log1,
  },
    {
    name: "Mshel",
    logo: log3,
  },
  {
    name: "Beacon Corporate Realty",
    logo: beacon,
  },
  
  {
    name: "PROMISELAND",
    logo: log8,
  },
  {
    name: "Bespoke",
    logo: log4,
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
