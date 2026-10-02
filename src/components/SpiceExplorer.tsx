import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Droplet, MapPin } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { SPICE_EXPLORER_ITEMS } from '../data/mockData';
import { SpiceExplorerItem } from '../types';

interface SpiceExplorerProps {
  onSelectSpice?: (spice: SpiceExplorerItem) => void;
}

export const SpiceExplorer: React.FC<SpiceExplorerProps> = ({ onSelectSpice }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSpiceModal, setActiveSpiceModal] = useState<SpiceExplorerItem | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-[#FFF8F6] relative border-b border-[#C89B3C]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            align="left"
            tagline="THE BOTANICAL ARCHIVE"
            title="From the"
            italicTitle="Spice Garden"
            subtitle="Single-origin whole and cold-ground botanicals, plucked at peak maturity and preserved with unyielding Ayurvedic reverence."
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#C89B3C] text-[#241711] hover:bg-[#064D3B] hover:text-[#F6F0E4] flex items-center justify-center transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-[#064D3B] text-[#F6F0E4] border border-[#C89B3C] hover:bg-[#241711] flex items-center justify-center transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Drag/Scrollable Deck */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {SPICE_EXPLORER_ITEMS.map((spice, idx) => (
            <motion.div
              key={spice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => {
                setActiveSpiceModal(spice);
                onSelectSpice?.(spice);
              }}
              className="flex-shrink-0 w-[290px] sm:w-[320px] md:w-[350px] snap-start bg-[#F6F0E4] border border-[#C89B3C]/30 hover:border-[#C89B3C] p-3 flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:shadow-luxury-hover"
            >
              {/* Inner Jaipur Miniature Hairline Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFE6D4] mb-4">
                <img
                  src={spice.image}
                  alt={spice.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Estate Lot Tag */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="label-caps bg-[#241711]/90 text-[#F6F0E4] px-2 py-0.5 border border-[#C89B3C]/40 text-[9px]">
                    {spice.estateTag}
                  </span>
                </div>

                {/* Volatile Density Gauge */}
                <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-[#064D3B]/90 text-[#F6F0E4] px-2 py-0.5 text-[9px] font-mono border border-[#C89B3C]/30">
                  <Droplet size={10} className="text-[#C89B3C]" />
                  <span>{spice.volatileOil}</span>
                </div>
              </div>

              {/* Spice Card Details */}
              <div className="px-2 pb-2 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#7A1624] font-medium mb-1">
                    <MapPin size={12} className="text-[#C89B3C]" />
                    <span className="label-caps text-[10px]">{spice.origin}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#241711] group-hover:text-[#064D3B] transition-colors leading-snug">
                    {spice.name}
                  </h3>
                  <p className="text-xs text-[#7A1624] font-medium tracking-wide">
                    {spice.hindiName}
                  </p>

                  <p className="text-xs text-[#404944] mt-2.5 line-clamp-3 leading-relaxed">
                    {spice.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#C89B3C]/20 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#404944]">
                    Tasting Profile
                  </span>
                  <div className="flex gap-1">
                    {spice.aromaNotes.slice(0, 2).map((note) => (
                      <span
                        key={note}
                        className="text-[9px] px-1.5 py-0.5 bg-[#EFE6D4] text-[#241711] border border-[#C89B3C]/20"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for In-Depth Spice Story */}
        {activeSpiceModal && (
          <div
            className="fixed inset-0 z-50 bg-[#003427]/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveSpiceModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F6F0E4] border-2 border-[#C89B3C] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveSpiceModal(null)}
                className="absolute top-4 right-4 text-[#241711] hover:text-[#7A1624] text-xs font-mono uppercase tracking-widest px-2 py-1 border border-[#C89B3C]"
              >
                [ CLOSE ✕ ]
              </button>

              <div className="flex items-center gap-2 text-[#7A1624] text-xs label-caps mb-2">
                <span>{activeSpiceModal.estateTag}</span>
                <span className="text-[#C89B3C]">◆</span>
                <span>{activeSpiceModal.origin}</span>
              </div>

              <h3 className="font-serif text-3xl font-medium text-[#241711]">
                {activeSpiceModal.name}
              </h3>
              <p className="text-sm text-[#7A1624] italic font-serif">
                {activeSpiceModal.hindiName}
              </p>

              <div className="my-5 aspect-[16/9] overflow-hidden bg-[#241711] border border-[#C89B3C]/40">
                <img
                  src={activeSpiceModal.image}
                  alt={activeSpiceModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-[#241711] font-light leading-relaxed mb-4">
                {activeSpiceModal.description}
              </p>

              <div className="bg-[#EFE6D4] p-3.5 border border-[#C89B3C]/30 text-xs text-[#241711] space-y-1.5">
                <p>
                  <strong className="text-[#064D3B] uppercase tracking-wider font-mono">Volatile Density:</strong>{' '}
                  {activeSpiceModal.volatileOil}
                </p>
                <p>
                  <strong className="text-[#064D3B] uppercase tracking-wider font-mono">Culinary Pairing:</strong>{' '}
                  {activeSpiceModal.pairing}
                </p>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};
