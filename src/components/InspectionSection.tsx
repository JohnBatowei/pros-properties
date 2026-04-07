import { useState } from 'react';
import { CalendarDays, MessageCircle, Send, MapPin, Clock, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { sendInspectionForm, getWhatsAppLink } from '@/lib/emailjs';
import { toast } from 'sonner';
import { estates } from '@/lib/estatesData';

const InspectionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', estate: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.date || !form.estate) {
      toast.error('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await sendInspectionForm(form);
      toast.success('Inspection booked successfully! We will contact you shortly.');
      setForm({ name: '', phone: '', email: '', date: '', estate: '' });
    } catch {
      toast.error('Failed to submit. Please try WhatsApp booking instead.');
    } finally {
      setLoading(false);
    }
  };

  const highlights = [
    { icon: MapPin, text: 'Visit any of our 8+ estates across Abuja' },
    { icon: Clock, text: 'Monday – Saturday, 9AM – 5PM' },
    { icon: Shield, text: 'Free guided tour with our estate managers' },
  ];

  return (
    <section id="inspection" className="relative overflow-hidden" ref={ref}>
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <CalendarDays size={16} className="text-gold" />
                <span className="text-gold text-sm font-medium">Schedule a Visit</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                See Your Future <br className="hidden sm:block" />
                <span className="text-gradient-gold">Investment</span> in Person
              </h2>

              <p className="text-primary-foreground/70 text-lg mt-6 leading-relaxed max-w-lg">
                Book a free site inspection and let our team walk you through premium estate locations across Abuja. 
                See the land, meet the team, and make an informed decision.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div key={h.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <span className="text-primary-foreground/80 text-sm font-medium">{h.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <a
                  href={getWhatsAppLink('Hello, I would like to book a site inspection for one of your estates.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] font-semibold text-primary-foreground transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={20} /> Book via WhatsApp
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold/5 rounded-[28px] blur-sm" />
                <form onSubmit={handleSubmit} className="relative bg-primary-foreground/5 backdrop-blur-xl rounded-3xl p-8 border border-primary-foreground/10">
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">Book Your Free Inspection</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Full Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                      { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+234 816 022 8215' },
                      { label: 'Email Address', key: 'email', type: 'email', placeholder: 'you@email.com' },
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
                      <label className="block text-primary-foreground/80 text-sm font-medium mb-1.5">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-primary-foreground/80 text-sm font-medium mb-1.5">Preferred Estate</label>
                      <select
                        value={form.estate}
                        onChange={(e) => setForm({ ...form, estate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      >
                        <option value="" className="text-foreground">Select an estate</option>
                        {estates.map((e) => (
                          <option key={e.slug} value={e.name} className="text-foreground">{e.name}</option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 !py-4 disabled:opacity-50 mt-2">
                      <Send size={18} />
                      {loading ? 'Submitting...' : 'Schedule Inspection'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionSection;
