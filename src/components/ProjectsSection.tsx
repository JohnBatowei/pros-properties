import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const projects = [
  {
    name: 'Kuje Premium Gardens Phase 1',
    description: 'Delivered through our partner companies fully developed with 100+ plots, paved roads, drainage, and electricity.',
    image: project1,
    highlights: ['100+ Plots Delivered', 'Full Infrastructure', '200% ROI Achieved'],
    status: 'Completed',
  },
  {
    name: 'Wumba Residential Phase 1',
    description: 'Successfully completed through partnered real estate developers. Modern homes with full documentation delivered to investors.',
    image: project2,
    highlights: ['50+ Houses Built', 'C of O Secured', 'All Investors Paid'],
    status: 'Completed',
  },
  {
    name: 'Kuje Premium Gardens Phase 2',
    description: 'Expanding through our partner network with additional plots and enhanced infrastructure for new investment groups.',
    image: project1,
    highlights: ['200+ Plots', 'Gated Community', 'Partner Delivered'],
    status: 'In Progress',
  },
  {
    name: 'Wumba Residential Phase 2',
    description: 'Continuing our success story through verified partner companies, offering structured investment in modern housing.',
    image: project2,
    highlights: ['Modern Designs', 'Title Secured', 'Investor Returns'],
    status: 'Coming Soon',
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  const p = projects[current];

  return (
    <section className="section-padding bg-surface relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container-max relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-widest">
            <Sparkles size={16} /> Track Record
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Projects We've Delivered
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Delivered through our partnered real estate companies, every project represents trust, growth, and shared prosperity.
          </p>
        </div>

        <div className={`relative max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl overflow-hidden border border-border/50 bg-background shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 relative aspect-video md:aspect-auto overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" width={800} height={600} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                  p.status === 'Completed' ? 'bg-green-deep/80 text-primary-foreground' :
                  p.status === 'In Progress' ? 'bg-gold/80 text-foreground' :
                  'bg-secondary/80 text-primary-foreground'
                }`}>
                  {p.status}
                </span>
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <span className="font-display text-4xl font-bold">{String(current + 1).padStart(2, '0')}</span>
                  <span className="text-primary-foreground/50 text-lg ml-1">/ {String(projects.length).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="md:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight">{p.name}</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {p.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                      <CheckCircle size={14} /> {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border/50">
                  <button onClick={prev} className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all" aria-label="Previous project">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={next} className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold/10 hover:border-gold/30 hover:text-gold transition-all" aria-label="Next project">
                    <ChevronRight size={20} />
                  </button>
                  <div className="flex gap-2 ml-auto">
                    {projects.map((_, i) => (
                      <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-gold w-8' : 'bg-border w-2 hover:bg-muted-foreground/40'}`} aria-label={`Go to project ${i + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-14">
          <Link to="/portfolio" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border-2 border-gold/30 px-10 py-4 font-display font-bold text-lg transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/10">
            <span className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-foreground group-hover:text-foreground transition-colors">Explore Full Portfolio</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform text-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
