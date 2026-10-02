import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Droplet, MapPin, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Button } from './Button';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModalContent: React.FC<{ product: Product; onClose: () => void }> = ({
  product,
  onClose
}) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>(product.weight);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity, selectedWeight);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-[#002117]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#F6F0E4] border-2 border-[#C89B3C] max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative my-8 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Trigger */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-[#241711] hover:text-[#7A1624] text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-[#C89B3C] bg-[#EFE6D4]"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Image & Badges */}
            <div className="md:col-span-6 relative">
              <div className="relative aspect-square bg-[#EFE6D4] border border-[#C89B3C]/40 overflow-hidden shadow-inner">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Terroir Stamp */}
                <div className="absolute top-3 left-3 bg-[#7A1624] text-[#F6F0E4] px-3 py-1 text-xs label-caps border border-[#C89B3C]">
                  {product.badge || 'Artisanal Estate'}
                </div>

                {/* Volatile Oil Index */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#064D3B]/90 text-[#F6F0E4] px-3 py-1 text-xs font-mono border border-[#C89B3C]/40">
                  <Droplet size={13} className="text-[#C89B3C]" />
                  <span>{product.volatileOil}</span>
                </div>
              </div>

              {/* Packaging Specification Plaque */}
              <div className="mt-4 p-3 bg-[#EFE6D4] border border-[#C89B3C]/30 text-xs text-[#241711] flex items-center gap-2 font-mono">
                <ShieldCheck size={16} className="text-[#064D3B] flex-shrink-0" />
                <span>{product.packagingType}</span>
              </div>
            </div>

            {/* Right: Product Details & Commercial Action */}
            <div className="md:col-span-6 flex flex-col justify-between text-left">
              <div>
                {/* Provenance Location & Rating */}
                <div className="flex items-center justify-between text-xs text-[#7A1624] mb-2 font-medium">
                  <div className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#C89B3C]" />
                    <span className="label-caps">{product.origin}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#C89B3C]">
                    <Star size={13} fill="#C89B3C" />
                    <span className="font-semibold text-[#241711]">{product.rating}</span>
                    <span className="text-[#404944] text-[10px]">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <h2 className="font-serif text-3xl font-medium text-[#241711]">
                  {product.name}
                </h2>
                <p className="text-sm text-[#7A1624] font-medium tracking-wide mt-0.5">
                  {product.hindiName}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline gap-3 mt-4 py-2 border-y border-[#C89B3C]/20">
                  <span className="font-serif text-2xl font-semibold text-[#064D3B]">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#404944] line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  <span className="text-[10px] text-[#7A1624] uppercase font-mono tracking-widest ml-auto">
                    Taxes Included
                  </span>
                </div>

                {/* Full Description */}
                <p className="mt-4 text-xs sm:text-sm text-[#241711]/90 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Terroir & Season Notes */}
                <div className="mt-4 p-3 bg-[#FFF8F6] border border-[#C89B3C]/30 text-xs space-y-1">
                  <p>
                    <strong className="text-[#064D3B] uppercase font-mono text-[10px]">Terroir:</strong>{' '}
                    <span className="text-[#404944]">{product.terroir}</span>
                  </p>
                  <p>
                    <strong className="text-[#064D3B] uppercase font-mono text-[10px]">Harvest Lot:</strong>{' '}
                    <span className="text-[#404944]">{product.harvestSeason}</span>
                  </p>
                </div>

                {/* Aroma Profile Notes */}
                <div className="mt-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#404944] block mb-1.5">
                    Aroma Signature:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.aromaNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#EFE6D4] text-[#241711] border border-[#C89B3C]/30"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Weight Variant Selector */}
                {product.availableWeights.length > 1 && (
                  <div className="mt-5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#404944] block mb-1.5">
                      Select Batch Weight:
                    </span>
                    <div className="flex gap-2">
                      {product.availableWeights.map((w) => (
                        <button
                          key={w}
                          type="button"
                          onClick={() => setSelectedWeight(w)}
                          className={`text-xs px-3 py-1.5 font-medium transition-all ${
                            selectedWeight === w
                              ? 'bg-[#064D3B] text-[#F6F0E4] border border-[#C89B3C]'
                              : 'bg-[#EFE6D4] text-[#241711] border border-[#C89B3C]/30 hover:border-[#C89B3C]'
                          }`}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Bar: Quantity & Add to Cart */}
              <div className="mt-6 pt-5 border-t border-[#C89B3C]/30 flex flex-col sm:flex-row gap-3">
                {/* Quantity Control */}
                <div className="flex items-center border border-[#C89B3C] bg-[#FFF8F6] px-3 py-2 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-sm font-mono px-2 hover:text-[#7A1624]"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-mono font-semibold text-sm text-[#241711]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-sm font-mono px-2 hover:text-[#064D3B]"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleAdd}
                  className="flex-grow flex items-center justify-center gap-2"
                >
                  {isAdded ? (
                    <>
                      <Check size={16} className="text-[#C89B3C]" />
                      <span>Added to Vault</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} className="text-[#C89B3C]" />
                      <span>Add to Vault • ₹{product.price * quantity}</span>
                    </>
                  )}
                </Button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  if (!product) return null;
  return <QuickViewModalContent key={product.id} product={product} onClose={onClose} />;
};

