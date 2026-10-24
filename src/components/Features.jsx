import React from 'react';
import { Leaf, Flame, Sparkles, CupSoda } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FEATURES_LIST = [
  {
    icon: Leaf,
    title: 'Sustainably Sourced',
    desc: 'Direct-trade partnerships ensuring 100% fair pay to origin farmers.',
  },
  {
    icon: Flame,
    title: 'Locally Roasted',
    desc: 'Small-batch roasted in Seattle weekly for maximum aromatic profile.',
  },
  {
    icon: Sparkles,
    title: 'Cozy Spaces',
    desc: 'Ergonomic seating, warm natural textures, and relaxing ambient music.',
  },
  {
    icon: CupSoda,
    title: 'Specialty Drinks',
    desc: 'Signature house syrups crafted from real botanicals and spices.',
  },
];

export default function Features() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="py-14 sm:py-16 bg-sand/50 border-y border-sand/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {FEATURES_LIST.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 p-3 rounded-2xl transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-cream border border-sand flex items-center justify-center flex-shrink-0 text-coffee shadow-warm-sm">
                  <Icon className="w-6 h-6 text-caramel stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-espresso mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
