import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { CrestLogo } from './CrestLogo';
import { Button } from './Button';
import { useCart } from '../context/CartContext';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenAccount
}) => {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Our Story', route: 'our-story' },
    { label: 'Spices', route: 'shop' },
    { label: 'Recipes', route: 'recipes' },
    { label: 'Journal', route: 'journal' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // On home page at top, navbar is transparent over dark emerald hero.
  // When scrolled, or on other pages, it transitions to solid ivory cream / dark emerald.
  const isTransparent = currentPage === 'home' && !isScrolled;

  return (
    <>
      {/* Top Heritage Announcement Banner */}
      <div className="bg-[#241711] text-[#F6F0E4] border-b border-[#C89B3C]/30 text-[10px] tracking-[0.2em] py-2 px-4 uppercase text-center flex items-center justify-center gap-3 font-mono z-50 relative">
        <span className="text-[#C89B3C] hidden sm:inline">◆</span>
        <span>NEW HARVEST ARRIVALS</span>
        <span className="text-[#C89B3C] opacity-60">•</span>
        <span>FREE SHIPPING ACROSS INDIA OVER ₹999</span>
        <span className="text-[#C89B3C] opacity-60">•</span>
        <span className="hidden md:inline">AYURVEDIC TERROIR TESTED</span>
        <span className="text-[#C89B3C] hidden sm:inline">◆</span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isTransparent
            ? 'bg-[#003427]/85 backdrop-blur-md border-b border-[#C89B3C]/20 shadow-none text-[#F6F0E4]'
            : 'bg-[#F6F0E4]/95 backdrop-blur-md border-b border-[#C89B3C]/30 shadow-sm text-[#241711]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo on Left */}
          <div className="flex-shrink-0">
            <CrestLogo
              variant={isTransparent ? 'emerald' : 'light'}
              size="md"
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors relative py-1 ${
                    isActive
                      ? isTransparent
                        ? 'text-[#C89B3C] font-semibold'
                        : 'text-[#064D3B] font-semibold'
                      : isTransparent
                      ? 'text-[#F6F0E4]/80 hover:text-[#C89B3C]'
                      : 'text-[#241711]/80 hover:text-[#064D3B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C89B3C]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className={`p-2 transition-colors ${
                isTransparent ? 'text-[#F6F0E4] hover:text-[#C89B3C]' : 'text-[#241711] hover:text-[#064D3B]'
              }`}
              aria-label="Search spices"
              title="Search spices & recipes"
            >
              <Search size={18} />
            </button>

            {/* Account Trigger */}
            <button
              onClick={onOpenAccount}
              className={`p-2 transition-colors ${
                isTransparent ? 'text-[#F6F0E4] hover:text-[#C89B3C]' : 'text-[#241711] hover:text-[#064D3B]'
              }`}
              aria-label="Account"
              title="Customer Account"
            >
              <User size={18} />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              className={`p-2 relative transition-colors ${
                isTransparent ? 'text-[#F6F0E4] hover:text-[#C89B3C]' : 'text-[#241711] hover:text-[#064D3B]'
              }`}
              aria-label="Shopping Cart"
              title="View Cart"
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#7A1624] text-[#F6F0E4] text-[10px] font-bold flex items-center justify-center border border-[#C89B3C]"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* CTA: Shop Spices */}
            <Button
              variant={isTransparent ? 'gold' : 'primary'}
              size="sm"
              onClick={() => handleNavClick('shop')}
              className="ml-2 font-medium"
            >
              Shop Spices
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={openCart}
              className={`p-2 relative ${isTransparent ? 'text-[#F6F0E4]' : 'text-[#241711]'}`}
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#7A1624] text-[#F6F0E4] text-[10px] font-bold flex items-center justify-center border border-[#C89B3C]">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isTransparent ? 'text-[#F6F0E4]' : 'text-[#241711]'}`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Hairline Gold Accent Under Nav */}
        <div className="gold-hairline opacity-75" />
      </header>

      {/* Full-Screen Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[110px] z-50 bg-[#064D3B] text-[#F6F0E4] flex flex-col justify-between p-6 sm:hidden border-t border-[#C89B3C]/30 overflow-y-auto"
          >
            {/* Background filigree ornament */}
            <div className="absolute right-0 top-0 bottom-0 w-48 opacity-10 pointer-events-none flex items-center justify-center">
              <CrestLogo variant="emerald" size="lg" showSubtitle={false} />
            </div>

            <div className="flex flex-col gap-6 pt-4 z-10">
              <div className="flex items-center gap-2 text-[#C89B3C] text-[10px] tracking-[0.2em] font-mono uppercase">
                <span>◆ NAVIGATION MENU ◆</span>
              </div>

              {navItems.map((item, idx) => (
                <motion.button
                  key={item.route}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-left font-serif text-2xl py-2 flex items-center justify-between border-b border-[#C89B3C]/20 ${
                    currentPage === item.route ? 'text-[#C89B3C] font-semibold' : 'text-[#F6F0E4]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={18} className="text-[#C89B3C] opacity-70" />
                </motion.button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => {
                    handleNavClick('shop');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Explore Collection
                </Button>
                <button
                  onClick={() => {
                    onOpenSearch();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 border border-[#C89B3C]/40 text-[#F6F0E4] uppercase text-xs tracking-widest flex items-center justify-center gap-2"
                >
                  <Search size={14} /> Search Products & Recipes
                </button>
              </div>
            </div>

            {/* Mobile Footer note */}
            <div className="py-6 border-t border-[#C89B3C]/20 text-center text-xs text-[#F6F0E4]/70 z-10">
              <p className="font-serif italic text-sm text-[#C89B3C]">“Spice Garden of India”</p>
              <p className="text-[10px] tracking-widest uppercase font-mono mt-1">Single Estate • Sun-Cured • Ayurvedic Terroir</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
