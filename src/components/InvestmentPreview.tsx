import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    title: 'Starter Plan',
    price: '₦25,000',
    period: '/month',
    tagline: 'Perfect for beginners',
    features: ['Select estate locations', 'Flexible payment timeline', 'Full documentation & C of O', 'Monthly progress updates'],
    highlight: false,
  },
  {
    title: 'Premium Plan',
    price: '₦50,000',
    period: '/month',
    tagline: 'Best value for investors',
    features: ['Priority plot selection', 'Faster ownership timeline', 'Dedicated account manager', 'VIP inspection tours', 'Early access to new estates'],
    highlight: true,
  },
];

const InvestmentPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <div className="container-max">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">Investment Plans</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Own Property from <span className="text-gradient-gold">₦25,000/month</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Secure prime real estate in Abuja through flexible monthly contributions. Start small, build generational wealth.
            </p>
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.title}
                className={`relative rounded-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {plan.highlight && (
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-gold via-gold-light to-gold rounded-3xl" />
                )}
                <div className={`relative glass-card p-8 rounded-3xl h-full ${plan.highlight ? 'border-0' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gold-gradient text-foreground text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold text-foreground">{plan.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{plan.tagline}</p>
                  </div>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="font-display text-4xl font-bold text-gold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                        <CheckCircle size={16} className="text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contribution"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all hover:scale-105 text-sm ${
                      plan.highlight
                        ? 'gold-gradient text-foreground shadow-lg'
                        : 'border-2 border-gold/30 text-gold hover:bg-gold/10'
                    }`}
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/contribution" className="inline-flex items-center gap-2 text-gold font-semibold hover:underline">
              View All Investment Plans <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPreview;
