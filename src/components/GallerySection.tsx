import { useState } from 'react';
import { X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import estate1 from '@/assets/estate-1.jpg';
import estate2 from '@/assets/estate-2.jpg';
import estate3 from '@/assets/estate-3.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import heroImg from '@/assets/hero-estate.jpg';

const images = [
  { src: heroImg, alt: 'Aerial view of Pros Properties estate' },
  { src: estate1, alt: 'Estate road and houses' },
  { src: estate3, alt: 'Modern duplex houses' },
  { src: project1, alt: 'Completed estate aerial' },
  { src: estate2, alt: 'Land ready for development' },
  { src: project2, alt: 'Delivered residential estate' },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="container-max">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">Our Portfolio</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-primary-foreground hover:text-gold"><X size={32} /></button>
          <img src={images[lightbox].src} alt={images[lightbox].alt} className="max-w-full max-h-[85vh] rounded-2xl object-contain" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
