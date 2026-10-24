import React, { useState } from 'react';
import { Coffee, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CAFE_NAME, CAFE_TAGLINE, BRAND_INFO } from '../data/brand';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [legalModal, setLegalModal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setStatus({
        state: 'error',
        message: 'Please provide a valid email address.'
      });
      return;
    }

    setStatus({
      state: 'success',
      message: 'Welcome to the inner circle! 10% off code sent to your inbox.'
    });
    setEmail('');
  };

  return (
    <footer className="bg-espresso text-cream pt-16 sm:pt-20 pb-12 border-t border-espresso-lighter relative overflow-hidden">
      {/* Decorative Warm Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-coffee/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-sand/15">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-caramel text-cream flex items-center justify-center shadow-md">
                <Coffee className="w-5 h-5 text-cream" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream">
                {CAFE_NAME}
              </span>
            </div>
            
            <p className="text-sand/70 text-sm italic font-serif">
              "{CAFE_TAGLINE}"
            </p>
            
            <p className="text-sand/60 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              {BRAND_INFO.shortDescription}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
                { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
                { icon: TwitterIcon, label: 'Twitter', href: 'https://twitter.com' },
                { icon: YoutubeIcon, label: 'YouTube', href: 'https://youtube.com' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-sand/10 hover:bg-caramel text-sand hover:text-cream flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-cream tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sand/70">
              <li>
                <a href="#home" className="hover:text-caramel transition-colors">Home & Roastery</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-caramel transition-colors">Seasonal Menu</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-caramel transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-caramel transition-colors">Our Story & Heritage</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-caramel transition-colors">Hours & Locations</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-cream tracking-wide">
              The Qahva Gazette
            </h4>
            <p className="text-sand/70 text-xs sm:text-sm leading-relaxed font-light">
              Receive secret tasting notes, seasonal release alerts, and fresh roaster updates right in your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2 pt-1">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status.state !== 'idle') setStatus({ state: 'idle', message: '' });
                  }}
                  placeholder="Enter your email address..."
                  aria-label="Email for newsletter"
                  className="w-full bg-sand/10 border border-sand/20 rounded-full px-4 py-3 pr-12 text-xs sm:text-sm text-cream placeholder-sand/40 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-all"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1.5 w-8 h-8 rounded-full bg-caramel hover:bg-caramel-light text-cream flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {status.state === 'error' && (
                <p className="text-red-300 text-xs mt-1 animate-fade-in">
                  {status.message}
                </p>
              )}
              {status.state === 'success' && (
                <div className="flex items-center gap-1.5 text-emerald-300 text-xs mt-1 animate-fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <p>© {new Date().getFullYear()} {CAFE_NAME}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-caramel transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-caramel transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Simple Legal Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-cream text-espresso rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-sand">
            <h3 className="font-serif text-2xl font-bold mb-3">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-sm text-espresso/75 leading-relaxed mb-6 font-light">
              {legalModal === 'privacy'
                ? 'At Qahva House, your privacy is deeply respected. We only collect the information necessary to serve your reservations, orders, and newsletter updates. We never sell your personal information.'
                : 'Welcome to Qahva House. By browsing our website and making table reservations, you agree to treat our staff and community with respect. Reservation hold times are guaranteed for up to 15 minutes.'}
            </p>
            <button
              onClick={() => setLegalModal(null)}
              className="w-full py-2.5 bg-espresso hover:bg-coffee text-cream text-sm font-semibold rounded-full transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
