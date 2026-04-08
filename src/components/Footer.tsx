import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Contribution Plans', href: '/contribution' },
  { label: 'Contact Us', href: '/contact' },
];

const resourceLinks = [
  { label: 'Investment Opportunities', href: '/estates' },
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: 'Become an Affiliate', href: '/affiliate' },
  { label: 'Our Foundation', href: '/foundation' },
  { label: 'Media', href: '/media' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      <div className="bg-gold/10 border-y border-gold/20">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-foreground">Stay Updated</h3>
              <p className="text-muted-foreground mt-1">Get the latest investment opportunities and updates.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required className="flex-1 px-5 py-3 rounded-full bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors" />
              <button type="submit" className="px-6 py-3 rounded-full gold-gradient text-foreground font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                <Send size={16} /><span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
            {subscribed && <p className="text-gold text-sm font-medium animate-fade-up">✓ Subscribed successfully!</p>}
          </div>
        </div>
      </div>

      <div className="hero-gradient">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <img src={logo} alt="Pros-Properties Limited" className="h-11 w-11" />
                <span className="font-display font-bold text-lg text-primary-foreground">PROS-PROPERTIES</span>
              </div>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
                Nigeria's premier structured property investment platform. Building wealth through collective investment and verified real estate partnerships.
              </p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-foreground transition-all duration-300">
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-primary-foreground mb-5">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}><Link to={link.href} className="group inline-flex items-center gap-1 text-primary-foreground/60 text-sm hover:text-gold transition-colors">{link.label}<ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-primary-foreground mb-5">Resources</h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.href}><Link to={link.href} className="group inline-flex items-center gap-1 text-primary-foreground/60 text-sm hover:text-gold transition-colors">{link.label}<ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-primary-foreground mb-5">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2"><MapPin size={14} className="text-gold shrink-0 mt-1" /><p className="text-primary-foreground/60">Nigeria (Nationwide)</p></div>
                <div className="flex items-start gap-2"><Mail size={14} className="text-gold shrink-0 mt-1" /><div className="text-primary-foreground/60 space-y-1"><p>invest@pros-properties.com</p><p>info@pros-properties.com</p><p>finance@pros-properties.com</p></div></div>
                <div className="flex items-start gap-2"><Phone size={14} className="text-gold shrink-0 mt-1" /><p className="text-primary-foreground/60">+234 705 496 2230</p></div>
              </div>
              <div className="mt-6">
                <h5 className="font-display font-bold text-primary-foreground mb-2 text-sm">Legal</h5>
                <ul className="space-y-1.5">
                  {legalLinks.map((link) => (
                    <li key={link.href}><Link to={link.href} className="text-primary-foreground/60 text-sm hover:text-gold transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/40 text-sm">© {new Date().getFullYear()} Pros-Properties Limited. All rights reserved.</p>
            <p className="text-primary-foreground/30 text-xs">Powered by <a href="https://www.aritron.com.ng" target="_blank" rel="noopener noreferrer" className="text-gold/70 font-semibold size={12}">AriTron LTD</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
