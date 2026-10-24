import React from 'react';
import { X, Play, Coffee, Sparkles, Heart, Globe, Award } from 'lucide-react';
import { CAFE_NAME } from '../data/brand';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/85 backdrop-blur-md animate-fade-in">
      <div className="bg-cream rounded-3xl sm:rounded-[36px] max-w-3xl w-full p-6 sm:p-10 border border-sand shadow-warm-xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-espresso/70 hover:text-espresso hover:bg-sand/60 transition-colors"
          aria-label="Close story"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUR SHORT FILM & HERITAGE</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-espresso mb-4">
          The Story of {CAFE_NAME}
        </h3>

        {/* Video Player Mockup with Warm Cinematic Coffee Roasting */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-warm-md group bg-espresso-dark">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
            alt="Cinematic cafe interior and coffee roasting at Qahva House"
            className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
          />
          <div className="absolute inset-0 bg-espresso/30 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-caramel/90 text-cream flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream text-xs font-medium bg-espresso/60 backdrop-blur-sm px-4 py-2 rounded-xl">
            <span>Mini-Documentary: "From Seed to Sip" (3:45)</span>
            <span className="text-sand/80">4K Ultra HD</span>
          </div>
        </div>

        {/* Story Paragraphs & Milestones */}
        <div className="space-y-4 text-espresso/80 text-sm sm:text-base leading-relaxed font-light mb-8">
          <p>
            In the ancient trade ports of Mocha and the misty highlands of Kaffa, coffee was never just a drink—it was <em>Qahvah</em>, a revered social centerpiece where wanderers paused, scholars debated, and friends gathered in heartfelt companionship.
          </p>
          <p>
            When we opened our doors, we wanted to honor that timeless reverence. We partner with third-generation farming families who treat soil and biodiversity with profound care. Every crop is roasted on our vintage German cast-iron drum roaster, dialed in meticulously to draw out floral jasmine, stone fruit sweetness, and chocolate depth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-sand">
          <div className="p-4 rounded-2xl bg-sand/40 border border-sand text-center">
            <Globe className="w-6 h-6 text-caramel mx-auto mb-2" />
            <h4 className="font-serif font-bold text-espresso text-base">Direct Trade</h4>
            <p className="text-xs text-espresso/70 mt-1">Ethical farmer contracts paying 40% above fair-trade standard.</p>
          </div>
          <div className="p-4 rounded-2xl bg-sand/40 border border-sand text-center">
            <Coffee className="w-6 h-6 text-caramel mx-auto mb-2" />
            <h4 className="font-serif font-bold text-espresso text-base">Fresh Roasting</h4>
            <p className="text-xs text-espresso/70 mt-1">Small batches roasted weekly to guarantee maximum aromatics.</p>
          </div>
          <div className="p-4 rounded-2xl bg-sand/40 border border-sand text-center">
            <Heart className="w-6 h-6 text-caramel mx-auto mb-2" />
            <h4 className="font-serif font-bold text-espresso text-base">Community First</h4>
            <p className="text-xs text-espresso/70 mt-1">Sanctuaries built for warmth, slow mornings, and genuine connection.</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 bg-espresso hover:bg-coffee text-cream text-sm font-semibold rounded-full transition-colors"
        >
          Close Story
        </button>
      </div>
    </div>
  );
}
