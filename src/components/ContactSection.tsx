import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { sendContactForm } from '@/lib/emailjs';
import { toast } from 'sonner';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in required fields');
      return;
    }
    setLoading(true);
    try {
      await sendContactForm(form);
      toast.success('Message sent! We will get back to you shortly.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast.error('Failed to send. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Your name' },
                { label: 'Email Address *', key: 'email', type: 'email', placeholder: 'you@email.com' },
                { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+234 800 000 0000' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-foreground text-sm font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-foreground text-sm font-medium mb-2">Message *</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                />
              </div>
              <button type="submit" disabled={loading} className="btn-gold flex items-center gap-2 disabled:opacity-50">
                <Send size={18} />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-8">
              {[
                { icon: MapPin, label: 'Office Address', value: 'Wumba, Abuja, Federal Capital Territory, Nigeria' },
                { icon: Mail, label: 'Investment', value: 'invest@pros-properties.com' },
                { icon: Mail, label: 'General Enquiry', value: 'info@pros-properties.com' },
                { icon: Mail, label: 'Finance', value: 'finance@pros-properties.com' },
                { icon: Phone, label: 'Phone', value: '+234 800 000 0000' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.label}</h4>
                      <p className="text-muted-foreground mt-1">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
