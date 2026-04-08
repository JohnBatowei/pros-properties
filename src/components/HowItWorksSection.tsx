<<<<<<< HEAD
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
=======
import { Users, Wallet, Home, TrendingUp, BadgeDollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { icon: Users, title: 'Join Investment Group', desc: 'Register and join our collective investment community of like-minded investors.' },
  { icon: Wallet, title: 'Contribute Consistently', desc: 'Make regular contributions towards your property investment goals.' },
  { icon: Home, title: 'Property Acquisition', desc: 'We acquire prime real estate assets on behalf of the investment group.' },
  { icon: TrendingUp, title: 'Value Appreciation', desc: 'Properties appreciate over the holding period, growing your investment.' },
  { icon: BadgeDollarSign, title: 'Profit Distribution', desc: 'Receive your returns when properties are sold at premium prices.' },
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
<<<<<<< HEAD
    <section id="how-it-works" className="section-padding bg-background" ref={ref}>
=======
    <section id="how-it-works" className="section-padding bg-surface" ref={ref}>
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">The Process</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
<<<<<<< HEAD
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A simple, transparent process to participate in structured property investment and build lasting wealth.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

=======
            How We Help You Succeed
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A simple, transparent process to become a successful land and home owner.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
<<<<<<< HEAD
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
=======
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
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
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
