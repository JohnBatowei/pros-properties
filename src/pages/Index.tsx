import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import EstatesSection from '@/components/EstatesSection';
import InspectionSection from '@/components/InspectionSection';
import ProjectsSection from '@/components/ProjectsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import InvestmentModelSection from '@/components/InvestmentModelSection';
import InvestmentPreview from '@/components/InvestmentPreview';
import TrustSection from '@/components/TrustSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <EstatesSection />
      <InspectionSection />
      <ProjectsSection />
      <HowItWorksSection />
      <ServicesSection />
      <InvestmentModelSection />
      <InvestmentPreview />
      <TrustSection />
      <GallerySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
