import React from 'react';
import { Users, Star, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ icon: Icon, targetValue, decimals = 0, suffix = '', label, isStarted }) {
  const count = useCountUp(targetValue, 1800, isStarted, decimals);

  return (
    <div className="flex items-center gap-4 py-2 px-3 sm:px-4">
      <div className="w-12 h-12 rounded-2xl bg-sand/60 border border-sand flex items-center justify-center flex-shrink-0 text-coffee shadow-warm-sm">
        <Icon className="w-5 h-5 text-caramel" />
      </div>
      <div>
        <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-espresso tracking-tight">
          {count}
          <span className="text-caramel ml-0.5">{suffix}</span>
        </div>
        <div className="text-xs sm:text-sm font-medium text-espresso/70 mt-0.5">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`w-full max-w-4xl mx-auto mt-12 sm:mt-16 bg-cream/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-warm-md border border-sand/80 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-sand/70 gap-4 sm:gap-0">
        <StatItem
          icon={Users}
          targetValue={10}
          suffix="K+"
          label="Happy Customers"
          isStarted={isVisible}
        />
        <StatItem
          icon={Star}
          targetValue={4.8}
          decimals={1}
          suffix="★"
          label="Average Rating"
          isStarted={isVisible}
        />
        <StatItem
          icon={MapPin}
          targetValue={3}
          suffix=""
          label="Artisan Locations"
          isStarted={isVisible}
        />
      </div>
    </div>
  );
}
