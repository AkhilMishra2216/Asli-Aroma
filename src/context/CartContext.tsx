import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedWeight?: string) => void;
  removeFromCart: (productId: string, selectedWeight: string) => void;
  updateQuantity: (productId: string, selectedWeight: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  promoCode: string;
  discount: number;
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
  freeShippingThreshold: number;
  shippingRemaining: number;
  toastMessage: string | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'asli_aroma_cart_v1';
const FREE_SHIPPING_THRESHOLD = 999;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      // Start with 1 default signature item for delightful out-of-the-box demo
      {
        product: {
          id: 'cloves-jar-single-estate',
          name: 'Single Estate Malabar Cloves',
          hindiName: 'मलंग लौंग — साबुत',
          category: 'whole',
          badge: 'Single Estate',
          shortDescription: 'Unbroken flower buds cured under the Kerala sun.',
          description: 'Grown on private heritage groves along the Malabar coast.',
          origin: 'Wayanad, Kerala (Altitude 950m)',
          terroir: 'Red Laterite Loam under Jackfruit Shade',
          weight: '150g',
          availableWeights: ['100g', '150g', '300g'],
          price: 490,
          originalPrice: 580,
          image: '/assets/asli_aroma_cloves_jar.jpg',
          rating: 4.98,
          reviewCount: 218,
          volatileOil: '17.4% Natural Eugenol',
          aromaNotes: ['Deep Woody', 'Warm Cinnamon Spice', 'Pungent Clove Flower'],
          flavorProfile: 'Numbing sweet warmth with medicinal clarity.',
          pairingSuggestions: ['Awadhi Biryani', 'Spiced Chai Decoction'],
          harvestSeason: 'Early Spring 2025',
          inStock: true,
          isSignature: true,
          packagingType: 'Heavy UV-Shield Glass Jar with Antique Brass Lid'
        },
        quantity: 1,
        selectedWeight: '150g'
      }
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1, selectedWeight?: string) => {
    const weightToUse = selectedWeight || product.weight;
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weightToUse
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, quantity, selectedWeight: weightToUse }];
    });

    setToastMessage(`Added ${quantity}x ${product.name} (${weightToUse}) to your bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);

    // Optionally auto-open cart
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedWeight: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedWeight === selectedWeight))
    );
  };

  const updateQuantity = (productId: string, selectedWeight: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedWeight === selectedWeight) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => setCart([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ROYAL10' || clean === 'ASLI10') {
      setPromoCode(clean);
      setDiscount(0.1); // 10% off
      return true;
    }
    if (clean === 'MAHARAJA20') {
      setPromoCode(clean);
      setDiscount(0.2); // 20% off
      return true;
    }
    return false;
  };

  const removePromo = () => {
    setPromoCode('');
    setDiscount(0);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const rawSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const subtotal = Math.max(0, rawSubtotal * (1 - discount));

  const shippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const dismissToast = () => setToastMessage(null);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        promoCode,
        discount,
        applyPromo,
        removePromo,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        shippingRemaining,
        toastMessage,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
