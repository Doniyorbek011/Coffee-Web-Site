import React, { useState } from 'react';
import { X, Search, Sparkles } from 'lucide-react';
import { FULL_MENU, MENU_CATEGORIES } from '../data/menu';
import MenuCard from './MenuCard';

export default function FullMenuModal({ isOpen, onClose, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredItems = FULL_MENU.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-espresso/80 backdrop-blur-md animate-fade-in">
      <div className="bg-cream rounded-3xl sm:rounded-[36px] max-w-5xl w-full h-[90vh] flex flex-col border border-sand shadow-warm-xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-sand bg-cream/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>THE COMPLETE COLLECTION</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso">
              Full House Menu
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search coffee, bakery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-sand/40 border border-sand rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-espresso placeholder-espresso/50 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
              />
              <Search className="w-4 h-4 text-espresso/40 absolute left-3 top-2.5" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2.5 rounded-full text-espresso/70 hover:text-espresso hover:bg-sand/60 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="px-6 sm:px-8 py-3 bg-sand/30 border-b border-sand overflow-x-auto flex items-center gap-2">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-espresso text-cream shadow-sm'
                  : 'bg-cream text-espresso/80 hover:bg-sand/60 border border-sand/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-sand/15">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-espresso/60">
              <p className="text-base font-serif">No delicious items match your search.</p>
              <p className="text-xs mt-1">Try searching for "latte", "croissant", or "toast".</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
