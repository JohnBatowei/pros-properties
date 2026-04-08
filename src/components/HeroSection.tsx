import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-estate.jpg';

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium property investment opportunities across Nigeria"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/40" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-1/4 w-48 h-48 bg-gold/10 rounded-full blur-2xl animate-float" />

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
      

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-8 animate-fade-up animate-fade-up-delay-1">
              <span className="text-primary-foreground">Build Wealth</span>
              <br />
              <span className="text-primary-foreground">Through </span>
              <span className="text-gradient-gold">Structured</span>
              <br />
              <span className="text-gradient-gold">Property</span>
              <br />
              <span className="text-primary-foreground">Investment</span>
            </h1>

            <p className="text-primary-foreground/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed animate-fade-up animate-fade-up-delay-2">
              Join a structured investment system designed to help everyday earners 
              own property over time through disciplined monthly contributions 
              and collective wealth building.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-up-delay-3">
              <Link to="/contribution" className="btn-gold flex items-center gap-2 text-base group">
                Start Investing
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={() => scrollTo('#videos')} className="flex items-center gap-3 px-6 py-4 rounded-xl text-primary-foreground/80 hover:text-gold transition-colors group">
                <span className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <Play size={18} className="text-gold ml-0.5" />
                </span>
                <span className="font-medium">Watch How It Works</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-6 animate-fade-up animate-fade-up-delay-4">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20 mb-8 animate-fade-up backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-medium tracking-wide">Trusted by 500+ Investors Across Nigeria</span>
            </div>
            {[
              { value: '500+', label: 'Active Investors', sub: 'Growing community nationwide' },
              { value: '15+', label: 'Projects Delivered', sub: 'Through partner companies' },
              { value: '₦2B+', label: 'Assets Managed', sub: 'And counting' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 hover:border-gold/20 transition-all duration-500"
              >
                <div className="flex items-center gap-5">
                  <div className="text-4xl font-bold text-gold font-display">{stat.value}</div>
                  <div>
                    <div className="text-primary-foreground font-semibold">{stat.label}</div>
                    <div className="text-primary-foreground/50 text-sm">{stat.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-12 flex gap-6 justify-center animate-fade-up animate-fade-up-delay-4">
          {[
            { value: '500+', label: 'Investors' },
            { value: '15+', label: 'Projects' },
            { value: '₦2B+', label: 'Managed' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold font-display">{stat.value}</div>
              <div className="text-primary-foreground/60 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo('#partners')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-gold transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
