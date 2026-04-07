import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Building2, Hammer, MapPin, TrendingUp, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { estates } from '@/lib/estatesData';

const mainLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

const investLinks = estates.map((e) => ({
  label: e.name,
  href: `/estates/${e.slug}`,
  sublabel: 'Invest today',
}));
investLinks.push({ label: 'View All Projects', href: '/estates', sublabel: '' });

const serviceLinks = [
  { label: 'Real Estate Development', href: '/services/real-estate-development', icon: Building2 },
  { label: 'Building & Construction', href: '/services/building-and-construction', icon: Hammer },
  { label: 'Land Sales', href: '/services/land-sales', icon: MapPin },
  { label: 'Real Estate Investment', href: '/services/real-estate-investment', icon: TrendingUp },
  { label: 'Real Estate Consultation', href: '/services/real-estate-consultation', icon: Users },
];

const communityLinks = [
  { label: 'Pros-Property Foundation', href: '/foundation' },
  { label: 'Meet Our Team', href: '/team' },
  { label: 'Investment Plans', href: '/contribution' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleClick = (href: string) => {
    setIsOpen(false);
    setOpenDropdown(null);
    if (href.startsWith('/#') && location.pathname === '/') {
      document.querySelector(href.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);
  const toggleMobileAccordion = (name: string) => setMobileAccordion(mobileAccordion === name ? null : name);

  const textClass = scrolled ? 'text-foreground' : 'text-primary-foreground/90';
  const textClassHover = 'hover:text-gold';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20" ref={dropdownRef}>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pros Properties Limited" className="h-12 w-12" />
          <div className="hidden sm:block">
            <span className={`font-display font-bold text-lg leading-tight ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>PROS PROPERTIES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {mainLinks.map((link) => (
            <Link key={link.href} to={link.href} className={`text-sm font-medium transition-colors ${textClassHover} ${textClass}`}>{link.label}</Link>
          ))}

          {/* Invest Now Mega Dropdown */}
          <div className="relative">
            <button onClick={() => toggleDropdown('invest')} className={`text-sm font-medium transition-colors ${textClassHover} ${textClass} flex items-center gap-1`}>
              Invest Now <ChevronDown size={14} className={`transition-transform ${openDropdown === 'invest' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'invest' && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-72 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-up max-h-[70vh] overflow-y-auto">
                {investLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-center justify-between px-5 py-3 text-sm hover:bg-gold/10 hover:text-gold transition-colors border-b border-border/30 last:border-0"
                  >
                    <span className="font-medium text-foreground">{link.label}</span>
                    {link.sublabel && <span className="text-gold text-xs font-semibold">{link.sublabel}</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button onClick={() => toggleDropdown('services')} className={`text-sm font-medium transition-colors ${textClassHover} ${textClass} flex items-center gap-1`}>
              Services <ChevronDown size={14} className={`transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'services' && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
                {serviceLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-3 px-5 py-3 text-sm text-foreground hover:bg-gold/10 hover:text-gold transition-colors border-b border-border/30 last:border-0"
                    >
                      <Icon size={16} className="text-gold shrink-0" />
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Community Dropdown */}
          <div className="relative">
            <button onClick={() => toggleDropdown('community')} className={`text-sm font-medium transition-colors ${textClassHover} ${textClass} flex items-center gap-1`}>
              Community <ChevronDown size={14} className={`transition-transform ${openDropdown === 'community' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'community' && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-52 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
                {communityLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setOpenDropdown(null)} className="block px-5 py-3 text-sm text-foreground hover:bg-gold/10 hover:text-gold transition-colors font-medium border-b border-border/30 last:border-0">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/affiliate" className={`text-sm font-medium transition-colors ${textClassHover} ${textClass}`}>Affiliate</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${textClassHover} ${textClass}`}>Contact</Link>

          <Link to="/#inspection" onClick={() => handleClick('/#inspection')} className="btn-gold text-sm !px-6 !py-2.5">
            Book Inspection
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-up max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {mainLinks.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="block w-full text-left text-foreground text-base font-medium py-3 hover:text-gold transition-colors">{link.label}</Link>
            ))}

            {/* Mobile Invest Now */}
            <button onClick={() => toggleMobileAccordion('invest')} className="w-full flex items-center justify-between text-foreground text-base font-medium py-3 hover:text-gold transition-colors">
              Invest Now <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'invest' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'invest' && (
              <div className="pl-4 space-y-1">
                {investLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="flex items-center justify-between text-muted-foreground text-sm font-medium py-2 hover:text-gold transition-colors">
                    <span>{link.label}</span>
                    {link.sublabel && <span className="text-gold text-xs">{link.sublabel}</span>}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Services */}
            <button onClick={() => toggleMobileAccordion('services')} className="w-full flex items-center justify-between text-foreground text-base font-medium py-3 hover:text-gold transition-colors">
              Services <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'services' && (
              <div className="pl-4 space-y-1">
                {serviceLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="block text-muted-foreground text-sm font-medium py-2 hover:text-gold transition-colors">{link.label}</Link>
                ))}
              </div>
            )}

            {/* Mobile Community */}
            <button onClick={() => toggleMobileAccordion('community')} className="w-full flex items-center justify-between text-foreground text-base font-medium py-3 hover:text-gold transition-colors">
              Community <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'community' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'community' && (
              <div className="pl-4 space-y-1">
                {communityLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="block text-muted-foreground text-sm font-medium py-2 hover:text-gold transition-colors">{link.label}</Link>
                ))}
              </div>
            )}

            <Link to="/affiliate" onClick={() => setIsOpen(false)} className="block w-full text-left text-foreground text-base font-medium py-3 hover:text-gold transition-colors">Affiliate</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-left text-foreground text-base font-medium py-3 hover:text-gold transition-colors">Contact</Link>

            <Link to="/#inspection" onClick={() => { handleClick('/#inspection'); setIsOpen(false); }} className="btn-gold w-full text-center text-sm !py-3 mt-4 block">
              Book Inspection
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
