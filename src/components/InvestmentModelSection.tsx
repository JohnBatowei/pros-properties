import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Wallet, Home, TrendingUp, BadgeDollarSign } from 'lucide-react';

const phases = [
  {
    icon: Wallet,
    phase: 'Phase 1',
    title: 'Monthly Contributions',
    desc: 'Members contribute small, agreed monthly amounts into a collective investment pool. Financial discipline is the foundation.',
    color: 'from-gold/20 to-gold/5',
  },
  {
    icon: Home,
    phase: 'Phase 2',
    title: 'Property Purchase',
    desc: 'Pooled funds are used to acquire verified properties through our partnered real estate companies. Every property is legally documented.',
    color: 'from-green-deep/20 to-green-deep/5',
  },
  {
    icon: TrendingUp,
    phase: 'Phase 3',
    title: 'Holding & Growth (5 Years)',
    desc: 'Properties are held as infrastructure develops around them, naturally appreciating in value over the holding period.',
    color: 'from-gold/20 to-gold/5',
  },
  {
    icon: BadgeDollarSign,
    phase: 'Phase 4',
    title: 'Long-Term Returns',
    desc: 'Properties are sold at premium prices or ownership is rotated among members. Profits are distributed proportionally.',
    color: 'from-green-deep/20 to-green-deep/5',
  },
];

const InvestmentModelSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">The 10-Year Vision</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Your Wealth Building Timeline
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A structured journey from contribution to returns, built on patience, discipline, and smart real estate.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/50 via-gold/20 to-transparent lg:-translate-x-px" />

          <div className="space-y-12">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={phase.title}
                  className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-foreground text-sm font-bold shadow-lg lg:-translate-x-1/2 z-10">
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className={`ml-16 lg:ml-0 lg:w-[45%] ${isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                    <div className={`glass-card p-6 rounded-2xl bg-gradient-to-br ${phase.color} border border-border/50`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                          <Icon size={20} className="text-gold" />
                        </div>
                        <span className="text-gold font-semibold text-sm">{phase.phase}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">{phase.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentModelSection;
