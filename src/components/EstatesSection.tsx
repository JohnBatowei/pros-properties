import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { estates, statusColors } from '@/lib/estatesData';

const EstatesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const featured = estates.slice(0, 4);

  return (
    <section id="estates" className="section-padding" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Investment Opportunities</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Estates You Can <span className="text-gradient-gold">Invest In</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Carefully selected locations with high growth potential across Abuja's most promising corridors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((estate, i) => (
            <Link
              to={`/estates/${estate.slug}`}
              key={estate.slug}
              className={`glass-card overflow-hidden group transition-all duration-700 hover:-translate-y-2 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={estate.image} alt={estate.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[estate.status]}`}>{estate.status}</span>
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

        <div className="text-center mt-12">
          <Link to="/estates" className="btn-outline-gold inline-flex items-center gap-2 !py-3 !px-8">
            View All Estates <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EstatesSection;
