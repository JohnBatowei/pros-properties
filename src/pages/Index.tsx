import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PartnersSlider from '@/components/PartnersSlider';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProjectsSection from '@/components/ProjectsSection';
import VideoSection from '@/components/VideoSection';
import ContributionPlans from '@/components/ContributionPlans';
import InvestmentModelSection from '@/components/InvestmentModelSection';
import HowWeHelpSection from '@/components/HowWeHelpSection';
import StartInvestmentSection from '@/components/StartInvestmentSection';
import OurReachSection from '@/components/OurReachSection';
import TrustSection from '@/components/TrustSection';
import AffiliateSection from '@/components/AffiliateSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSlider />
      <HowItWorksSection />
      <ContributionPlans />
      <VideoSection />
      <ProjectsSection />
      <InvestmentModelSection />
      <HowWeHelpSection />
      <StartInvestmentSection />
      <OurReachSection />
      <TrustSection />
      <AffiliateSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
