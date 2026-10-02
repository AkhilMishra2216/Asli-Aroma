import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, RECIPES } from '../data/mockData';
import { Product, Recipe } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectRecipe: (recipe: Recipe) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectRecipe,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.hindiName.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
          p.aromaNotes.some((n) => n.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const filteredRecipes = query.trim()
    ? RECIPES.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.spiceUsed.toLowerCase().includes(query.toLowerCase()) ||
          r.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-[#002117]/85 backdrop-blur-md flex items-start justify-center p-4 pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#F6F0E4] border-2 border-[#C89B3C] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C89B3C]/30">
            <span className="label-caps text-[#7A1624] font-semibold flex items-center gap-1.5 text-xs">
              <Sparkles size={14} className="text-[#C89B3C]" />
              <span>SEARCH BOTANICALS & RECIPES</span>
            </span>
            <button
              onClick={onClose}
              className="text-xs uppercase font-mono text-[#241711] hover:text-[#7A1624] p-1"
            >
              [ ESC ✕ ]
            </button>
          </div>

          {/* Search Input */}
          <div className="mt-4 relative">
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Cloves, Turmeric, Biryani, Chai, Wayanad..."
              className="w-full px-4 py-3.5 pl-11 bg-[#FFF8F6] border border-[#C89B3C] text-sm text-[#241711] placeholder-[#404944]/60 rounded-none focus:outline-none focus:border-[#064D3B]"
            />
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C89B3C]"
            />
          </div>

          {/* Quick Suggestions when empty */}
          {!query.trim() && (
            <div className="mt-6">
              <p className="text-[10px] uppercase font-mono tracking-wider text-[#404944] mb-2">
                Popular Inquiries:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Single Estate Cloves', 'Salem Haldi', 'Kashmiri Lal Mirch', 'Awadhi Biryani', 'Chai Spices'].map(
                  (s) => (
                    <button
                      key={s}
                      onClick={() => setQuery(s)}
                      className="text-xs px-2.5 py-1 bg-[#EFE6D4] text-[#241711] border border-[#C89B3C]/30 hover:border-[#C89B3C]"
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query.trim() && (
            <div className="mt-6 max-h-[60vh] overflow-y-auto space-y-6">
              {/* Product Results */}
              <div>
                <h4 className="label-caps text-xs text-[#064D3B] font-semibold mb-2.5">
                  Products ({filteredProducts.length})
                </h4>
                {filteredProducts.length === 0 ? (
                  <p className="text-xs text-[#404944] italic">No matching spices found.</p>
                ) : (
                  <div className="space-y-2">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onSelectProduct(p);
                          onClose();
                        }}
                        className="p-2.5 bg-[#FFF8F6] border border-[#C89B3C]/30 hover:border-[#C89B3C] flex items-center justify-between cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 object-cover bg-[#EFE6D4]"
                          />
                          <div>
                            <h5 className="font-serif text-sm font-medium text-[#241711] group-hover:text-[#064D3B]">
                              {p.name}
                            </h5>
                            <p className="text-[10px] text-[#7A1624] font-mono">
                              {p.hindiName} • {p.volatileOil.split(' ')[0]}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-sm font-semibold text-[#064D3B]">
                            ₹{p.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recipe Results */}
              <div>
                <h4 className="label-caps text-xs text-[#064D3B] font-semibold mb-2.5">
                  Recipes ({filteredRecipes.length})
                </h4>
                {filteredRecipes.length === 0 ? (
                  <p className="text-xs text-[#404944] italic">No matching recipes found.</p>
                ) : (
                  <div className="space-y-2">
                    {filteredRecipes.map((r) => (
                      <div
                        key={r.id}
                        onClick={() => {
                          onSelectRecipe(r);
                          onClose();
                        }}
                        className="p-2.5 bg-[#FFF8F6] border border-[#C89B3C]/30 hover:border-[#C89B3C] flex items-center justify-between cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={r.image}
                            alt={r.title}
                            className="w-12 h-12 object-cover bg-[#EFE6D4]"
                          />
                          <div>
                            <h5 className="font-serif text-sm font-medium text-[#241711] group-hover:text-[#064D3B]">
                              {r.title}
                            </h5>
                            <p className="text-[10px] text-[#7A1624] font-mono">
                              {r.spiceUsed} • {r.cookTime}
                            </p>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-[#C89B3C]" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
