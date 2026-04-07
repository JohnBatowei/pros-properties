import { Shield, Scale, Users, Award, FileCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const trustItems = [
  { icon: Shield, title: 'Full Transparency', desc: 'Every transaction is documented and accessible to all investors.' },
  { icon: Scale, title: 'Legal Compliance', desc: 'All properties come with proper documentation — C of O, survey plans, and receipts.' },
  { icon: Users, title: 'Professional Management', desc: 'Experienced team of real estate professionals managing your investments.' },
  { icon: Award, title: 'Proven Track Record', desc: 'Multiple successful projects delivered with satisfied investors.' },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Why Trust Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Built on Trust & Transparency
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Accountability Clause */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card p-8 flex items-start gap-5 max-w-3xl mx-auto border-l-4 border-gold">
            <FileCheck size={32} className="text-gold shrink-0 mt-1" />
            <div>
              <h4 className="font-display text-lg font-bold text-foreground">Accountability Clause</h4>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Pros Properties Limited is committed to bi-annual reporting to all investors. 
                Our legal counsel oversees title verification and investor protection, ensuring 
                every investment is backed by proper documentation and full regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
