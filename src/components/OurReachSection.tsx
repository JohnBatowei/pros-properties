import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe, MapPin, Users, Sparkles } from 'lucide-react';

const stats = [
  { icon: MapPin, value: '10+', label: 'Cities in Nigeria', desc: 'Active presence across major cities' },
  { icon: Users, value: '500+', label: 'Active Investors', desc: 'Growing community nationwide' },
  { icon: Globe, value: 'Global', label: 'Expansion Plans', desc: 'Extending beyond Nigeria' },
];

const OurReachSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Sparkles size={16} className="text-gold" />
            <span className="text-gold text-sm font-medium">Our Reach</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            From Nigeria and <span className="text-gradient-gold">Beyond</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Building a global community of property investors. partnering with trusted companies nationwide and expanding internationally.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon size={28} className="text-gold" />
                </div>
                <div className="font-display text-3xl font-bold text-gold mb-1">{s.value}</div>
                <h3 className="font-display text-lg font-bold text-foreground">{s.label}</h3>
                <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurReachSection;
