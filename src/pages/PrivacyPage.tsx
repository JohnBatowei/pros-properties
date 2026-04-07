import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageTransition>
      <section className="relative pt-32 pb-20 hero-gradient">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Legal</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mt-4">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl prose prose-lg text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground">Information We Collect</h2>
          <p>We collect personal information you voluntarily provide when expressing interest in our investment opportunities, including your name, email address, phone number, and financial preferences.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">How We Use Your Information</h2>
          <p>Your information is used to communicate investment opportunities, process inspection bookings, manage your membership contributions, and send relevant updates about estate developments and ROI reports.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Data Protection</h2>
          <p>We implement industry-standard security measures to protect your personal and financial information. Your data is never sold to third parties and is only shared with authorized team members for operational purposes.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Cookies</h2>
          <p>Our website may use cookies to enhance your browsing experience. You can disable cookies in your browser settings at any time.</p>

          <h2 className="font-display text-2xl font-bold text-foreground mt-8">Contact Us</h2>
          <p>For any privacy-related inquiries, please contact us at info@prosproperties.com or call +234 800 000 0000.</p>
        </div>
      </section>
    </PageTransition>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default PrivacyPage;
