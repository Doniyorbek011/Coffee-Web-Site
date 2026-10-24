import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO, CAFE_NAME } from '../data/brand';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00',
    guests: '2',
    location: BRAND_INFO.locations[0].name,
    seatingPreference: 'Shinam burchak / Deraza oldi'
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Iltimos, toʻliq ismingizni kiriting.';
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!phoneClean || phoneClean.length < 7) {
      errs.phone = 'Iltimos, toʻgʻri telefon raqamingizni kiriting.';
    }
    if (!formData.date) {
      errs.date = 'Iltimos, tashrif sanasini tanlang.';
    }
    if (!formData.time) {
      errs.time = 'Iltimos, qulay vaqtni tanlang.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    const code = 'QHV-' + Math.floor(100000 + Math.random() * 900000);
    setReservationDetails({ ...formData, code });
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setReservationDetails(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-cream rounded-3xl sm:rounded-[32px] max-w-xl w-full p-6 sm:p-8 border border-sand shadow-warm-xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-espresso/60 hover:text-espresso hover:bg-sand/60 transition-colors"
          aria-label="Oynani yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STOL BAND QILISH</span>
            </div>
            
            <h3 id="reservation-title" className="font-serif text-2xl sm:text-3xl font-bold text-espresso mb-2">
              Stol band qilish
            </h3>
            <p className="text-xs sm:text-sm text-espresso/70 mb-6 font-light">
              {CAFE_NAME} maskaniga tashrif buyuring. Yangi damlangan qahva va iliq mehmondoʻstlikdan bahramand boʻling. Band qilingan stollar 15 daqiqa davomida saqlanadi.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Location Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                  Filialni tanlang
                </label>
                <div className="relative">
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-sand/30 border border-sand rounded-xl px-4 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors appearance-none"
                  >
                    {BRAND_INFO.locations.map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name} — {loc.address}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-caramel absolute right-3.5 top-3 pointer-events-none" />
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                    Ism *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Doniyorbek Hazratqulov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-sand/30 border rounded-xl pl-9 pr-3 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-1 transition-colors ${
                        errors.name ? 'border-red-400 focus:ring-red-400' : 'border-sand focus:border-caramel focus:ring-caramel'
                      }`}
                    />
                    <User className="w-4 h-4 text-espresso/50 absolute left-3 top-3" />
                  </div>
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                    Telefon raqam *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="+998 (90) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-sand/30 border rounded-xl pl-9 pr-3 py-2.5 text-sm text-espresso placeholder-espresso/40 focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-sand focus:border-caramel focus:ring-caramel'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-espresso/50 absolute left-3 top-3" />
                  </div>
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                    Sana *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-sand/30 border border-sand rounded-xl pl-9 pr-3 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                    />
                    <Calendar className="w-4 h-4 text-espresso/50 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                    Vaqt *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-sand/30 border border-sand rounded-xl pl-9 pr-8 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors appearance-none"
                    >
                      {[
                        '08:00', '09:00', '10:00', '11:30',
                        '13:00', '14:30', '16:00', '17:30', '19:00', '20:00'
                      ].map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <Clock className="w-4 h-4 text-espresso/50 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              {/* Guests & Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                    Mehmonlar soni
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-sand/30 border border-sand rounded-xl pl-9 pr-8 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, '7+ (Alohida xona)'].map((num) => (
                        <option key={num} value={num}>
                          {num} {typeof num === 'number' ? 'kishi' : ''}
                        </option>
                      ))}
                    </select>
                    <Users className="w-4 h-4 text-espresso/50 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                    Joylashuv afzalligi
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                    className="w-full bg-sand/30 border border-sand rounded-xl px-4 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                  >
                    <option value="Shinam burchak / Deraza oldi">Shinam burchak / Deraza oldi</option>
                    <option value="Espresso bar peshtaxtasi">Espresso bar peshtaxtasi</option>
                    <option value="Ochiq yozgi ayvon">Ochiq yozgi ayvon</option>
                    <option value="Sokin mutolaa stoli">Sokin mutolaa stoli</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-espresso hover:bg-coffee text-cream font-semibold rounded-full text-sm shadow-warm-md hover:shadow-warm-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Band qilish
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-caramel">
              BAND QILISH TASDIQLANDI
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mt-1 mb-2">
              Sizni kutib olishdan mamnunmiz!
            </h3>
            <p className="text-sm text-espresso/70 max-w-md mx-auto mb-6">
              Tasdiqlash xabarnomasi va eslatma quyidagi raqamga yuborildi:{' '}
              <span className="font-semibold text-espresso">{reservationDetails?.phone}</span>.
            </p>

            <div className="bg-sand/40 border border-sand rounded-2xl p-5 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 mb-6">
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Band qilish kodi:</span>
                <span className="font-mono font-bold text-coffee">{reservationDetails?.code}</span>
              </div>
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Mijoz:</span>
                <span className="font-semibold text-espresso">{reservationDetails?.name}</span>
              </div>
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Sana va vaqt:</span>
                <span className="font-semibold text-espresso">
                  {reservationDetails?.date}, soat {reservationDetails?.time}
                </span>
              </div>
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Mehmonlar soni:</span>
                <span className="font-semibold text-espresso">{reservationDetails?.guests} kishi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-espresso/60">Filial:</span>
                <span className="font-semibold text-espresso">{reservationDetails?.location}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="py-3 px-8 bg-espresso hover:bg-coffee text-cream text-sm font-semibold rounded-full transition-colors"
            >
              Tushunarli
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
