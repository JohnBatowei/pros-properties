import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  { q: 'How does the investment work?', a: 'You join an investment group, make regular contributions, and we pool funds to acquire prime real estate. Properties are held for appreciation (typically 5 years) and sold for profit, which is distributed proportionally to all investors.' },
  { q: 'Is my money safe?', a: 'Absolutely. All investments are backed by physical real estate assets with proper legal documentation including C of O, survey plans, and registered agreements. Our legal counsel oversees title verification and investor protection.' },
  { q: 'When do I get returns?', a: 'Returns are typically realized after a 5-year holding period when properties are sold at appreciated values. The investment group has a 10-year lifespan, with profits distributed proportionally at exit.' },
  { q: 'Can I withdraw my investment?', a: 'Our non-refund policy reflects the long-term, disciplined nature of real estate investing. Contributions are committed to property acquisition and cannot be withdrawn on demand. This ensures the integrity of the group\'s investment pool and protects all members.' },
  { q: 'What is the yearly management fee?', a: 'There is an annual management fee of ₦10,000 per investor. This covers property maintenance, security, administrative costs, documentation processing, and bi-annual reporting to all investors.' },
  { q: 'How do I book an inspection?', a: 'You can book a free site inspection through our website form, via WhatsApp, or by calling our office. Inspections are available Monday to Saturday, 9 AM – 5 PM.' },
  { q: 'What documents do I receive?', a: 'Investors receive an investment agreement, receipt of payment, land allocation letter, survey plan, and eventually a Certificate of Occupancy (C of O) or equivalent title document.' },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding bg-surface" ref={ref}>
      <div className="container-max max-w-3xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown size={20} className={`text-gold shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                <p className="px-6 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
