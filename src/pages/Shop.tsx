import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { SlidersHorizontal, ShieldCheck, Sparkles } from 'lucide-react';

interface ShopProps {
  onQuickView: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ onQuickView }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'whole' | 'ground' | 'gifts' | 'achars'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.hindiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

  return (
    <div className="pt-8 pb-24 bg-[#F6F0E4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Page Header */}
        <div className="py-12 border-b border-[#C89B3C]/30 text-center">
          <SectionHeading
            tagline="THE HARVEST VAULT"
            title="The Royal"
            italicTitle="Spice Treasury"
            subtitle="Authentic single-estate whole flower buds, sun-cured rhizomes, and cold stone-milled powders. Packaged in airtight UV glass."
            align="center"
            className="mx-auto"
          />
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="py-6 border-b border-[#C89B3C]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'All Botanicals' },
              { id: 'whole', label: 'Whole Spices (साबुत)' },
              { id: 'ground', label: 'Cold-Stone Milled' },
              { id: 'achars', label: 'Heritage Achars (अचार)' },
              { id: 'gifts', label: 'Gift Sets' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`label-caps px-3.5 py-1.5 text-xs transition-colors border ${
                  selectedCategory === cat.id
                    ? 'bg-[#064D3B] text-[#F6F0E4] border-[#C89B3C]'
                    : 'bg-[#EFE6D4] text-[#241711] border-[#C89B3C]/30 hover:border-[#C89B3C]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search spices..."
              className="px-3 py-1.5 text-xs bg-[#FFF8F6] border border-[#C89B3C]/40 text-[#241711] placeholder-[#404944]/60 rounded-none focus:outline-none focus:border-[#064D3B] flex-grow md:w-48"
            />

            {/* Sort Select */}
            <div className="flex items-center gap-1 text-xs text-[#241711] flex-shrink-0">
              <SlidersHorizontal size={14} className="text-[#C89B3C]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#EFE6D4] border border-[#C89B3C]/40 px-2 py-1.5 text-xs rounded-none focus:outline-none font-medium cursor-pointer"
              >
                <option value="featured">Featured Lots</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Count & Active Filters Bar */}
        <div className="py-4 flex items-center justify-between text-xs font-mono text-[#404944]">
          <span>Showing {filteredProducts.length} authenticated single-estate lots</span>
          <span className="text-[#064D3B] font-semibold hidden sm:inline">
            FREE SHIPPING OVER ₹999 ACROSS INDIA
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#EFE6D4] border border-[#C89B3C]/40 my-8">
            <Sparkles size={32} className="text-[#C89B3C] mx-auto mb-2" />
            <h3 className="font-serif text-2xl text-[#241711]">No matching botanicals</h3>
            <p className="text-xs text-[#404944] mt-1">
              Try adjusting your filter or search criteria to view our collection.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-[#064D3B] text-[#F6F0E4] text-xs uppercase font-mono border border-[#C89B3C]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

        {/* Provenance Guarantee Strip */}
        <div className="mt-20 p-8 bg-[#064D3B] text-[#F6F0E4] border border-[#C89B3C] grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#C89B3C] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-[#F6F0E4]">
                100% Volatile Oil Retention
              </h4>
              <p className="text-xs text-[#eed5cb] mt-1">
                Zero machine overheating. Each jar is tested for high naturally occurring terpene density.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#C89B3C] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-[#F6F0E4]">
                Single Estate Provenance
              </h4>
              <p className="text-xs text-[#eed5cb] mt-1">
                Direct trade farmer partnerships in Wayanad, Idukki, Salem, and Kashmir.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#C89B3C] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base font-semibold text-[#F6F0E4]">
                Hermetic UV Glass Jars
              </h4>
              <p className="text-xs text-[#eed5cb] mt-1">
                Shields fragile botanical phytochemicals from photo-oxidation and humidity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
