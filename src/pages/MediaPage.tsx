import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/PageTransition';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Play, X } from 'lucide-react';
import estate1 from '@/assets/estate-1.jpg';
import estate2 from '@/assets/estate-2.jpg';
import estate3 from '@/assets/estate-3.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import heroImg from '@/assets/hero-estate.jpg';

const allVideos = [
  { title: 'Estate Tour: Wumba Gardens', description: 'Take a virtual tour of our premium estate in Wumba, Abuja.', embedId: 'dQw4w9WgXcQ' },
  { title: 'How Collective Investment Works', description: 'Learn how our investment model builds wealth over time.', embedId: 'dQw4w9WgXcQ' },
  { title: 'Investor Success Stories', description: 'Hear from our investors who have achieved financial freedom.', embedId: 'dQw4w9WgXcQ' },
  { title: 'Property Acquisition Process', description: 'See how we identify, evaluate, and acquire premium properties.', embedId: 'dQw4w9WgXcQ' },
  { title: 'Kuje Estate Walkthrough', description: 'Walk through our completed Kuje Premium Gardens estate.', embedId: 'dQw4w9WgXcQ' },
  { title: 'Why Real Estate in Abuja', description: 'Understand why Abuja remains Nigeria\'s hottest real estate market.', embedId: 'dQw4w9WgXcQ' },
];

const allImages = [
  { src: heroImg, alt: 'Aerial view of Pros Properties estate' },
  { src: estate1, alt: 'Estate road and houses' },
  { src: estate2, alt: 'Land ready for development' },
  { src: estate3, alt: 'Modern duplex houses' },
  { src: project1, alt: 'Completed estate aerial' },
  { src: project2, alt: 'Delivered residential estate' },
];

const MediaPage = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <section className="relative pt-32 pb-20 hero-gradient">
          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Media Gallery</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mt-4">
              Videos & <span className="text-gradient-gold">Gallery</span>
            </h1>
          </div>
        </section>

        <section className="section-padding" ref={ref}>
          <div className="container-max">
            {/* Videos */}
            <div className={`mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Videos</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allVideos.map((video, i) => (
                  <div
                    key={video.title}
                    className="glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-1"
                    onClick={() => setActiveVideo(video.embedId)}
                  >
                    <div className="relative aspect-video bg-navy overflow-hidden">
                      <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play size={24} className="text-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-foreground">{video.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                    onClick={() => setLightbox(i)}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-[100] bg-secondary/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
            <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-primary-foreground hover:text-gold"><X size={32} /></button>
              <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} className="w-full h-full rounded-2xl" allowFullScreen allow="autoplay" title="Video player" />
            </div>
          </div>
        )}

        {/* Image Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-primary-foreground hover:text-gold"><X size={32} /></button>
            <img src={allImages[lightbox].src} alt={allImages[lightbox].alt} className="max-w-full max-h-[85vh] rounded-2xl object-contain" />
          </div>
        )}
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MediaPage;
