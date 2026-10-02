import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1, selectedWeight);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={() => onQuickView?.(product)}
      className="group relative bg-[#F6F0E4] border border-[#C89B3C]/30 hover:border-[#C89B3C] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:shadow-luxury-hover overflow-hidden"
    >
      {/* Jaipur Miniature Framing Hairline */}
      <div className="absolute inset-[5px] border border-[#C89B3C]/20 pointer-events-none z-10 transition-colors duration-300 group-hover:border-[#C89B3C]/50" />

      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE6D4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Scrim for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Vintage Harvest Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-20">
            <span className="label-caps bg-[#7A1624] text-[#F6F0E4] px-2.5 py-1 shadow-sm border border-[#C89B3C]/40">
              {product.badge}
            </span>
          </div>
        )}

        {/* Volatile Oil Index Ribbon */}
        <div className="absolute bottom-2.5 left-3 z-20">
          <span className="text-[10px] tracking-widest uppercase font-mono bg-[#064D3B]/90 backdrop-blur-sm text-[#F6F0E4] px-2 py-0.5 border border-[#C89B3C]/30">
            {product.volatileOil}
          </span>
        </div>

        {/* Quick View Floating Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView?.(product);
          }}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-none bg-[#F6F0E4]/90 backdrop-blur-sm text-[#241711] hover:bg-[#064D3B] hover:text-[#F6F0E4] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#C89B3C]"
          title="Quick View Details"
        >
          <Eye size={15} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-[#F6F0E4] z-10">
        <div>
          {/* Origin & Category */}
          <div className="flex items-center justify-between text-xs text-[#7A1624] mb-1.5 font-medium">
            <span className="label-caps">{product.origin.split(',')[0]}</span>
            <div className="flex items-center gap-1 text-[#C89B3C]">
              <Star size={12} fill="#C89B3C" />
              <span className="text-xs font-semibold text-[#241711]">{product.rating}</span>
              <span className="text-[10px] text-[#404944]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-xl font-medium text-[#241711] group-hover:text-[#064D3B] transition-colors leading-snug">
            {product.name}
          </h3>
          
          {/* Hindi Botanical Title */}
          <p className="text-xs text-[#7A1624] font-medium tracking-wide mt-0.5">
            {product.hindiName}
          </p>

          {/* Short Description */}
          <p className="text-xs text-[#404944] mt-2.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Aroma Notes Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.aromaNotes.slice(0, 3).map((note) => (
              <span
                key={note}
                className="text-[10px] tracking-wide uppercase px-2 py-0.5 bg-[#EFE6D4] text-[#241711] border border-[#C89B3C]/20"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Weights & Price Bar */}
        <div className="mt-5 pt-3.5 border-t border-[#C89B3C]/20 flex flex-col gap-3">
          {/* Weight Selectors if multiple */}
          {product.availableWeights.length > 1 && (
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[#404944]">Net:</span>
              <div className="flex gap-1">
                {product.availableWeights.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedWeight(w);
                    }}
                    className={`text-[10px] px-1.5 py-0.5 font-medium transition-colors ${
                      selectedWeight === w
                        ? 'bg-[#064D3B] text-[#F6F0E4] border border-[#C89B3C]'
                        : 'bg-[#EFE6D4] text-[#241711] border border-transparent hover:border-[#C89B3C]/40'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-semibold text-[#064D3B]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#404944] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Add to Cart Micro-Button */}
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={handleAddToCart}
              className={`px-3.5 py-2 text-xs uppercase tracking-widest font-medium inline-flex items-center gap-1.5 transition-all duration-300 border ${
                isAdded
                  ? 'bg-[#064D3B] text-[#F6F0E4] border-[#C89B3C]'
                  : 'bg-[#241711] text-[#F6F0E4] border-[#241711] hover:bg-[#064D3B] hover:border-[#C89B3C]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={13} className="text-[#C89B3C]" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={13} className="text-[#C89B3C]" />
                  <span>Add</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
