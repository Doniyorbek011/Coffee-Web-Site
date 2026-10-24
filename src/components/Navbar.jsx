import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Coffee, Calendar } from 'lucide-react';
import { CAFE_NAME } from '../data/brand';

export default function Navbar({ cartCount, onOpenReserve, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'menu', 'why-us', 'our-story', 'gallery', 'locations'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Our Story', href: '#our-story', id: 'our-story' },
    { name: 'Locations', href: '#locations', id: 'locations' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-warm-sm border-b border-sand/70 py-3.5'
          : 'bg-cream/70 backdrop-blur-sm border-b border-sand/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 text-espresso focus:outline-none"
            aria-label={`${CAFE_NAME} Home`}
          >
            <div className="w-10 h-10 rounded-full bg-espresso text-cream flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <Coffee className="w-5 h-5 text-sand" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso group-hover:text-coffee transition-colors">
                {CAFE_NAME}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-caramel font-semibold -mt-1 hidden sm:block">
                Artisan Roastery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-espresso font-semibold'
                      : 'text-espresso/75 hover:text-espresso'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-caramel rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Cart Counter Button */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative p-2.5 rounded-full text-espresso hover:bg-sand/60 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel"
              aria-label={`Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 bg-caramel text-cream font-bold text-xs rounded-full flex items-center justify-center shadow-sm animate-pulse-subtle">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Reserve a Table Pill Button */}
            <button
              onClick={onOpenReserve}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 bg-espresso text-cream hover:bg-coffee px-5 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-sm hover:shadow-warm-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso"
            >
              <Calendar className="w-4 h-4 text-caramel" />
              <span>Reserve a Table</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2.5 rounded-lg text-espresso hover:bg-sand/60 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-b border-sand shadow-warm-lg animate-fade-in">
          <div className="px-5 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-sand/80 text-espresso font-semibold'
                      : 'text-espresso/80 hover:bg-sand/40 hover:text-espresso'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-sand/70">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="w-full flex items-center justify-center gap-2 bg-espresso text-cream hover:bg-coffee py-3 rounded-full text-sm font-medium shadow-sm transition-colors"
              >
                <Calendar className="w-4 h-4 text-caramel" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
