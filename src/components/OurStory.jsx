import React from 'react';
import { Sparkles, ArrowRight, Award, Coffee } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function OurStory({ onOpenStoryModal }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="our-story" className="py-20 lg:py-28 bg-sand/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 rounded-3xl sm:rounded-[36px] overflow-hidden shadow-warm-xl border border-sand/70 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Dark Espresso Block on the Left (5 cols) */}
          <div className="lg:col-span-5 bg-espresso text-cream p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10">
            {/* Subtle decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-coffee/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-caramel" />
                <span>MEHR BILAN SUGʻORILGAN</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight leading-tight mb-6">
                Yaxshi insonlar uchun{' '}
                <span className="text-caramel italic">maskan.</span>
              </h2>

              <p className="text-sand/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Qadimiy <em className="text-caramel font-normal">“Qahva”</em> anʼanalari mehmondoʻstlik va samimiyatga asoslangan — bu ichimlik shunchaki tonggi odat emas, balki doʻstona diydor va iliq suhbatlar vositasidir.
              </p>

              <p className="text-sand/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
                2019-yilda kichik qovurish ustaxonasi sifatida ish boshlagan Qahva House har bir donaga va mehnatkash dehqonlarga hurmat bilan yondashadi. Bugun qahvaxonalarimiz har bir mehmon oʻz uyidek his qiladigan shinam makondir.
              </p>
            </div>

            <div className="pt-6 border-t border-sand/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                onClick={onOpenStoryModal}
                type="button"
                className="inline-flex items-center gap-2.5 bg-caramel hover:bg-caramel-light text-cream px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-md active:translate-y-0"
              >
                <span>Hikoyamiz</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-sand/60 text-xs">
                <Award className="w-4 h-4 text-caramel" />
                <span>Mukofotga sazovor qovuruvchi</span>
              </div>
            </div>
          </div>

          {/* Big Photo on the Right (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full bg-espresso-dark">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
              alt="Qahva House ustasi mehr bilan qahva damlamoqda"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-espresso/40 lg:to-transparent" />

            {/* Floating Quote Stamp */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-cream/95 backdrop-blur-md text-espresso p-4 sm:p-5 rounded-2xl shadow-warm-lg max-w-xs border border-sand/80">
              <div className="flex items-center gap-2 mb-1.5">
                <Coffee className="w-4 h-4 text-caramel" />
                <span className="text-[11px] uppercase font-bold tracking-wider text-caramel">
                  Usta qovuruvchi oʻgiti
                </span>
              </div>
              <p className="text-xs text-espresso/80 italic font-serif leading-snug">
                “Haqiqiy qahva shoshqaloqlikni yoqtirmaydi. Undan mehr bilan lazzatlaniladi va ochiq koʻngil bilan ulashiladi.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
