import { Users, Wallet, Layers, Home, Trophy } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    icon: Users,
    title: 'Join a Group',
    desc: 'Join a structured investment group of 6 people committed to building wealth together.',
    detail: '6 members per group',
  },
  {
    icon: Wallet,
    title: 'Contribute Monthly',
    desc: 'Make consistent monthly contributions towards your collective property investment goal.',
    detail: 'From ₦25,000/month',
  },
  {
    icon: Layers,
    title: 'Funds Are Pooled',
    desc: 'All contributions are pooled together to create substantial purchasing power for the group.',
    detail: 'Transparent tracking',
  },
  {
    icon: Home,
    title: 'Property Acquired',
    desc: 'Verified properties are acquired through our partnered real estate companies on your behalf.',
    detail: 'Verified properties only',
  },
  {
    icon: Trophy,
    title: 'Ownership or Profit',
    desc: 'Receive property ownership or profit distribution when assets appreciate and are sold.',
    detail: 'Guaranteed returns',
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding bg-background" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">The Process</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A simple, transparent process to participate in structured property investment and build lasting wealth.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`relative text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="relative z-10 mx-auto w-[72px] h-[72px] rounded-2xl bg-surface border-2 border-gold/20 flex items-center justify-center mb-5 shadow-lg group-hover:border-gold/50 group-hover:shadow-gold/10 transition-all">
                    <Icon size={28} className="text-gold" />
                    <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full gold-gradient text-foreground text-xs font-bold flex items-center justify-center shadow-md">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{step.desc}</p>
                  <span className="inline-block mt-3 text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full">{step.detail}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
