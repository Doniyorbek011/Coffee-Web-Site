import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Sparkles, ExternalLink, X } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function VisitUs({ onOpenReserve }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
      alt: 'Sunlit wooden seating area with plants at Qahva House',
      caption: 'The Reading Nook • Flagship'
    },
    {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      alt: 'Artisan ceramic coffee cups on natural reclaimed oak table',
      caption: 'Morning Brews • Fresh Extraction'
    },
    {
      url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80',
      alt: 'Warm entrance and outdoor greenery seating terrace',
      caption: 'Garden Terrace • Downtown'
    }
  ];

  return (
    <section id="locations" className="py-20 lg:py-28 bg-cream relative">
      <div id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Left Column: Text + Opening Hours + Find Our Location Button (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>WARM WELCOME AWAITS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight leading-tight mb-5">
              Visit Us <span className="text-caramel italic">Today</span>
            </h2>

            <p className="text-sm sm:text-base text-espresso/75 leading-relaxed font-light mb-8">
              Step in out of the cold, breathe in the fresh roasted aroma, and let our welcoming baristas craft your favorite morning or afternoon ritual.
            </p>

            {/* Opening Hours Box */}
            <div className="bg-sand/40 border border-sand rounded-3xl p-6 mb-8 shadow-warm-sm">
              <div className="flex items-center gap-2.5 text-espresso font-serif text-lg font-bold mb-4">
                <Clock className="w-5 h-5 text-caramel" />
                <span>Opening Hours</span>
                <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Open Today
                </span>
              </div>

              <div className="space-y-3">
                {BRAND_INFO.hours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex items-center justify-between text-xs sm:text-sm border-b border-sand/60 pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="text-espresso/70 font-medium">{schedule.days}</span>
                    <span className="text-espresso font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-sand/60 flex items-center gap-2 text-xs text-espresso/70">
                <MapPin className="w-4 h-4 text-caramel flex-shrink-0" />
                <span>Main: {BRAND_INFO.address}, {BRAND_INFO.city}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => setShowLocationModal(true)}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-espresso text-cream hover:bg-coffee px-6 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-warm-sm hover:shadow-warm-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4 text-caramel" />
                <span>Find Our Location</span>
              </button>

              <button
                onClick={onOpenReserve}
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-sand/70 hover:bg-sand border border-sand-dark text-espresso px-6 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors"
              >
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3-Photo Gallery (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Photo 1: Large Span */}
              <div
                onClick={() => setSelectedPhoto(galleryPhotos[0])}
                className="sm:col-span-2 group relative aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer shadow-warm-md border border-sand/80"
              >
                <img
                  src={galleryPhotos[0].url}
                  alt={galleryPhotos[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
                  <span className="font-serif text-base sm:text-lg font-semibold tracking-wide">
                    {galleryPhotos[0].caption}
                  </span>
                  <span className="text-xs bg-cream/20 backdrop-blur-md px-3 py-1 rounded-full border border-cream/30">
                    View
                  </span>
                </div>
              </div>

              {/* Photo 2 */}
              <div
                onClick={() => setSelectedPhoto(galleryPhotos[1])}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-warm-sm border border-sand/80"
              >
                <img
                  src={galleryPhotos[1].url}
                  alt={galleryPhotos[1].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-cream">
                  <span className="font-serif text-sm font-semibold tracking-wide block truncate">
                    {galleryPhotos[1].caption}
                  </span>
                </div>
              </div>

              {/* Photo 3 */}
              <div
                onClick={() => setSelectedPhoto(galleryPhotos[2])}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-warm-sm border border-sand/80"
              >
                <img
                  src={galleryPhotos[2].url}
                  alt={galleryPhotos[2].alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-cream">
                  <span className="font-serif text-sm font-semibold tracking-wide block truncate">
                    {galleryPhotos[2].caption}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-sand shadow-warm-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-espresso/70 hover:bg-sand/60 hover:text-espresso transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>3 SANCTUARIES</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mb-6">
              Our Locations
            </h3>

            <div className="space-y-4">
              {BRAND_INFO.locations.map((loc) => (
                <div
                  key={loc.name}
                  className="p-5 rounded-2xl bg-sand/35 border border-sand/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="font-serif text-lg font-bold text-espresso">
                      {loc.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-espresso/70 mt-1">
                      {loc.address}
                    </p>
                    <p className="text-xs text-caramel font-medium mt-1">
                      {loc.features}
                    </p>
                    <p className="text-xs text-espresso/60 mt-1">
                      {loc.hours}
                    </p>
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-espresso text-cream hover:bg-coffee rounded-full text-xs font-medium self-start sm:self-center transition-colors whitespace-nowrap"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowLocationModal(false)}
              className="w-full mt-6 py-3 bg-sand hover:bg-sand-dark text-espresso font-semibold rounded-full text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Photo Preview Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/90 backdrop-blur-md animate-fade-in cursor-zoom-out"
        >
          <div className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-espresso/80 text-cream hover:bg-espresso transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.alt}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-3xl"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-espresso/80 text-cream text-center font-serif text-lg">
              {selectedPhoto.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
