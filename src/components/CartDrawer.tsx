import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './Button';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  onNavigateToShop: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onNavigateToShop }) => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    promoCode,
    discount,
    applyPromo,
    removePromo,
    freeShippingThreshold,
    shippingRemaining,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const ok = applyPromo(inputCode);
    if (!ok) {
      setPromoError(true);
      setTimeout(() => setPromoError(false), 2500);
    } else {
      setInputCode('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#064D3B', '#C89B3C', '#7A1624', '#F6F0E4']
      });
      setTimeout(() => {
        clearCart();
        setOrderPlaced(false);
        closeCart();
      }, 3500);
    }, 1500);
  };

  const freeShippingProgress = Math.min(
    100,
    ((freeShippingThreshold - shippingRemaining) / freeShippingThreshold) * 100
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="absolute inset-0 bg-[#002117]/70 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-[#F6F0E4] border-l-2 border-[#C89B3C] shadow-2xl flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 bg-[#EFE6D4] border-b border-[#C89B3C]/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/asli_aroma_logo.png"
                    alt="ASLI AROMA™ Crest"
                    className="w-8 h-8 object-contain filter drop-shadow-xs"
                  />
                  <h3 className="font-serif text-lg font-medium text-[#241711]">
                    ASLI AROMA™ Vault
                  </h3>
                  <span className="text-xs font-mono bg-[#064D3B] text-[#F6F0E4] px-2 py-0.5 border border-[#C89B3C]/40">
                    {totalItems} items
                  </span>
                </div>

                <button
                  onClick={closeCart}
                  className="p-1.5 text-[#241711] hover:text-[#7A1624] border border-[#C89B3C]/40 hover:border-[#C89B3C] transition-colors"
                  aria-label="Close cart"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="px-6 py-3 bg-[#064D3B] text-[#F6F0E4] border-b border-[#C89B3C]/30 text-xs">
                {shippingRemaining > 0 ? (
                  <p className="font-mono text-[11px] mb-1.5 flex items-center justify-between">
                    <span>Add ₹{shippingRemaining.toFixed(0)} more for FREE Heritage Shipping</span>
                    <span className="text-[#C89B3C]">₹999</span>
                  </p>
                ) : (
                  <p className="font-mono text-[11px] text-[#C89B3C] mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>You unlocked Complimentary Express Shipping across India!</span>
                  </p>
                )}

                <div className="w-full bg-[#002117] h-1.5 overflow-hidden">
                  <div
                    className="bg-[#C89B3C] h-full transition-all duration-500 ease-out"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="p-6 flex-grow overflow-y-auto space-y-4">
                {orderPlaced ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-[#EFE6D4] border border-[#C89B3C] my-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-3">
                      <img
                        src="/assets/asli_aroma_logo.png"
                        alt="ASLI AROMA™ Crest"
                        className="w-full h-full object-contain filter drop-shadow-sm"
                      />
                    </div>
                    <h4 className="font-serif text-2xl font-medium text-[#241711]">
                      Royal Consignment Reserved!
                    </h4>
                    <p className="text-xs text-[#404944] mt-2 font-mono leading-relaxed">
                      Thank you for choosing ASLI AROMA™. Your heritage spice lot has been allocated and is being packaged under nitrogen seal.
                    </p>
                    <div className="mt-4 text-[10px] text-[#7A1624] font-mono uppercase tracking-widest">
                      DISPATCH LOT #AA-2026-REG
                    </div>
                  </motion.div>
                ) : cart.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full border border-[#C89B3C] flex items-center justify-center mx-auto mb-4 bg-[#EFE6D4] text-[#C89B3C]">
                      <ShoppingBag size={24} />
                    </div>
                    <h4 className="font-serif text-xl font-medium text-[#241711]">
                      Your Vault is Empty
                    </h4>
                    <p className="text-xs text-[#404944] mt-1.5 max-w-xs mx-auto leading-relaxed">
                      Discover single-estate cloves, Kashmiri chillies, and ancient stone-ground Salem turmeric.
                    </p>
                    <Button
                      variant="gold"
                      size="sm"
                      onClick={() => {
                        closeCart();
                        onNavigateToShop();
                      }}
                      className="mt-6"
                    >
                      Explore Spices
                    </Button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedWeight}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-3 bg-[#FFF8F6] border border-[#C89B3C]/30 flex gap-4 items-center relative group"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-16 h-16 bg-[#EFE6D4] overflow-hidden flex-shrink-0 border border-[#C89B3C]/20">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-grow min-w-0">
                        <h4 className="font-serif text-sm font-medium text-[#241711] truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-[10px] text-[#7A1624] font-mono uppercase">
                          Net: {item.selectedWeight} • {item.product.volatileOil.split(' ')[0]}
                        </p>
                        <p className="text-xs font-semibold text-[#064D3B] mt-1">
                          ₹{item.product.price}
                        </p>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 border border-[#C89B3C]/40 bg-[#F6F0E4] px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedWeight, -1)}
                          className="p-1 hover:text-[#7A1624]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-mono text-xs font-semibold w-4 text-center text-[#241711]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedWeight, 1)}
                          className="p-1 hover:text-[#064D3B]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedWeight)}
                        className="text-[#404944] hover:text-[#7A1624] p-1.5 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Drawer Footer & Checkout Action */}
              {cart.length > 0 && !orderPlaced && (
                <div className="p-6 bg-[#EFE6D4] border-t border-[#C89B3C]/30 space-y-4">
                  
                  {/* Coupon Code Input */}
                  {promoCode ? (
                    <div className="flex items-center justify-between p-2.5 bg-[#064D3B] text-[#F6F0E4] text-xs font-mono border border-[#C89B3C]">
                      <div className="flex items-center gap-1.5">
                        <Tag size={13} className="text-[#C89B3C]" />
                        <span>Code Applied: <strong>{promoCode}</strong> (-{(discount * 100).toFixed(0)}%)</span>
                      </div>
                      <button
                        onClick={removePromo}
                        className="text-[#eed5cb] hover:text-white underline text-[10px]"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        placeholder="Promo Code (try ROYAL10)"
                        className="flex-grow px-3 py-2 bg-[#F6F0E4] border border-[#C89B3C]/40 text-xs text-[#241711] placeholder-[#404944]/60 uppercase font-mono focus:outline-none focus:border-[#064D3B]"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 bg-[#241711] text-[#F6F0E4] text-xs font-mono uppercase tracking-wider hover:bg-[#064D3B] transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  )}

                  {promoError && (
                    <p className="text-[10px] text-[#7A1624] font-mono">
                      Invalid code. Try using code "ROYAL10" for 10% savings.
                    </p>
                  )}

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 text-xs text-[#241711] pt-2 border-t border-[#C89B3C]/20">
                    <div className="flex justify-between">
                      <span className="text-[#404944]">Subtotal</span>
                      <span className="font-mono">
                        ₹{cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-[#7A1624]">
                        <span>Heritage Courtesy Discount</span>
                        <span className="font-mono font-semibold">
                          -₹{(cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0) * discount).toFixed(0)}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-[#404944]">Shipping</span>
                      <span className="font-mono text-[#064D3B] font-medium">
                        {shippingRemaining === 0 ? 'COMPLIMENTARY' : '₹99 (Free above ₹999)'}
                      </span>
                    </div>

                    <div className="flex justify-between text-base font-serif font-semibold pt-2 border-t border-[#C89B3C]/20 text-[#064D3B]">
                      <span>Grand Total</span>
                      <span className="font-mono">
                        ₹{(subtotal + (shippingRemaining === 0 ? 0 : 99)).toFixed(0)}
                      </span>
                    </div>
                  </div>

                  {/* Checkout CTA */}
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isCheckingOut ? (
                      <span>Reserving Your Lot...</span>
                    ) : (
                      <>
                        <span>Secure Checkout</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[10px] text-[#404944] font-mono uppercase tracking-wider">
                    ◆ 100% SATISFACTION GUARANTEED • TRIPLE SEALED ◆
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
