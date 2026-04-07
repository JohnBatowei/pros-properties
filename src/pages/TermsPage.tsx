import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';

const TermsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageTransition>
      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-4">
            Terms of <span className="text-gradient-gold">Service</span>
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl prose prose-lg text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground">Membership & Contributions</h2>
          <p>By joining Pros Properties, you agree to a structured monthly contribution of ₦10,000 as part of a collective investment group with a 10-year lifespan. Contributions are non-refundable to ensure commitment and group stability.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Investment Terms</h2>
          <p>Properties are acquired annually using pooled contributions. A minimum 5-year holding period applies to allow for optimal appreciation. Profit sharing is proportional to individual contributions at the end of the group's lifespan.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Management Fee</h2>
          <p>An annual management fee of ₦10,000 covers administrative costs, property management, legal documentation, and bi-annual reporting to all members.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Accountability</h2>
          <p>Pros Properties is committed to full transparency. Bi-annual financial reports are shared with all members. The management team operates under a strict accountability clause overseen by our legal counsel.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Disclaimer</h2>
          <p>All investments carry risk. Past returns do not guarantee future performance. Pros Properties provides guidance and professional management but does not guarantee specific ROI figures.</p>
        </div>
      </section>
    </PageTransition>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default TermsPage;
