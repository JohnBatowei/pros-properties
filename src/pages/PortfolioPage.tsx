import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, Search } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import estate1 from '@/assets/estate-1.jpg';
import estate2 from '@/assets/estate-2.jpg';

const allProjects = [
  { name: 'Kuje Premium Gardens Phase 1', description: 'Fully developed with 100+ plots, paved roads, drainage, and electricity. All plots sold and titles delivered.', image: project1, highlights: ['100+ Plots Sold', 'Full Infrastructure', '200% ROI Achieved'] },
  { name: 'Wumba Residential Phase 1', description: 'Successfully completed estate with modern homes and full documentation. A landmark achievement for our investors.', image: project2, highlights: ['50+ Houses Built', 'C of O Secured', 'All Investors Paid'] },
  { name: 'Airport Road Commercial Phase 1', description: 'Commercial plots along Airport Road delivered with complete road network and utility connections.', image: estate1, highlights: ['30+ Plots Sold', 'Commercial Zone', '150% ROI'] },
  { name: 'Kuje Gardens Phase 2', description: 'Second phase delivery with enhanced infrastructure and green spaces for residents.', image: estate2, highlights: ['75+ Plots Sold', 'Green Infrastructure', 'All Titles Delivered'] },
];

const PortfolioPage = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [search, setSearch] = useState('');

  const filtered = allProjects.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <section className="relative pt-32 pb-20 hero-gradient">
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Track Record</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Delivered <span className="text-gradient-gold">Projects</span>
            </h1>
          </div>
        </section>

        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className={`relative max-w-md mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {filtered.map((p, i) => (
                <div
                  key={p.name}
                  className={`glass-card overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
                    <p className="text-muted-foreground mt-3">{p.description}</p>
                    <div className="flex flex-wrap gap-3 mt-5">
                      {p.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1.5 text-sm text-green-deep font-medium">
                          <CheckCircle size={16} /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PortfolioPage;
