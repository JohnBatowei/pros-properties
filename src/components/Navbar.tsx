import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contribution Plans', href: '/contribution' },
  { label: 'Opportunities', href: '/estates' },
];

const resourceLinks = [
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: 'Media', href: '/media' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'Meet the Team', href: '/team' },
  { label: 'Become an Affiliate', href: '/affiliate' },
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

  const textClass = scrolled ? 'text-foreground' : 'text-primary-foreground/90';
  const textHover = 'hover:text-gold';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20" ref={dropdownRef}>
      <Link to="/" className="flex items-center gap-2">
  <img src={logo} alt="Pros Properties Limited" className="h-10 w-10 sm:h-12 sm:w-12" />
  <div className="flex flex-col"> {/* Changed 'hidden sm:block' to 'flex' */}
    <span className={`font-display font-bold text-sm sm:text-lg leading-tight ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
      PROS-PROPERTIES LTD
    </span>
  </div>
</Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium transition-colors ${textHover} ${textClass}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
              className={`text-sm font-medium transition-colors ${textHover} ${textClass} flex items-center gap-1`}
            >
              Resources <ChevronDown size={14} className={`transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'resources' && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-5 py-3 text-sm text-foreground hover:bg-gold/10 hover:text-gold transition-colors font-medium border-b border-border/30 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={`text-sm font-medium transition-colors ${textHover} ${textClass}`}>Contact</Link>

          <Link to="/contribution" className="btn-gold text-sm !px-6 !py-2.5">
            Start Investing
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => { handleClick(link.href); setIsOpen(false); }}
                className="block w-full text-left text-foreground text-base font-medium py-3 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setMobileAccordion(mobileAccordion === 'resources' ? null : 'resources')}
              className="w-full flex items-center justify-between text-foreground text-base font-medium py-3 hover:text-gold transition-colors"
            >
              Resources <ChevronDown size={16} className={`transition-transform ${mobileAccordion === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {mobileAccordion === 'resources' && (
              <div className="pl-4 space-y-1">
                {resourceLinks.map((link) => (
                  <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="block text-muted-foreground text-sm font-medium py-2 hover:text-gold transition-colors">{link.label}</Link>
                ))}
              </div>
            )}

            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-left text-foreground text-base font-medium py-3 hover:text-gold transition-colors">Contact</Link>

            <Link to="/contribution" onClick={() => setIsOpen(false)} className="btn-gold w-full text-center text-sm !py-3 mt-4 block">
              Start Investing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
