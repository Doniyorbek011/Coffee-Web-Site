import React, { useState } from 'react';
import { Plus, Check, Star } from 'lucide-react';

export default function MenuCard({ item, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <div className="group bg-cream rounded-3xl p-4 sm:p-5 border border-sand/90 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Card Image Container with Zoom effect */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-sand/30">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {item.badge && (
            <span className="absolute top-3 left-3 bg-espresso/85 backdrop-blur-md text-cream text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              {item.badge}
            </span>
          )}
          {item.rating && (
            <div className="absolute top-3 right-3 bg-cream/90 backdrop-blur-md text-espresso text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Star className="w-3 h-3 text-caramel fill-current" />
              <span>{item.rating}</span>
            </div>
          )}
        </div>

        {/* Category Label */}
        <div className="text-[11px] font-bold uppercase tracking-wider text-caramel mb-1.5">
          {item.category}
        </div>

        {/* Item Name */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-espresso group-hover:text-coffee transition-colors mb-2">
          {item.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed line-clamp-2 mb-4 font-light">
          {item.shortDescription}
        </p>
      </div>

      {/* Footer: Price and Add Button */}
      <div className="pt-3 border-t border-sand/70 flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-espresso/50 block font-medium">Price</span>
          <span className="font-serif text-xl sm:text-2xl font-bold text-espresso">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Round "+" Add Button */}
        <button
          onClick={handleAdd}
          type="button"
          aria-label={`Add ${item.name} to order`}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-warm-sm focus:outline-none focus:ring-2 focus:ring-caramel ${
            isAdded
              ? 'bg-emerald-700 text-white scale-105'
              : 'bg-espresso text-cream hover:bg-coffee active:scale-95'
          }`}
        >
          {isAdded ? (
            <Check className="w-5 h-5 transition-transform" />
          ) : (
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
          )}
        </button>
      </div>
    </div>
  );
}
