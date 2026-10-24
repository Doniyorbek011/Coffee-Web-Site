import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import MenuCard from './MenuCard';
import { SEASONAL_FAVOURITES } from '../data/menu';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SeasonalMenu({ onAddToCart, onOpenFullMenu }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="menu" className="py-20 lg:py-28 bg-sand/35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Title on Left, Description & View Full Menu on Right */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Title */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>HANDCRAFTED DELIGHTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight">
              Seasonal Favourites
            </h2>
          </div>

          {/* Right Description & Button */}
          <div className="max-w-md flex flex-col sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center gap-4">
            <p className="text-sm sm:text-base text-espresso/75 leading-relaxed font-light">
              Carefully curated signature recipes celebrating fresh harvest micro-lots and artisan morning bakery.
            </p>
            <button
              onClick={onOpenFullMenu}
              type="button"
              className="inline-flex items-center gap-2 bg-espresso text-cream hover:bg-coffee px-5 py-3 rounded-full text-sm font-medium tracking-wide whitespace-nowrap shadow-warm-sm hover:shadow-warm-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Full Menu</span>
              <ArrowUpRight className="w-4 h-4 text-caramel" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SEASONAL_FAVOURITES.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <MenuCard item={item} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
