import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, ArrowRight, ArrowLeft, Building2, Hammer, MapPin, TrendingUp, Users } from 'lucide-react';
import estate1 from '@/assets/estate-1.jpg';
import estate2 from '@/assets/estate-2.jpg';
import estate3 from '@/assets/estate-3.jpg';

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: typeof Building2;
  features: string[];
  benefits: string[];
}> = {
  'real-estate-development': {
    title: 'Real Estate Development',
    subtitle: 'Building the Future of Urban Living',
    description: 'We develop premium residential and commercial estates across Abuja, creating communities that combine modern architecture with sustainable planning. From land acquisition to final delivery, we manage every stage of development.',
    image: estate1,
    icon: Building2,
    features: ['Master-planned communities', 'Modern infrastructure development', 'Quality construction standards', 'Timely project delivery', 'Post-delivery estate management', 'Sustainable design practices'],
    benefits: ['High-quality housing solutions', 'Appreciating property values', 'Well-connected locations', 'Professional project management'],
  },
  'building-and-construction': {
    title: 'Building & Construction',
    subtitle: 'Quality Construction You Can Trust',
    description: 'Our construction division delivers exceptional buildings — from residential homes to commercial complexes. We use premium materials, skilled craftsmen, and modern techniques to ensure every structure meets the highest standards.',
    image: estate2,
    icon: Hammer,
    features: ['Residential construction', 'Commercial building projects', 'Renovation & remodeling', 'Architectural design', 'Project supervision', 'Quality material sourcing'],
    benefits: ['Experienced construction team', 'Transparent pricing', 'On-time completion', 'Structural warranty'],
  },
  'land-sales': {
    title: 'Land Sales',
    subtitle: 'Secure Your Plot in Prime Locations',
    description: 'We offer verified, well-documented land in strategic locations across Abuja and beyond. Every plot comes with proper title documentation, survey plans, and our guarantee of authenticity. Start your real estate journey with confidence.',
    image: estate3,
    icon: MapPin,
    features: ['Verified land titles', 'Certificate of Occupancy (C of O)', 'Survey plans included', 'Flexible payment options', 'Prime locations', 'Free site inspection'],
    benefits: ['100% genuine documentation', 'No hidden charges', 'Flexible payment plans', 'Professional guidance'],
  },
  'real-estate-investment': {
    title: 'Real Estate Investment',
    subtitle: 'Grow Your Wealth Through Property',
    description: 'Our investment platform allows you to build wealth through structured property investment. Whether you\'re investing ₦25,000 or ₦5,000,000, we provide the framework for sustainable, long-term growth in real estate.',
    image: estate1,
    icon: TrendingUp,
    features: ['Structured investment plans', 'Monthly contribution options', 'Portfolio diversification', 'Professional asset management', 'Transparent reporting', 'Exit strategies'],
    benefits: ['Start from ₦25,000/month', 'Proven appreciation', 'Expert management', 'Community of investors'],
  },
  'real-estate-consultation': {
    title: 'Real Estate Consultation',
    subtitle: 'Expert Guidance for Smart Decisions',
    description: 'Our experienced consultants provide professional advice on property investment, market analysis, legal due diligence, and portfolio strategy. Whether you\'re a first-time buyer or seasoned investor, we help you make informed decisions.',
    image: estate2,
    icon: Users,
    features: ['Market analysis & research', 'Investment advisory', 'Legal due diligence', 'Property valuation', 'Portfolio strategy', 'Risk assessment'],
    benefits: ['Industry expertise', 'Data-driven insights', 'Personalized advice', 'Ongoing support'],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug || ''];
  const { ref, isVisible } = useScrollAnimation();

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground">Service Not Found</h1>
            <Link to="/" className="btn-gold mt-6 inline-block">Go Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        {/* Hero */}
        <section className="relative pt-24">
          <div className="relative h-[45vh] min-h-[380px] overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <div className="container-max">
                <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold mb-4 transition-colors">
                  <ArrowLeft size={16} /> Back to Home
                </Link>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Icon size={24} className="text-gold" />
                  </div>
                </div>
                <h1 className="font-display text-3xl sm:text-5xl font-bold text-primary-foreground">{service.title}</h1>
                <p className="text-primary-foreground/70 text-lg mt-2">{service.subtitle}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mt-16">
              <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">What We Offer</h2>
                <div className="space-y-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
                      <CheckCircle size={18} className="text-gold shrink-0" />
                      <span className="text-foreground font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Why Choose Us</h2>
                <div className="space-y-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 p-4 rounded-xl bg-gold/5 border border-gold/20">
                      <CheckCircle size={18} className="text-gold shrink-0" />
                      <span className="text-foreground font-medium">{b}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center gap-2 mt-8"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
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

export default ServicePage;
