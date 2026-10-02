import React from 'react';
import { CrestLogo } from './CrestLogo';
import { ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241711] text-[#F6F0E4] border-t-2 border-[#C89B3C] relative overflow-hidden">
      
      {/* Subtle top gold accent bar */}
      <div className="gold-hairline" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column (2 spans on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <CrestLogo variant="dark" size="md" onClick={() => handleNav('home')} />
            
            <p className="mt-4 text-xs sm:text-sm text-[#eed5cb]/80 leading-relaxed font-light max-w-sm">
              Preserving pure heritage spices, single-estate terroirs, and ancient Ayurvedic gastronomy. Untouched by high industrial heat or artificial color polishing.
            </p>

            {/* Certification Badge */}
            <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#064D3B]/60 border border-[#C89B3C]/50 text-xs font-mono text-[#F6F0E4]">
              <ShieldCheck size={16} className="text-[#C89B3C]" />
              <span>AYURVEDIC LAB TESTED • 100% PURE ORIGIN</span>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-none border border-[#C89B3C]/40 hover:border-[#C89B3C] hover:bg-[#064D3B] flex items-center justify-center transition-colors text-[#F6F0E4]"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#facebook"
                className="w-8 h-8 rounded-none border border-[#C89B3C]/40 hover:border-[#C89B3C] hover:bg-[#064D3B] flex items-center justify-center transition-colors text-[#F6F0E4]"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="#youtube"
                className="w-8 h-8 rounded-none border border-[#C89B3C]/40 hover:border-[#C89B3C] hover:bg-[#064D3B] flex items-center justify-center transition-colors text-[#F6F0E4]"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-none border border-[#C89B3C]/40 hover:border-[#C89B3C] hover:bg-[#064D3B] flex items-center justify-center transition-colors text-[#F6F0E4]"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links: Shop */}
          <div className="flex flex-col text-left">
            <h4 className="label-caps font-semibold text-[#C89B3C] text-xs mb-4">
              ROYAL SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-[#eed5cb]/80 font-light">
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Whole Spices (साबुत)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Cold-Stone Ground
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Gift Sets & Wooden Chests
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Chef Reserve Lots
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Harvest Season Calendar
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Story & Recipes */}
          <div className="flex flex-col text-left">
            <h4 className="label-caps font-semibold text-[#C89B3C] text-xs mb-4">
              HERITAGE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#eed5cb]/80 font-light">
              <li>
                <button
                  onClick={() => handleNav('our-story')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('our-story')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Wayanad Sanctuary Estate
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('recipes')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Culinary Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('recipes')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  Ayurvedic Food Pairings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-[#C89B3C] transition-colors"
                >
                  The Terroir Dispatch
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Care & Concierge */}
          <div className="flex flex-col text-left">
            <h4 className="label-caps font-semibold text-[#C89B3C] text-xs mb-4">
              CONCIERGE
            </h4>
            <ul className="space-y-2.5 text-xs text-[#eed5cb]/80 font-light">
              <li>
                <a href="#shipping" className="hover:text-[#C89B3C] transition-colors">
                  Express Shipping (All India)
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-[#C89B3C] transition-colors">
                  Track Consignment
                </a>
              </li>
              <li>
                <a href="#bulk" className="hover:text-[#C89B3C] transition-colors">
                  Bespoke Corporate Gifting
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-[#C89B3C] transition-colors">
                  Contact Concierge
                </a>
              </li>
              <li>
                <span className="text-[10px] text-[#C89B3C] font-mono block mt-2">
                  CONCIERGE: +91 1800-ASLI-AROMA
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-[#C89B3C]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#eed5cb]/60 font-mono gap-4">
          <p>
            © {CURRENT_YEAR} ASLI AROMA™ PVT LTD. All Rights Reserved. Spice Garden of India.
          </p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#C89B3C] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#C89B3C] transition-colors">
              Terms of Royal Service
            </a>
            <a href="#shipping" className="hover:text-[#C89B3C] transition-colors">
              Shipping & Returns
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
