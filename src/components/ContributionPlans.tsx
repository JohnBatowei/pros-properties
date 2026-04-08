import { CheckCircle, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppLink } from '@/lib/emailjs';

const plans = [
  { price: '₦25,000', highlight: false },
  { price: '₦50,000', highlight: true },
  { price: '₦75,000', highlight: false },
  { price: '₦100,000', highlight: false },
];

const sharedFeatures = [
  'Group of 6 investors',
  '12-month contribution cycle',
  'Verified property acquisition',
  'Full documentation & C of O',
  'Transparent fund tracking',
  'Ownership or profit distribution',
];

const ContributionPlans = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="plans" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <div className="container-max">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">Contribution Plans</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Start Building Wealth from <span className="text-gradient-gold">₦25,000/month</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Choose a contribution plan that fits your budget. Join a group of 6 investors, contribute for 12 months, and acquire property collectively.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.price}
                className={`relative rounded-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.highlight && (
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-gold via-gold-light to-gold rounded-3xl" />
                )}
                <div className={`relative glass-card p-6 rounded-3xl h-full flex flex-col ${plan.highlight ? 'border-0' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gold-gradient text-foreground text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6 pt-2">
                    <span className="font-display text-3xl font-bold text-gold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm block mt-1">per month</span>
                  </div>

                  <div className="space-y-3 mb-4 flex-1">
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <CheckCircle size={14} className="text-gold shrink-0" />
                      <span>6 people per group</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <CheckCircle size={14} className="text-gold shrink-0" />
                      <span>12-month cycle</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <CheckCircle size={14} className="text-gold shrink-0" />
                      <span>Property acquisition</span>
                    </div>
                  </div>

                  <Link
                    to="/contribution"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all hover:scale-105 text-sm ${
                      plan.highlight
                        ? 'gold-gradient text-foreground shadow-lg'
                        : 'border-2 border-gold/30 text-gold hover:bg-gold/10'
                    }`}
                  >
                    Start Investing <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Shared features */}
          <div className={`mt-14 max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-display text-lg font-bold text-foreground text-center mb-6">All Plans Include</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sharedFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`flex flex-wrap items-center justify-center gap-4 mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link to="/contribution" className="inline-flex items-center gap-2 text-gold font-semibold hover:underline">
              View All Contribution Plans <ArrowRight size={18} />
            </Link>
            <a
              href={getWhatsAppLink('Hello, I\'m interested in starting a property investment plan')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-primary-foreground font-semibold hover:scale-105 transition-transform"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionPlans;
