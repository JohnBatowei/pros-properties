import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { UserPlus, Send, CheckCircle, TrendingUp, Users, Wallet, Star } from 'lucide-react';
import { sendAffiliateForm, getWhatsAppLink } from '@/lib/emailjs';
import { toast } from 'sonner';

const benefits = [
  { icon: Wallet, title: 'Attractive Commissions', desc: 'Earn competitive commissions on every successful referral. The more you refer, the more you earn.' },
  { icon: TrendingUp, title: 'Passive Income', desc: 'Build a sustainable income stream by connecting people with premium real estate opportunities.' },
  { icon: Users, title: 'Growing Network', desc: 'Join 100+ active affiliates already earning with Pros Properties across Nigeria.' },
  { icon: Star, title: 'Full Support', desc: 'Get marketing materials, training, and dedicated support to help you succeed.' },
];

const steps = [
  { step: '01', title: 'Apply', desc: 'Fill out the affiliate application form below or contact us via WhatsApp.' },
  { step: '02', title: 'Get Approved', desc: 'Our team reviews your application and sets up your affiliate account.' },
  { step: '03', title: 'Share & Refer', desc: 'Share estate opportunities with your network using your unique referral link.' },
  { step: '04', title: 'Earn', desc: 'Receive your commission when your referral makes a successful investment.' },
];

const AffiliatePage = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', occupation: '', experience: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error('Please fill in required fields');
      return;
    }
    setLoading(true);
    try {
      await sendAffiliateForm(form);
      toast.success('Application submitted! We will reach out shortly.');
      setForm({ name: '', phone: '', email: '', occupation: '', experience: '', message: '' });
    } catch {
      toast.error('Submission failed. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        {/* Hero */}
        <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <UserPlus size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">Earn With Us</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Become a <span className="text-gradient-gold">Pros-Properties</span> Affiliate
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-6 max-w-2xl mx-auto">
              Join our affiliate program and earn attractive commissions by connecting investors with premium real estate opportunities across Nigeria.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Why Join</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">Affiliate Benefits</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className={`glass-card p-6 text-center transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{b.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-surface">
          <div className="container-max">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Process</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">How It Works</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={s.step} className="text-center p-6">
                  <div className="text-5xl font-display font-bold text-gold/20 mb-3">{s.step}</div>
                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding hero-gradient">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-gold font-semibold text-sm uppercase tracking-widest">Apply Now</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mt-3">
                  Start Earning <span className="text-gradient-gold">Today</span>
                </h2>
                <p className="text-primary-foreground/70 text-lg mt-6 leading-relaxed">
                  Fill out the form and our team will get in touch within 24 hours. No capital needed, just your network and influence.
                </p>
                <div className="mt-8 space-y-3">
                  {['Zero capital required', 'Marketing materials provided', 'Dedicated affiliate manager', 'Weekly commission payouts'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-gold shrink-0" />
                      <span className="text-primary-foreground/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={getWhatsAppLink("Hello, I'm interested in becoming an affiliate partner with Pros Properties.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-green-deep font-medium text-primary-foreground hover:scale-105 transition-transform border border-green-deep-light/30"
                >
                  Or Contact via WhatsApp
                </a>
              </div>

              <form onSubmit={handleSubmit} className="bg-background/10 backdrop-blur-xl rounded-3xl p-8 border border-primary-foreground/10">
                <div className="space-y-4">
                  {[
                    { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Phone Number *', key: 'phone', type: 'tel', placeholder: '+234 816 022 8215' },
                    { label: 'Email Address *', key: 'email', type: 'email', placeholder: 'you@email.com' },
                    { label: 'Occupation', key: 'occupation', type: 'text', placeholder: 'Your current occupation' },
                    { label: 'Marketing Experience', key: 'experience', type: 'text', placeholder: 'Any relevant experience' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-primary-foreground/80 text-sm font-medium mb-1.5">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-primary-foreground/80 text-sm font-medium mb-1.5">Additional Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us why you'd like to join..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 !py-4 disabled:opacity-50">
                    <Send size={18} />
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AffiliatePage;
