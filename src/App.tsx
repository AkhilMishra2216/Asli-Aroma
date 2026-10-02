import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { OurStory } from './pages/OurStory';
import { Recipes } from './pages/Recipes';
import { Journal } from './pages/Journal';
import { Product, Recipe, PageRoute } from './types';
import { Check, X } from 'lucide-react';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const { toastMessage, dismissToast, openCart } = useCart();

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductFromSearch = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleSelectRecipeFromSearch = (_recipe: Recipe) => {
    setCurrentPage('recipes');
  };

  return (
    <div className="min-h-screen bg-[#F6F0E4] text-[#241711] flex flex-col justify-between selection:bg-[#064D3B] selection:text-[#F6F0E4]">
      {/* Toast Notification Bar */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="fixed top-24 right-4 sm:right-8 z-50 bg-[#064D3B] text-[#F6F0E4] px-4 py-3 border border-[#C89B3C] shadow-2xl flex items-center gap-3 text-xs font-mono"
          >
            <Check size={16} className="text-[#C89B3C] flex-shrink-0" />
            <span>{toastMessage}</span>
            <button
              onClick={openCart}
              className="ml-2 underline text-[#C89B3C] hover:text-white uppercase font-bold text-[10px]"
            >
              View Vault
            </button>
            <button
              onClick={dismissToast}
              className="text-[#eed5cb] hover:text-white ml-1 p-0.5"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Main Page Transition Container */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Home
                onNavigate={handleNavigate}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            </motion.div>
          )}

          {currentPage === 'shop' && (
            <motion.div
              key="shop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Shop onQuickView={(p) => setQuickViewProduct(p)} />
            </motion.div>
          )}

          {currentPage === 'our-story' && (
            <motion.div
              key="our-story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <OurStory onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentPage === 'recipes' && (
            <motion.div
              key="recipes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Recipes />
            </motion.div>
          )}

          {currentPage === 'journal' && (
            <motion.div
              key="journal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Journal />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-in Cart Drawer */}
      <CartDrawer onNavigateToShop={() => handleNavigate('shop')} />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Search Overlay Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProductFromSearch}
        onSelectRecipe={handleSelectRecipeFromSearch}
      />

      {/* Account Concierge Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
