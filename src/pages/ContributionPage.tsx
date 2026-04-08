import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Shield, TrendingUp, Clock, Users, CheckCircle, Home, MapPin, Banknote } from 'lucide-react';

const investmentPlans = [
  {
    title: 'Starter Plan',
    price: '₦25,000',
    period: '/month',
    description: 'Begin your real estate journey with affordable monthly contributions toward property ownership.',
    features: [
      'Monthly contribution of ₦25,000',
      'Access to select estate locations',
      'Flexible payment timeline',
      'Full documentation & C of O',
      'Quarterly progress reports',
    ],
    highlight: false,
  },
  {
    title: 'Premium Plan',
    price: '₦50,000',
    period: '/month',
    description: 'Accelerate your property acquisition with higher contributions and premium plot selections.',
    features: [
      'Monthly contribution of ₦50,000',
      'Priority plot selection',
      'Faster ownership timeline',
      'Full documentation & C of O',
      'Dedicated account manager',
    ],
    highlight: true,
  },
];

const securityFeatures = [
  { icon: Shield, title: 'Legally Protected', desc: 'All investments are backed by registered agreements, survey plans, and Certificates of Occupancy.' },
  { icon: MapPin, title: 'Prime Locations', desc: 'Properties are strategically located in high-growth corridors across Abuja for maximum appreciation.' },
  { icon: TrendingUp, title: 'Value Appreciation', desc: 'Real estate in our target areas appreciates 20–40% annually as infrastructure develops.' },
  { icon: Users, title: 'Community Driven', desc: 'Join a network of disciplined investors building wealth together through collective property ownership.' },
];

const timelinePhases = [
  { year: 'Step 1', title: 'Choose Your Plan', desc: 'Select a contribution plan that fits your budget, starting from as low as ₦25,000/month.' },
  { year: 'Step 2', title: 'Make Consistent Payments', desc: 'Contribute monthly toward your chosen property. Every payment brings you closer to ownership.' },
  { year: 'Step 3', title: 'Property Allocation', desc: 'Once your payments are complete, your plot is officially allocated with full legal documentation.' },
  { year: 'Step 4', title: 'Build or Hold', desc: 'Develop your property or hold it for appreciation. Either way, you own a tangible, valuable asset.' },
  { year: 'Step 5', title: 'Earn Returns', desc: 'Sell at appreciated value or earn rental income. Your investment grows with time and infrastructure.' },
];

const ContributionPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        {/* Hero */}
        <section className="relative pt-32 pb-20 hero-gradient">
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Invest in Real Estate</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Own Property for as Low as <span className="text-gradient-gold">₦25,000/month</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
              Secure prime real estate in Abuja through flexible monthly contributions. 
              Start small, build big — your path to property ownership starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Banknote size={20} className="text-gold" />
                <span className="text-sm font-medium">From ₦25,000/month</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Home size={20} className="text-gold" />
                <span className="text-sm font-medium">Full Property Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock size={20} className="text-gold" />
                <span className="text-sm font-medium">Flexible Timeline</span>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Plans */}
        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Investment Plans</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
                Choose Your Path to Ownership
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                Flexible plans designed for every budget. Secure a property today with consistent monthly contributions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {investmentPlans.map((plan, i) => (
                <div
                  key={plan.title}
                  className={`relative glass-card p-8 rounded-2xl transition-all duration-700 ${
                    plan.highlight ? 'border-2 border-gold shadow-[0_0_40px_rgba(212,175,55,0.15)]' : ''
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.title}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-gold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">{plan.description}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/2348000000000?text=I'm%20interested%20in%20the%20investment%20plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 block w-full text-center py-3 rounded-xl font-semibold transition-all text-sm ${
                      plan.highlight
                        ? 'bg-gold text-foreground hover:brightness-110'
                        : 'border border-gold/50 text-gold hover:bg-gold/10'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Invest */}
        <section className="section-padding bg-surface">
          <div className="container-max">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Why Invest With Us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
                Your Investment is Secure
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {securityFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glass-card p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">How It Works</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
                From Contribution to Ownership
              </h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              {timelinePhases.map((phase, i) => (
                <div key={phase.year} className="relative pl-20 pb-10 last:pb-0">
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-foreground text-sm font-bold shadow-lg">
                    {i + 1}
                  </div>
                  <div className="glass-card p-6">
                    <span className="text-gold font-semibold text-sm">{phase.year}</span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-1">{phase.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContributionPage;
