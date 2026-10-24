import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-espresso/70 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream shadow-warm-xl border-l border-sand flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-sand flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-sand/60 flex items-center justify-center text-espresso">
                <ShoppingBag className="w-4 h-4 text-caramel" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-espresso">
                  Your Order
                </h3>
                <span className="text-xs text-espresso/60">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items selected
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-espresso/60 hover:text-espresso hover:bg-sand/60 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-sand/40 flex items-center justify-center mx-auto mb-4 text-espresso/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-espresso mb-1">
                  Your order is empty
                </h4>
                <p className="text-xs sm:text-sm text-espresso/60 max-w-xs mx-auto mb-6">
                  Click the "+" button on any seasonal or menu item to add fresh brews and bakery treats.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-espresso text-cream text-xs font-semibold rounded-full hover:bg-coffee transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-sand/30 rounded-2xl border border-sand/80 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm font-bold text-espresso truncate">
                      {item.name}
                    </h5>
                    <span className="text-xs text-caramel font-semibold block">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-cream border border-sand flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center text-espresso">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-cream border border-sand flex items-center justify-center text-espresso hover:bg-sand transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right flex flex-col justify-between items-end self-stretch">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-espresso/40 hover:text-red-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <span className="font-serif text-sm font-bold text-espresso">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-sand/40 border-t border-sand space-y-3">
              <div className="space-y-1.5 text-xs text-espresso/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-espresso">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-espresso">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-espresso pt-2 border-t border-sand/70">
                  <span>Total Due</span>
                  <span className="font-serif text-lg text-espresso">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert(`Thank you! Order of $${total.toFixed(2)} placed for pickup at Qahva House Flagship.`);
                  onClearCart();
                  onClose();
                }}
                className="w-full py-3.5 bg-espresso hover:bg-coffee text-cream text-sm font-semibold rounded-full flex items-center justify-center gap-2 shadow-warm-md transition-colors"
              >
                <span>Proceed to Order Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
