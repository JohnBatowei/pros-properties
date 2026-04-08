import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Linkedin, Mail, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ogbaje Glory Onetokole',
    role: 'Chief Executive Officer',
    bio: 'A visionary leader with deep expertise in real estate development and investment strategy. Glory founded Pros-Properties Limited with the mission of making property ownership accessible to everyday Nigerians. Under his leadership, the company has delivered multiple successful estates and created wealth for hundreds of investors across Abuja.',
    specialties: ['Strategic Planning', 'Estate Development', 'Investor Relations'],
  },
  {
    name: 'Olawale Ogunsola Oluwakayode',
    role: 'Chief Financial Officer',
    bio: 'An experienced financial strategist responsible for the transparent management of all investment funds. Olawale ensures rigorous financial oversight, bi-annual reporting to investors, and full regulatory compliance. His disciplined approach to fund management has been instrumental in maintaining investor trust and delivering consistent returns.',
    specialties: ['Financial Management', 'Regulatory Compliance', 'Fund Allocation'],
  },
  {
    name: 'Blessing Enemona Ogbaje',
    role: 'Chief Investment Officer',
    bio: 'A seasoned investment professional who drives portfolio strategy and property acquisition decisions. Blessing identifies high-growth corridors across Abuja, conducts thorough market analysis, and ensures every acquisition maximizes long-term value for investors. Her strategic insight has been key to the company\'s impressive track record.',
    specialties: ['Portfolio Strategy', 'Market Analysis', 'Property Acquisition'],
  },
];

const TeamPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <section className="relative pt-32 pb-20 hero-gradient">
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Leadership</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Meet Our <span className="text-gradient-gold">Team</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
              The experienced professionals behind your investment success are committed to transparency, 
              integrity, and long-term wealth creation.
            </p>
          </div>
        </section>

        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className="space-y-12">
              {teamMembers.map((member, i) => (
                <div
                  key={member.name}
                  className={`glass-card p-8 sm:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="shrink-0 w-24 h-24 rounded-2xl bg-gold/10 flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-gold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{member.name}</h2>
                      <span className="text-gold font-semibold text-lg">{member.role}</span>
                      <p className="text-muted-foreground mt-4 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {member.specialties.map((s) => (
                          <span key={s} className="px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Counsel */}
            <div className={`mt-16 glass-card p-8 flex items-start gap-5 max-w-3xl mx-auto border-l-4 border-gold transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Shield size={32} className="text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Legal Counsel</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  Our dedicated legal team oversees all title verification, investor protection agreements, 
                  and regulatory compliance to ensuring every transaction is legally sound and every investor is protected.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TeamPage;
