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
    bio: 'A visionary Chief Executive Officer with deep expertise in property development and investment strategy, supported by professional certifications and advanced training in property investment, portfolio management, and real estate finance. Pros-Properties Limited is established with a clear mission to make property ownership accessible, secure, and rewarding for everyday Nigerians. With a strong track record of delivering high-value residential estates, she has successfully driven wealth creation for hundreds of investors across Africa. Her leadership is defined by strategic foresight, disciplined execution, and a commitment to transparency, innovation, and industry best practices. Under her direction, the company continues to scale sustainably, positioning itself as a trusted and forward-thinking force in the Nigerian investment sector.',
    specialties: ['Strategic Planning', 'Estate Development', 'Investor Relations'],
  },
  {
    name: 'Olawale Ogunsola Oluwakayode',
    role: 'Chief Financial Officer',
    bio: 'A highly qualified finance professional and Member of the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), with strong expertise in financial strategy and fund management. An experienced financial strategist with a proven track record in the transparent and efficient management of investment portfolios. He plays a key role in shaping organizational direction, driving financial growth, and ensuring sustainable business practices. Demonstrates exceptional capability in maintaining rigorous financial oversight, delivering bi-annual investor reports, and ensuring full regulatory compliance. Recognized for a disciplined and detail-oriented approach to fund management, contributing significantly to sustained investor confidence and the consistent delivery of strong returns.',
    specialties: ['Financial Management', 'Regulatory Compliance', 'Fund Allocation'],
  },
  {
    name: 'Blessing Enemona Ogbaje',
    role: 'Chief Investment Officer',
    bio: 'Blessing is a seasoned investment professional and real estate expert with a proven track record in property acquisition and sales across Nigeria, serving both local investors and Nigerians in the diaspora. She specializes in identifying high-growth opportunities, particularly within Nigeria, using data-driven insights and strategic market analysis. With strong expertise in property investment, client advisory, and market trends, Blessing consistently delivers assets that generate sustainable returns. She also holds relevant certifications and has undergone professional training in real estate investment and property management. Her results-driven approach has played a key role in driving the company’s growth and strengthening its reputation in the property market.',
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
