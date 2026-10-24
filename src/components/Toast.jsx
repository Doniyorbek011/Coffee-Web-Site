import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function Toast({ message, onOpenCart, isVisible }) {
  if (!isVisible || !message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-espresso text-cream px-5 py-3.5 rounded-2xl shadow-warm-xl border border-sand/30 flex items-center gap-3.5 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-caramel text-cream flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-medium text-cream truncate">
            {message}
          </p>
          <span className="text-[11px] text-sand/70 block">
            Added to your order
          </span>
        </div>
        <button
          onClick={onOpenCart}
          className="text-xs font-semibold text-caramel hover:text-caramel-light flex items-center gap-1 transition-colors pl-2 border-l border-sand/20 whitespace-nowrap"
        >
          <span>View</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
