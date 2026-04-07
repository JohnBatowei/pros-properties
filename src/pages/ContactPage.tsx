import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { sendContactForm, getWhatsAppLink } from '@/lib/emailjs';
import { toast } from 'sonner';

const contactInfo = [
  { icon: MapPin, label: 'Office Address', value: 'Wumba, Abuja, Federal Capital Territory, Nigeria' },
  { icon: Mail, label: 'Investment Enquiries', value: 'invest@pros-properties.com' },
  { icon: Mail, label: 'General Enquiry', value: 'info@pros-properties.com' },
  { icon: Mail, label: 'Finance', value: 'finance@pros-properties.com' },
  { icon: Phone, label: 'Phone', value: '+234 816 022 8215' },
  { icon: Clock, label: 'Working Hours', value: 'Monday – Saturday, 9AM – 5PM' },
];

const ContactPage = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        {/* Hero */}
        <section className="relative pt-32 pb-16 hero-gradient">
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-2xl mx-auto">
              Have questions about our estates or investment plans? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email Address *', key: 'email', type: 'email', placeholder: 'you@email.com' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+234 816 022 8215' },
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

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-green-deep font-medium text-primary-foreground hover:scale-105 transition-transform"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>

              {/* Info + Map */}
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-5 mb-10">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                          <Icon size={20} className="text-gold" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                          <p className="text-muted-foreground text-sm mt-0.5">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Map */}
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Find Us</h3>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125408.08252063887!2d7.3714!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pros Properties Office Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
