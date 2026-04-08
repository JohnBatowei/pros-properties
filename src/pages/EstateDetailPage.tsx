import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getEstateBySlug, statusColors } from '@/lib/estatesData';
import { MapPin, CheckCircle, ArrowLeft, X, CalendarDays, Send, MessageCircle } from 'lucide-react';
import { sendInspectionForm, getWhatsAppLink } from '@/lib/emailjs';
import { toast } from 'sonner';

const EstateDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const estate = getEstateBySlug(slug || '');
  const { ref, isVisible } = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', estate: estate?.name || '' });

  if (!estate) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">Estate Not Found</h1>
          <Link to="/estates" className="btn-gold mt-6 inline-block">View All Estates</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.date) {
      toast.error('Please fill in all fields');
      return;
    }
    setLoading(true);
    try {
      await sendInspectionForm({ ...form, estate: estate.name });
      toast.success('Appointment booked! We will contact you shortly.');
      setForm({ name: '', phone: '', email: '', date: '', estate: estate.name });
    } catch {
      toast.error('Failed to submit. Please try WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        {/* Hero */}
        <section className="relative pt-24 pb-0">
          <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <img src={estate.image} alt={estate.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <div className="container-max">
                <Link to="/estates" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold mb-4 transition-colors">
                  <ArrowLeft size={16} /> Back to All Estates
                </Link>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[estate.status]}`}>{estate.status}</span>
                  <span className="text-gold font-bold text-lg">{estate.price}</span>
                </div>
                <h1 className="font-display text-3xl sm:text-5xl font-bold text-primary-foreground">{estate.name}</h1>
                <div className="flex items-center gap-2 mt-3 text-primary-foreground/70">
                  <MapPin size={16} /> {estate.location}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="section-padding" ref={ref}>
          <div className="container-max">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">About This Estate</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{estate.longDescription}</p>

                <h3 className="font-display text-xl font-bold text-foreground mt-10 mb-5">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {estate.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border">
                      <CheckCircle size={18} className="text-gold shrink-0" />
                      <span className="text-foreground text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mt-10 mb-5">Gallery</h3>
                <div className="grid grid-cols-3 gap-3">
                  {estate.gallery.map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group" onClick={() => setLightbox(i)}>
                      <img src={img} alt={`${estate.name} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Appointment Sidebar */}
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="sticky top-28 glass-card p-6 rounded-2xl">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Let's Talk</h3>
                  <p className="text-muted-foreground text-sm mb-6">Book an appointment to learn more about {estate.name}.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { label: 'Full Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                      { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+234 816 022 8215' },
                      { label: 'Email', key: 'email', type: 'email', placeholder: 'you@email.com' },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-foreground text-xs font-medium mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-lg bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-foreground text-xs font-medium mb-1.5">Preferred Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-surface border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                      />
                    </div>
                    <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2 !py-3 text-sm disabled:opacity-50">
                      <Send size={16} />
                      {loading ? 'Submitting...' : 'Book Appointment'}
                    </button>
                  </form>

                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href={getWhatsAppLink(`Hello, I'm interested in ${estate.name}. I'd like to learn more.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-deep font-medium text-primary-foreground text-sm hover:scale-105 transition-transform"
                    >
                      <MessageCircle size={16} /> Chat on WhatsApp
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-muted-foreground text-xs">
                    <CalendarDays size={14} className="text-gold" />
                    Mon – Sat, 9AM – 5PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-primary-foreground hover:text-gold"><X size={32} /></button>
          <img src={estate.gallery[lightbox]} alt={estate.name} className="max-w-full max-h-[85vh] rounded-2xl object-contain" />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EstateDetailPage;
