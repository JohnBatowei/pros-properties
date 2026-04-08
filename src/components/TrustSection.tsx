import { Shield, Scale, Users, Award, FileCheck, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const trustItems = [
  { icon: ShieldCheck, title: 'Verified Properties', desc: 'Every property is verified and acquired through trusted partner companies.' },
  { icon: Scale, title: 'Legal Compliance', desc: 'Full documentation with C of O, survey plans, and receipts for every transaction.' },
  { icon: Users, title: 'Partnered Companies', desc: 'We work exclusively with registered, reputable real estate developers.' },
  { icon: Award, title: 'Structured Model', desc: 'A transparent investment model with clear timelines and accountability.' },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Trust & Transparency</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Built on Trust & Transparency
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Your investment is protected by legal compliance, verified partnerships, and full transparency at every step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`glass-card p-8 text-center group hover:-translate-y-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card p-8 flex items-start gap-5 max-w-3xl mx-auto border-l-4 border-gold">
            <FileCheck size={32} className="text-gold shrink-0 mt-1" />
            <div>
              <h4 className="font-display text-lg font-bold text-foreground">Accountability Clause</h4>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Pros-Properties Limited is committed to bi-annual reporting to all investors. 
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
