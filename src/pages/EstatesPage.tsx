import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, ArrowRight, Search } from 'lucide-react';
import { estates, statusColors } from '@/lib/estatesData';

const statuses = ['All', 'Available', 'Developing', 'Coming Soon'];

const EstatesPage = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = estates.filter((e) => {
    const matchesFilter = filter === 'All' || e.status === filter;
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <section className="relative pt-32 pb-20 hero-gradient">
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Investment Opportunities</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              All <span className="text-gradient-gold">Estates</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
              Browse our complete portfolio of investment properties across Nigeria.
            </p>
          </div>
        </section>

        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search estates..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {statuses.map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilter(s)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === s ? 'bg-gold text-foreground' : 'bg-surface border border-border text-muted-foreground hover:text-foreground'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((estate, i) => (
                <Link
                  to={`/estates/${estate.slug}`}
                  key={estate.slug}
                  className={`glass-card overflow-hidden group transition-all duration-700 hover:-translate-y-2 block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={estate.image} alt={estate.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[estate.status]}`}>{estate.status}</span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-secondary/80 text-primary-foreground text-xs font-bold">{estate.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-foreground">{estate.name}</h3>
                    <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm"><MapPin size={14} />{estate.location}</div>
                    <p className="text-muted-foreground text-sm mt-3 line-clamp-2">{estate.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-gold font-semibold text-sm group-hover:gap-2 transition-all">
                      Invest Now <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16 text-lg">No estates match your search criteria.</p>
            )}
          </div>
        </section>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EstatesPage;
