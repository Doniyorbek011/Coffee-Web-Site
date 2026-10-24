import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO, CAFE_NAME } from '../data/brand';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    guests: '2',
    location: BRAND_INFO.locations[0].name,
    seatingPreference: 'Cozy Nook / Window'
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name.';
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!phoneClean || phoneClean.length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.date) {
      errs.date = 'Please select a reservation date.';
    }
    if (!formData.time) {
      errs.time = 'Please pick a preferred time.';
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
          aria-label="Close reservation dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-caramel uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TABLE RESERVATION</span>
            </div>
            
            <h3 id="reservation-title" className="font-serif text-2xl sm:text-3xl font-bold text-espresso mb-2">
              Book Your Experience
            </h3>
            <p className="text-xs sm:text-sm text-espresso/70 mb-6 font-light">
              Join us at {CAFE_NAME} for fresh handcrafted coffee and comfortable hospitality. Reservations are held for 15 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Location Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                  Select Location
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
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Eleanor Vance"
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
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
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
                    Date *
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
                    Time Slot *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-sand/30 border border-sand rounded-xl pl-9 pr-8 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors appearance-none"
                    >
                      {[
                        '08:00 AM', '09:00 AM', '10:00 AM', '11:30 AM',
                        '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
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
                    Number of Guests
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-sand/30 border border-sand rounded-xl pl-9 pr-8 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, '7+ (Private Room)'].map((num) => (
                        <option key={num} value={num}>
                          {num} {typeof num === 'number' && num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                    <Users className="w-4 h-4 text-espresso/50 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-1.5">
                    Seating Preference
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                    className="w-full bg-sand/30 border border-sand rounded-xl px-4 py-2.5 text-sm text-espresso focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                  >
                    <option value="Cozy Nook / Window">Cozy Nook / Window</option>
                    <option value="Espresso Bar High-Top">Espresso Bar High-Top</option>
                    <option value="Outdoor Sunlit Patio">Outdoor Sunlit Patio</option>
                    <option value="Quiet Reading Table">Quiet Reading Table</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-espresso hover:bg-coffee text-cream font-semibold rounded-full text-sm shadow-warm-md hover:shadow-warm-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Confirm Reservation
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
              BOOKING CONFIRMED
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mt-1 mb-2">
              We look forward to hosting you!
            </h3>
            <p className="text-sm text-espresso/70 max-w-md mx-auto mb-6">
              A confirmation text message and calendar reminder have been sent to{' '}
              <span className="font-semibold text-espresso">{reservationDetails?.phone}</span>.
            </p>

            <div className="bg-sand/40 border border-sand rounded-2xl p-5 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 mb-6">
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Booking Code:</span>
                <span className="font-mono font-bold text-coffee">{reservationDetails?.code}</span>
              </div>
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Reserved For:</span>
                <span className="font-semibold text-espresso">{reservationDetails?.name}</span>
              </div>
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Date & Time:</span>
                <span className="font-semibold text-espresso">
                  {reservationDetails?.date} at {reservationDetails?.time}
                </span>
              </div>
              <div className="flex justify-between border-b border-sand/60 pb-2">
                <span className="text-espresso/60">Party Size:</span>
                <span className="font-semibold text-espresso">{reservationDetails?.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-espresso/60">Location:</span>
                <span className="font-semibold text-espresso">{reservationDetails?.location}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="py-3 px-8 bg-espresso hover:bg-coffee text-cream text-sm font-semibold rounded-full transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
