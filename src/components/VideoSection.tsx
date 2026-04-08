import { useState } from 'react';
<<<<<<< HEAD
import { Play, X, Sparkles, ShieldCheck, Users, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
=======
import { Play, X, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const videos = [
  {
    title: 'Estate Tour: Wumba Gardens',
    description: 'Take a virtual tour of our premium estate in Wumba, Abuja.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    embedId: 'dQw4w9WgXcQ',
    duration: '4:32',
  },
  {
    title: 'How Collective Investment Works',
    description: 'Learn how our investment model builds wealth over time.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    embedId: 'dQw4w9WgXcQ',
    duration: '6:15',
  },
  {
    title: 'Investor Success Stories',
    description: 'Hear from our investors who have achieved financial freedom.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    embedId: 'dQw4w9WgXcQ',
    duration: '8:03',
  },
];
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

<<<<<<< HEAD
  const highlights = [
    { icon: ShieldCheck, label: 'Verified Properties Only' },
    { icon: Users, label: 'Structured Group Investment' },
    { icon: BarChart3, label: 'Transparent Process' },
  ];

  return (
    <section id="videos" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background" />
=======
  return (
    <section id="videos" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-surface" />
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <div className="container-max">
<<<<<<< HEAD
=======
          {/* Header */}
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">Watch & Learn</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Explore Our <span className="text-gradient-gold">Investment</span> Opportunities
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
<<<<<<< HEAD
              See how our structured system helps you build wealth through property investment.
            </p>
          </div>

          {/* Featured Video */}
          <div className={`mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-border/30"
              onClick={() => setActiveVideo('dQw4w9WgXcQ')}
=======
              See our estates, understand our model, and hear from real investors who are building wealth with us.
            </p>
          </div>

          {/* Featured Video (Large) */}
          <div className={`mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
              onClick={() => setActiveVideo(videos[0].embedId)}
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
            >
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center z-20 group-hover:bg-secondary/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  <Play size={32} className="text-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
<<<<<<< HEAD
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold mb-2 inline-block">4:32</span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">How Our Investment System Works</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">Understand the structured path to property ownership</p>
=======
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold mb-2 inline-block">{videos[0].duration}</span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">{videos[0].title}</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">{videos[0].description}</p>
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Highlights */}
          <div className={`grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="glass-card p-6 text-center group hover:-translate-y-1 transition-all" style={{ transitionDelay: `${(i + 3) * 100}ms` }}>
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <p className="font-display font-bold text-foreground">{h.label}</p>
                </div>
              );
            })}
=======
          {/* Smaller Videos */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videos.slice(1).map((video, i) => (
              <div
                key={video.title}
                className={`glass-card overflow-hidden group cursor-pointer transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(i + 2) * 150}ms` }}
                onClick={() => setActiveVideo(video.embedId)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center group-hover:bg-secondary/40 transition-colors z-10">
                    <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play size={22} className="text-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-md bg-secondary/80 text-primary-foreground text-xs font-medium">{video.duration}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">{video.title}</h3>
                  <p className="text-muted-foreground mt-1.5 text-sm line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/media" className="btn-outline-gold inline-flex items-center gap-2 !py-3 !px-8 text-sm">
              View All Media
            </Link>
>>>>>>> f657e7538ac4c85d88855a9412c8e3d9cc642fec
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 text-primary-foreground hover:text-gold transition-colors">
              <X size={32} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full rounded-2xl shadow-2xl"
              allowFullScreen
              allow="autoplay"
              title="Video player"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
