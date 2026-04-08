import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { Heart, Globe, Users, Sprout, Shield, HandHeart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppLink } from '@/lib/emailjs';

const pillars = [
  { icon: Heart, title: 'Shared Prosperity', desc: 'Every member benefits proportionally from collective investments, ensuring wealth is distributed fairly across the community.' },
  { icon: Globe, title: 'Sustainable Wealth', desc: 'We focus on long-term, disciplined real estate investment that builds generational wealth and not quick schemes.' },
  { icon: Users, title: 'Community First', desc: 'Our foundation is built on collective action. Everyday earners pooling resources to access opportunities once reserved for the wealthy.' },
  { icon: Sprout, title: 'Growth Through Discipline', desc: 'Consistent contributions, patient holding periods, and strategic acquisitions compound into significant returns over time.' },
  { icon: Shield, title: 'Integrity & Transparency', desc: 'Bi-annual reporting, legal compliance, and full documentation ensure every investor has complete visibility.' },
  { icon: HandHeart, title: 'Empowerment', desc: 'We bridge the gap between aspiration and achievement, enabling income earners to become property owners and wealth builders.' },
];

const FoundationPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        {/* Hero */}
        <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Foundation</span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4 leading-tight">
                Pros-Property <span className="text-gradient-gold">Foundation</span>
              </h1>
              <p className="text-primary-foreground/70 text-lg sm:text-xl mt-6 leading-relaxed max-w-2xl mx-auto">
                Building a movement of shared prosperity and sustainable wealth through disciplined, 
                collective real estate investment for everyday income earners across Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Mission</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
                Bridging the Wealth Gap Through Real Estate
              </h2>
              <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                Pros-Properties Limited was founded on the belief that property ownership and wealth creation 
                should not be exclusive to the privileged few. Through our structured investment model, we empower 
                Africans to build extraordinary wealth at one disciplined contribution at a time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`glass-card p-8 text-center transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                      <Icon size={28} className="text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{pillar.title}</h3>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-surface">
          <div className="container-max text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Join the Movement?
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
              Start your journey toward sustainable wealth creation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href={getWhatsAppLink("Hello, I'm interested in starting a property investment plan")} className="btn-gold">
                Chat with a Representative
              </a>
              <a href="/#estates" className="btn-outline-gold">
                Explore Estates
              </a>
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FoundationPage;
