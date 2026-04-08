import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Target, Eye, Heart, Shield, Users, TrendingUp, Award, Building } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'Transparent dealings with every investor, every time.' },
  { icon: Users, title: 'Community', desc: 'Building wealth together through collective investment.' },
  { icon: TrendingUp, title: 'Growth', desc: 'Consistent returns and long-term value creation.' },
  { icon: Award, title: 'Excellence', desc: 'Premium estates with world-class infrastructure.' },
];

const milestones = [
  { year: '2018', title: 'Founded', desc: 'Pros Properties Limited was established in Abuja.' },
  { year: '2019', title: 'First Estate', desc: 'Launched Kuje Premium Gardens Phase 1.' },
  { year: '2021', title: '100+ Investors', desc: 'Crossed 100 active investor milestone.' },
  { year: '2023', title: 'Foundation Launch', desc: 'Pros-Property Foundation established for community impact.' },
  { year: '2024', title: 'Expansion', desc: 'Multiple new estate phases and 200% ROI delivered.' },
];

const AboutPage = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

  return (
    <PageTransition>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              About Pros-Properties
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              Nigeria's premier collective real estate investment platform — building wealth, transforming communities, and delivering consistent returns since 2018.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-surface" ref={missionRef}>
          <div className="container-max">
            <div className={`grid md:grid-cols-2 gap-10 transition-all duration-700 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="glass-card p-10">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-6">
                  <Target className="text-foreground" size={28} />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize real estate investment in Nigeria by making premium land and property accessible to everyday Nigerians through a transparent, collective investment model that guarantees returns and builds generational wealth.
                </p>
              </div>
              <div className="glass-card p-10">
                <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-6">
                  <Eye className="text-foreground" size={28} />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's most trusted collective property investment brand — empowering 10,000+ families to own land, build homes, and secure financial independence through smart real estate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding" ref={valuesRef}>
          <div className="container-max">
            <div className={`text-center mb-14 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">Our Core Values</h2>
            </div>
            <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {values.map((v, i) => (
                <div key={i} className="glass-card p-8 text-center group hover:border-gold/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <v.icon className="text-gold" size={28} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-surface" ref={timelineRef}>
          <div className="container-max">
            <div className={`text-center mb-14 transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Journey</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">Milestones</h2>
            </div>
            <div className={`max-w-3xl mx-auto transition-all duration-700 ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-foreground font-bold text-xs shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-lg font-bold text-foreground">{m.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding hero-gradient text-center">
          <div className="container-max px-4">
            <Building className="mx-auto text-gold mb-6" size={48} />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
              Ready to Invest With Us?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mt-4 mb-8">
              Join hundreds of Nigerians building wealth through smart property investment.
            </p>
            <Heart className="inline text-gold mr-2" size={18} />
            <a href="/#contact" className="btn-gold text-lg !px-10 !py-4">Get Started Today</a>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default AboutPage;
