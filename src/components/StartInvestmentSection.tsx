import { useState } from 'react';
import { Rocket, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { sendInspectionForm, getWhatsAppLink } from '@/lib/emailjs';
import { toast } from 'sonner';

const StartInvestmentSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', plan: '' });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!form.name || !form.phone || !form.email) {
  //     toast.error('Please fill in all required fields');
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     await sendInspectionForm(form);
  //     toast.success('Your information has been submitted! Our team will reach out shortly.');
  //     setForm({ name: '', phone: '', email: '', plan: '' });
  //   } catch {
  //     toast.error('Submission failed. Please try WhatsApp instead.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);

    try {
      // 2. Netlify Fetch Call
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "investment-inquiry", // A distinct name for this specific form
          ...form 
        }).toString(),
      });

      toast.success('Your information has been submitted! Our team will reach out shortly.');
      setForm({ name: '', phone: '', email: '', plan: '' });
    } catch {
      toast.error('Submission failed. Please try WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  };
  const benefits = [
    'No large upfront capital needed',
    'Join a verified investment group',
    'Full legal documentation provided',
    'Transparent progress tracking',
  ];

  return (
    <section id="start" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <Rocket size={16} className="text-gold" />
                <span className="text-gold text-sm font-medium">Get Started</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                Start Your <br className="hidden sm:block" />
                <span className="text-gradient-gold">Investment Journey</span>
              </h2>

              <p className="text-primary-foreground/70 text-lg mt-6 leading-relaxed max-w-lg">
                Take the first step toward property ownership. Fill in your details and our team will guide you through the process.
              </p>

              <div className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-gold shrink-0" />
                    <span className="text-primary-foreground/80 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={getWhatsAppLink('Hello, I\'m interested in starting a property investment plan')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] font-semibold text-primary-foreground transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-gold/5 rounded-[28px] blur-sm" />
                <form onSubmit={handleSubmit} className="relative bg-primary-foreground/5 backdrop-blur-xl rounded-3xl p-8 border border-primary-foreground/10" data-netlify="true" 
                  data-netlify-honeypot="bot-field">
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">Let's Talk About Your Investment</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your full name' },
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
                      <label className="block text-primary-foreground/80 text-sm font-medium mb-1.5">Preferred Plan</label>
                      <select
                        value={form.plan}
                        onChange={(e) => setForm({ ...form, plan: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      >
                        <option value="" className="text-foreground">Select a plan</option>
                        <option value="25000" className="text-foreground">₦25,000/month</option>
                        <option value="50000" className="text-foreground">₦50,000/month</option>
                        <option value="75000" className="text-foreground">₦75,000/month</option>
                        <option value="100000" className="text-foreground">₦100,000/month</option>
                      </select>
                    </div>

                    <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 !py-4 disabled:opacity-50 mt-2">
                      <Send size={18} />
                      {loading ? 'Submitting...' : 'Start Investing'}
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

export default StartInvestmentSection;
