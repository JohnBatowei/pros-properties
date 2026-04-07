import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const timelineSteps = [
  { year: 'Phase 1', title: 'Structured Contribution', desc: 'Members contribute regularly to build the collective investment pool with discipline and consistency.' },
  { year: 'Phase 2', title: 'Annual Property Acquisition', desc: 'Strategic acquisition of prime land and properties in high-growth corridors across Abuja.' },
  { year: 'Phase 3', title: '5-Year Holding Period', desc: 'Properties appreciate as infrastructure develops, maximizing long-term value for investors.' },
  { year: 'Phase 4', title: '10-Year Group Lifespan', desc: 'The investment group operates over a full decade for compounding wealth creation and reinvestment.' },
  { year: 'Phase 5', title: 'Proportional Profit Sharing', desc: 'Properties sold at peak value with profits distributed proportionally to each investor\'s contribution.' },
];

const InvestmentModelSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">The 10-Year Vision</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
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
        </div>
      </div>
    </section>
  );
};

export default InvestmentModelSection;
