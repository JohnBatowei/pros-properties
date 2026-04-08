import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Target, TrendingUp, Shield, Lightbulb, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Financial Discipline',
    desc: 'Our structured contribution system builds consistent saving habits that last a lifetime.',
  },
  {
    icon: TrendingUp,
    title: 'Structured Investment',
    desc: 'A clear, transparent framework that removes guesswork from property investment.',
  },
  {
    icon: Shield,
    title: 'Access to Opportunities',
    desc: 'Gain access to verified, premium property deals normally reserved for high-net-worth individuals.',
  },
  {
    icon: Lightbulb,
    title: 'Wealth Growth',
    desc: 'Watch your investment grow as properties appreciate over time, building generational wealth.',
  },
];

const HowWeHelpSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Sparkles size={16} className="text-gold" />
            <span className="text-gold text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            How We Help You <span className="text-gradient-gold">Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We empower everyday earners to build wealth through structured property investment in just one step at a time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`glass-card p-8 text-center group hover:-translate-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
