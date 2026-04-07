import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import FoundationPage from "./pages/FoundationPage.tsx";
import TeamPage from "./pages/TeamPage.tsx";
import ContributionPage from "./pages/ContributionPage.tsx";
import EstatesPage from "./pages/EstatesPage.tsx";
import EstateDetailPage from "./pages/EstateDetailPage.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import AffiliatePage from "./pages/AffiliatePage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import MediaPage from "./pages/MediaPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import LoadingScreen from "./components/LoadingScreen.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/foundation" element={<FoundationPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contribution" element={<ContributionPage />} />
        <Route path="/estates" element={<EstatesPage />} />
        <Route path="/estates/:slug" element={<EstateDetailPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
        </AnimatePresence>
        {!loading && (
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
