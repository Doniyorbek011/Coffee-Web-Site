import React from 'react';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import Stats from './Stats';

export default function Hero({ onExploreMenu, onWatchStory }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image with Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=85"
          alt="Qahva House qahvaxonasining shinam va iliq interyeri"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Soft cream gradient from the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 sm:via-cream/90 lg:via-cream/80 to-cream/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Small uppercase label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/80 border border-sand text-xs font-semibold tracking-widest text-caramel uppercase mb-6 shadow-warm-sm">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>MAXSUS QAHVA</span>
          </div>

          {/* Huge Serif Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-espresso tracking-tight leading-[1.08] mb-6">
            Oddiy qahvadan{' '}
            <span className="text-caramel italic relative">
              koʻproq.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-caramel/40 -z-10"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q50 0 100 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Short Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-espresso/80 leading-relaxed max-w-xl mb-8 font-light">
            Masʼuliyat bilan tanlangan sara donalar, mohir baristalar qoʻli bilan damlangan boy taʼm va xotirjam dam olish, iliq suhbatlar hamda ilhom uchun yaratilgan maskan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                onExploreMenu();
              }}
              className="inline-flex items-center justify-center gap-2 bg-espresso text-cream hover:bg-coffee px-7 py-3.5 rounded-full font-medium text-base shadow-warm-md hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Menyuni koʻrish</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onWatchStory}
              type="button"
              className="inline-flex items-center justify-center gap-3 bg-cream/70 hover:bg-sand/70 backdrop-blur-md border border-espresso/25 text-espresso px-6 py-3.5 rounded-full font-medium text-base shadow-warm-sm hover:shadow-warm-md transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-caramel text-cream flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
              </div>
              <span>Hikoyamizni koʻring</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <Stats />
      </div>
    </section>
  );
}
