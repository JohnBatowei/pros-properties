import { useScrollAnimation } from '@/hooks/useScrollAnimation';
<<<<<<< HEAD
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
=======

const timelineSteps = [
  { year: 'Phase 1', title: 'Structured Contribution', desc: 'Members contribute regularly to build the collective investment pool with discipline and consistency.' },
  { year: 'Phase 2', title: 'Annual Property Acquisition', desc: 'Strategic acquisition of prime land and properties in high-growth corridors across Abuja.' },
  { year: 'Phase 3', title: '5-Year Holding Period', desc: 'Properties appreciate as infrastructure develops, maximizing long-term value for investors.' },
  { year: 'Phase 4', title: '10-Year Group Lifespan', desc: 'The investment group operates over a full decade for compounding wealth creation and reinvestment.' },
  { year: 'Phase 5', title: 'Proportional Profit Sharing', desc: 'Properties sold at peak value with profits distributed proportionally to each investor\'s contribution.' },
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
];

const InvestmentModelSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
<<<<<<< HEAD
    <section className="section-padding bg-background" ref={ref}>
=======
    <section className="section-padding" ref={ref}>
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">The 10-Year Vision</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
<<<<<<< HEAD
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
=======
            Your Wealth-Building Timeline
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A structured journey from contribution to profit — built on discipline, patience, and smart real estate.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          {timelineSteps.map((step, i) => (
            <div
              key={step.title}
              className={`relative pl-20 pb-12 last:pb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute left-4 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-foreground text-sm font-bold shadow-lg">
                {i + 1}
              </div>
              <div className="glass-card p-6">
                <span className="text-gold font-semibold text-sm">{step.year}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
        </div>
      </div>
    </section>
  );
};

export default InvestmentModelSection;
