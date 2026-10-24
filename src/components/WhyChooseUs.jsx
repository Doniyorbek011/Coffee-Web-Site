import React, { useState } from 'react';
import { ArrowRight, Sparkles, X, Coffee, Heart, Home } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FEATURES_DATA = [
  {
    id: 'quality',
    title: 'Sifatli qahva',
    subtitle: 'Plantatsiya mikro-partiyalari',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
    text: 'Biz Kolumbiya va Efiopiyaning barqaror fermer xoʻjaliklari bilan toʻgʻridan-toʻgʻri ishlaymiz va donalarni oʻzimizda kichik partiyalarda qovuramiz.',
    fullDetail: 'Qahva House ostonasidan kirgan har bir donaning oʻziga xos tarixi bor. Har bir hosil mavsumida SCA shkalasi boʻyicha 86+ ball toʻplagan eng sara mikro-partiyalarni tanlab olamiz. Aniq harorat nazoratiga ega qahva maydalagichlardan tortib La Marzocco mashinalaridagi ekstraksiyagacha — sifatga boʻlgan ishtiyoqimiz har bir qultumda aks etadi.'
  },
  {
    id: 'fresh',
    title: 'Yangi va mazali',
    subtitle: 'Erta tonggi novvoyxona',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    text: 'Mohir novvoylarimiz har tong soat 04:00 da ish boshlab, tabiiy sariyogʻli tilla kruassanlar va xushboʻy nordon nonlarni pishiradilar.',
    fullDetail: 'Mukammal qahva faqat eng yaxshi pishiriqlar bilan toʻliq uygʻunlik hosil qiladi deb ishonamiz. Mahalliy tabiiy sut mahsulotlari, tosh tegirmonda tortilgan toza un va sarxil mevalardan foydalanib, ogʻizda eriydigan nonushtalar va nozik fransuz shirinliklarini taqdim etamiz.'
  },
  {
    id: 'cozy',
    title: 'Shinam muhit',
    subtitle: 'Iliq va samimiy goʻsha',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    text: 'Tabiiy yogʻoch bezaklar, mayin iliq yorugʻlik, qoʻlda yasalgan sopol idishlar va yoqimli sokin musiqa — bu yer sizning ikkinchi uyingizdir.',
    fullDetail: 'Shiddatli hayot ritmidan xoli maskan sifatida loyihalangan qahvaxonamizda qulay mutolaa burchaklari, samimiy davralar uchun keng stollar va yuqori tezlikdagi Wi-Fi mavjud. Doʻstlar bilan diydorlashish yoki bir finjon issiq kofe bilan yolgʻiz qolib ijod qilish uchun eng yaxshi joy.'
  }
];

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.15 });
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>QAHVA TAJRIBASI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso tracking-tight mb-4">
            Nega aynan biz?
          </h2>
          <p className="text-sm sm:text-base text-espresso/70 leading-relaxed font-light">
            Har bir finjon qahva, har bir pishiriq va maskanimizning har bir burchagi yuksak mehr va haqiqiy hunarmandchilik bilan yaratilgan.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`group bg-sand/30 rounded-3xl overflow-hidden border border-sand/80 shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 transform hover:-translate-y-2 flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/90 backdrop-blur-md text-xs font-semibold text-espresso">
                    <Icon className="w-3.5 h-3.5 text-caramel" />
                    <span>{card.subtitle}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-espresso mb-3 group-hover:text-coffee transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-espresso/70 leading-relaxed mb-6 font-light">
                      {card.text}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => setSelectedFeature(card)}
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-coffee hover:text-caramel transition-colors group/btn pt-2 border-t border-sand/70 self-start w-full justify-between"
                  >
                    <span>Batafsil</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learn More Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-sand shadow-warm-xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-espresso/70 hover:bg-sand/60 hover:text-espresso transition-colors"
              aria-label="Modalni yopish"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden mb-5">
              <img
                src={selectedFeature.image}
                alt={selectedFeature.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-caramel">
              {selectedFeature.subtitle}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mt-1 mb-4">
              {selectedFeature.title}
            </h3>
            <p className="text-sm sm:text-base text-espresso/80 leading-relaxed mb-6 font-light">
              {selectedFeature.fullDetail}
            </p>
            <button
              onClick={() => setSelectedFeature(null)}
              className="w-full py-3 bg-espresso hover:bg-coffee text-cream font-medium rounded-full text-sm transition-colors"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
