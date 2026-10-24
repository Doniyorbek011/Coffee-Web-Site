import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SeasonalMenu from './components/SeasonalMenu';
import WhyChooseUs from './components/WhyChooseUs';
import OurStory from './components/OurStory';
import Features from './components/Features';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import CartDrawer from './components/CartDrawer';
import FullMenuModal from './components/FullMenuModal';
import StoryModal from './components/StoryModal';
import Toast from './components/Toast';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  // Calculate total items in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });

    // Show temporary toast notification
    setToast({ visible: true, message: item.name });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 2800);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: newQuantity } : i))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-espresso selection:bg-caramel selection:text-cream relative font-sans">
      {/* 1. Navbar (Sticky, Blurred Background, Cart Counter, Reserve Button, Mobile Hamburger) */}
      <Navbar
        cartCount={cartCount}
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* 2. Hero Section with soft cream gradient, serif heading, stats count-up */}
        <Hero
          onExploreMenu={handleExploreMenu}
          onWatchStory={() => setIsStoryOpen(true)}
        />

        {/* 3. Seasonal Favourites (4 rounded cards with image zoom, "+" add button) */}
        <SeasonalMenu
          onAddToCart={handleAddToCart}
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
        />

        {/* 4. Why Choose Us (3 cards with image, title, text, Learn More button) */}
        <WhyChooseUs />

        {/* 5. Our Story (dark espresso block on left, big photo on right) */}
        <OurStory onOpenStoryModal={() => setIsStoryOpen(true)} />

        {/* 6. Features Strip (4 items with line icons) */}
        <Features />

        {/* 7. Visit Us Today (text + opening hours + Find Our Location + 3-photo gallery) */}
        <VisitUs onOpenReserve={() => setIsReserveOpen(true)} />
      </main>

      {/* 8. Footer (dark, logo, newsletter with validation & success, social icons, links) */}
      <Footer />

      {/* Modals & Drawers */}
      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      {/* Toast Notification on Add to Cart */}
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onOpenCart={() => {
          setToast({ visible: false, message: '' });
          setIsCartOpen(true);
        }}
      />
    </div>
  );
}
