import { useState } from 'react';
import { Play, X, Sparkles, ShieldCheck, Users, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import videoThumbnail from '@/assets/estate-1.jpg';

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    { icon: ShieldCheck, label: 'Verified Properties Only' },
    { icon: Users, label: 'Structured Group Investment' },
    { icon: BarChart3, label: 'Transparent Process' },
  ];

  return (
    <section id="videos" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-background" />
      {/* Decorative ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative section-padding">
        <div className="container-max">
          {/* Header Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-sm font-medium">Watch & Learn</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Explore Our <span className="text-gradient-gold">Investment</span> Opportunities
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              See how our structured system helps you build wealth through property investment in Abuja.
            </p>
          </div>

          {/* Featured Video Card */}
          <div className={`mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className="relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-border/30 bg-navy"
              onClick={() => setActiveVideo('sySL_WzA4Xw')}
            >
              {/* Thumbnail with hover zoom */}
              <img 
                src={videoThumbnail} 
                alt="Investment Opportunity Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent z-10" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-300 group-hover:bg-secondary/20">
                <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_50px_rgba(212,175,55,0.4)]">
                  <Play size={32} className="text-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Video Info Overlay */}
              <div className="absolute bottom-8 left-8 z-20">
                <span className="px-3 py-1 rounded-full bg-gold/20 backdrop-blur-md text-gold text-xs font-semibold mb-3 inline-block border border-gold/30">
                  Featured Presentation
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground drop-shadow-md">
                  How Our Investment System Works
                </h3>
                <p className="text-primary-foreground/80 text-sm mt-2 max-w-md">
                  A comprehensive guide to building sustainable wealth with Pros-Properties.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className={`grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="glass-card p-6 text-center group hover:-translate-y-2 transition-all duration-300" style={{ transitionDelay: `${(i + 3) * 100}ms` }}>
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <p className="font-display font-bold text-foreground">{h.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

{/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-md flex items-center justify-center p-4" 
          onClick={() => setActiveVideo(null)} // Clicking the background cancels the video
        >
          <div 
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300" 
            onClick={(e) => e.stopPropagation()} // Prevents the video itself from closing the modal
          >
            
            {/* --- THE CANCEL BUTTON --- */}
            <button 
              onClick={() => setActiveVideo(null)} 
              className="absolute top-4 right-4 z-[110] bg-black/50 hover:bg-gold/80 backdrop-blur-md text-white p-2 rounded-full transition-all duration-300 group shadow-lg border border-white/20"
              title="Close video"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* YouTube Iframe */}
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`} 
              className="w-full h-full border-none" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              title="Pros Properties Video Player" 
            />
          </div>

          {/* Optional: Mobile-friendly large cancel label at the bottom */}
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute bottom-10 px-6 py-2 bg-white/10 text-white/70 hover:text-gold border border-white/20 rounded-full text-sm font-medium transition-all sm:hidden"
          >
            Tap anywhere to cancel
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoSection;