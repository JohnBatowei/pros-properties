import { Landmark, BarChart3, BriefcaseBusiness, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  { icon: Landmark, title: 'Land Banking', desc: 'Strategic acquisition of undeveloped land in high-growth corridors for future appreciation.' },
  { icon: BarChart3, title: 'Property Investment', desc: 'Collective investment in premium real estate with professionally managed portfolios.' },
  { icon: BriefcaseBusiness, title: 'Real Estate Advisory', desc: 'Expert guidance on property investment strategies, market trends, and portfolio optimization.' },
  { icon: Building2, title: 'Asset Management', desc: 'End-to-end management of real estate assets from acquisition to profitable disposal.' },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Explore All Our Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-3">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
