import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Linkedin, Mail, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ogbaje Glory Onetokole',
    image: '/images/ogbaje-glory.jpg',
    role: 'Chief Executive Officer',
    bio: 'A visionary Chief Executive Officer with deep expertise in property development and investment strategy, supported by professional certifications and advanced training in property investment, portfolio management, and real estate finance. Pros-Properties Limited is established with a clear mission to make property ownership accessible, secure, and rewarding for everyday Nigerians. With a strong track record of delivering high-value residential estates. Her leadership is defined by strategic foresight, disciplined execution, and a commitment to transparency, innovation, and industry best practices. Under her direction, the company continues to scale sustainably, positioning itself as a trusted and forward-thinking force in the Nigerian investment sector.',
    specialties: ['Strategic Planning', 'Estate Development', 'Investor Relations'],
  },
  {
    name: 'Olawale Ogunsola Oluwakayode',
    image: '/images/olawale-ogunsola.jpg',
    role: 'Chief Financial Officer',
    bio: 'A highly qualified finance professional and Member of the Institute of Chartered Accountants of Nigeria (ICAN) and the Chartered Institute of Taxation of Nigeria (CITN), with strong expertise in financial strategy and fund management. An experienced financial strategist with a proven track record in the transparent and efficient management of investment portfolios. He plays a key role in shaping organizational direction, driving financial growth, and ensuring sustainable business practices. Demonstrates exceptional capability in maintaining rigorous financial oversight, delivering bi-annual investor reports, and ensuring full regulatory compliance. Recognized for a disciplined and detail-oriented approach to fund management, contributing significantly to sustained investor confidence and the consistent delivery of strong returns.',
    specialties: ['Financial Management', 'Regulatory Compliance', 'Fund Allocation'],
  },
  {
    name: 'Blessing Enemona Ogbaje',
    image: '/images/blessing-enemona.jpg',
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
           <div className="flex flex-col gap-12">
  {teamMembers.map((member, i) => (
    <div
      key={member.name}
      className={`group relative grid grid-cols-1 lg:grid-cols-12 bg-card rounded-3xl border border-border/40 overflow-hidden transition-all duration-1000 shadow-sm hover:shadow-xl hover:shadow-gold/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${i * 150}ms` }}
    >
      {/* Left Column: Image & Initials Branding (4 Cols) */}
      <div className="lg:col-span-4 relative min-h-[400px] lg:min-h-full overflow-hidden bg-muted">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              // If link breaks, hide the img tag to show the fallback initials div underneath
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : null}

        {/* Professional Fallback / Initials Branding Layer */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black z-0">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full border-2 border-gold/30 flex items-center justify-center mb-2 mx-auto">
               <span className="font-display text-4xl font-bold text-gold/50">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <p className="text-[10px] text-gold/40 tracking-[0.3em] uppercase">Pros-Properties</p>
          </div>
        </div>

        {/* Small Floating Identity Badge (Visible over image) */}
        <div className="absolute top-6 left-6 h-12 w-12 rounded-xl bg-background/80 backdrop-blur-md border border-gold/40 flex items-center justify-center shadow-2xl z-20">
          <span className="font-display text-xs font-black text-gold">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gold" />
      </div>

      {/* Right Column: Full Readable Content (8 Cols) */}
      <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {member.name}
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <span className="h-px w-8 bg-gold" />
              <p className="text-gold font-bold text-sm uppercase tracking-widest">
                {member.role}
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <a href="#" className="p-3 rounded-full border border-border text-muted-foreground hover:bg-gold hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 rounded-full border border-border text-muted-foreground hover:bg-gold hover:text-white transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Full Bio - No line clamping, fully readable */}
        <div className="relative">
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 relative z-10">
            {member.bio}
          </p>
          <span className="absolute -top-6 -left-4 text-8xl font-serif text-gold/5 pointer-events-none italic">“</span>
        </div>

        {/* Specialties Grid */}
        <div className="mt-auto border-t border-border/50 pt-8">
          <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em] mb-4">Core Expertise</p>
          <div className="flex flex-wrap gap-3">
            {member.specialties.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full bg-gold/90 text-foreground text-xs font-medium border border-border hover:border-gold/50 transition-colors">
                {s}
              </span>
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
