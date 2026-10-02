import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface ProductShowcaseProps {
  onQuickView: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onQuickView }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'whole' | 'ground' | 'gifts' | 'achars'>('all');

  const filteredProducts =
    activeTab === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const tabs: { id: 'all' | 'whole' | 'ground' | 'gifts' | 'achars'; label: string }[] = [
    { id: 'all', label: 'All Signatures' },
    { id: 'whole', label: 'Whole Spices (साबुत)' },
    { id: 'ground', label: 'Cold-Milled' },
    { id: 'achars', label: 'Heritage Achars (अचार)' },
    { id: 'gifts', label: 'Gift Collections' },
  ];

  return (
    <section className="py-24 bg-[#F6F0E4] relative border-b border-[#C89B3C]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tagline="CURATED SELECTION • HARVEST LOT 2025"
          title="Royal"
          italicTitle="Signatures"
          subtitle="The pinnacle of our harvest: glass-cased whole seeds and cold-stone milled blends for connoisseurs of authentic Indian gastronomy."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`label-caps px-4 py-2 text-xs transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#064D3B] text-[#F6F0E4] border-[#C89B3C] shadow-sm'
                    : 'bg-[#EFE6D4] text-[#241711] border-[#C89B3C]/30 hover:border-[#C89B3C]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-14 p-6 bg-[#EFE6D4] border border-[#C89B3C]/40 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-base text-[#241711]">
            “Each ASLI AROMA™ jar is hand-numbered with its batch harvest date and volatile oil certification index.”
          </p>
          <p className="text-[10px] tracking-widest uppercase text-[#7A1624] font-mono mt-1">
            Zero Chemical Extraction • Nitrogen Flushed Glass
          </p>
        </div>

      </div>
    </section>
  );
};
