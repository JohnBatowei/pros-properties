import { Users, Wallet, Home, TrendingUp, BadgeDollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { icon: Users, title: 'Join Investment Group', desc: 'Register and join our collective investment community of like-minded investors.' },
  { icon: Wallet, title: 'Contribute Consistently', desc: 'Make regular contributions towards your property investment goals.' },
  { icon: Home, title: 'Property Acquisition', desc: 'We acquire prime real estate assets on behalf of the investment group.' },
  { icon: TrendingUp, title: 'Value Appreciation', desc: 'Properties appreciate over the holding period, growing your investment.' },
  { icon: BadgeDollarSign, title: 'Profit Distribution', desc: 'Receive your returns when properties are sold at premium prices.' },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding bg-surface" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">The Process</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            How We Help You Succeed
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A simple, transparent process to become a successful land and home owner.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`relative text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-background border-2 border-gold/30 flex items-center justify-center mb-5 shadow-lg">
                    <Icon size={32} className="text-gold" />
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold text-foreground text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{step.desc}</p>
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
