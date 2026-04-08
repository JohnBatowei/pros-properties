import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles } from 'lucide-react';

const partners = [
  'Brains & Hammers', 'Cappa & D\'Alberto', 'Julius Berger', 'UPDC',
  'Revolution Plus', 'Landwey', 'Adron Homes', 'Mixta Africa',
  'Purple Group', 'Zylus Group', 'Gracias Realty', 'Veritasi Homes',
];

const PartnersSlider = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="partners" className="py-16 bg-surface border-y border-border/50 overflow-hidden" ref={ref}>
      <div className={`container-max px-4 sm:px-6 lg:px-8 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <Sparkles size={14} className="text-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Trusted Partners</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Partnered With Verified Real Estate Companies
          </h2>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="flex animate-[scrollLeft_30s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-4 px-8 py-4 rounded-xl bg-background border border-border/50 flex items-center justify-center min-w-[180px] hover:border-gold/30 hover:shadow-md transition-all"
            >
              <span className="font-display font-bold text-foreground/70 text-sm whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
