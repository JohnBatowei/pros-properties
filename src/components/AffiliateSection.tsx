import { useState } from 'react';
import { UserPlus, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { sendAffiliateForm } from '@/lib/emailjs';
import { toast } from 'sonner';

const AffiliateSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!form.name || !form.phone || !form.email) {
  //     toast.error('Please fill in all fields');
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     await sendAffiliateForm(form);
  //     toast.success('Application submitted! We will reach out shortly.');
  //     setForm({ name: '', phone: '', email: '' });
  //   } catch {
  //     toast.error('Submission failed. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error('Please fill in all fields');
      return;
    }
    setLoading(true);

    try {
      // Netlify AJAX submission
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "affiliate-application",
          ...form 
        }).toString(),
      });

      toast.success('Application submitted! We will reach out shortly.');
      setForm({ name: '', phone: '', email: '' });
    } catch {
      toast.error('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }; 
  return (
    <section className="section-padding hero-gradient" ref={ref}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Earn With Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 leading-tight">
              Join Our Team as an <span className="text-gradient-gold">Affiliate Marketer</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mt-6 leading-relaxed">
              Join our collective wealth creation movement. Earn attractive commissions by 
              referring investors to Pros-Properties. Help everyday income earners bridge the gap 
              to sustainable wealth, no capital needed, just your network and influence.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <UserPlus size={24} className="text-gold" />
              <p className="text-primary-foreground/60 text-sm">Join 100+ affiliates already earning with us</p>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="bg-background/10 backdrop-blur-xl rounded-3xl p-8 border border-primary-foreground/10" data-netlify="true"
              data-netlify-honeypot="bot-field">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">Become an Affiliate</h3>
              <div className="space-y-5">
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+234 800 000 0000' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'you@email.com' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-primary-foreground/80 text-sm font-medium mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                    />
                  </div>
                ))}
                <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 !py-4 disabled:opacity-50">
                  <Send size={18} />
                  {loading ? 'Submitting...' : 'Apply Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
