import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Leaf, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { PageRoute } from '../types';

interface BrandStoryProps {
  onNavigate: (page: PageRoute) => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F0E4] relative overflow-hidden border-b border-[#C89B3C]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Plantation Photography with Archival Caption Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Outer Frame with Antique Gold Border */}
            <div className="relative p-2 sm:p-3 bg-[#EFE6D4] border border-[#C89B3C]/50 shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#241711]">
                <img
                  src="/assets/kerala_plantation.jpg"
                  alt="Asli Aroma Malabar Sanctuary Plantation in Kerala"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Architectural Caption Plaque */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-3 p-4 bg-[#F6F0E4] border border-[#C89B3C]/40 text-left flex items-start gap-3.5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-none bg-[#064D3B] text-[#C89B3C] flex items-center justify-center flex-shrink-0 border border-[#C89B3C]">
                  <Compass size={16} />
                </div>
                <div>
                  <div className="label-caps text-[#7A1624] text-[10px] font-semibold flex items-center gap-1.5">
                    <span>ESTATE 04 — MALABAR SANCTUARY</span>
                    <span className="text-[#C89B3C]">◆</span>
                    <span>ALTITUDE 950M</span>
                  </div>
                  <p className="text-xs text-[#241711] font-light mt-1 leading-relaxed">
                    Harvested under ancient biodiversity canopies in Wayanad, sheltering fragile terpene molecules from midday tropical heat.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Antique Jaipur Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#C89B3C] pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#C89B3C] pointer-events-none" />
          </motion.div>

          {/* Right Column: Editorial Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-[#7A1624] mb-3">
              <span className="text-[9px] text-[#C89B3C]">◆</span>
              <span className="label-caps font-semibold">PHILOSOPHY & PROVENANCE</span>
              <span className="text-[9px] text-[#C89B3C]">◆</span>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#241711] leading-[1.15]">
              Rooted in Tradition.{' '}
              <br />
              <span className="italic text-[#C89B3C] font-normal">
                Crafted for Today.
              </span>
            </h2>

            {/* Narrative Body */}
            <p className="mt-6 text-base sm:text-lg text-[#241711]/90 font-light leading-relaxed">
              <strong className="font-semibold text-[#064D3B]">ASLI AROMA™</strong> celebrates the spices that have defined Indian kitchens for generations. From carefully selected whole spices to vibrant ground blends, every product is created to preserve the natural character, aroma and warmth of authentic Indian cooking.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#404944] font-light leading-relaxed">
              Industrial mass milling burns off up to 60% of delicate volatile oils through machine friction exceeding 75°C. At <strong className="font-semibold text-[#064D3B]">ASLI AROMA™</strong>, our low-RPM water-cooled granite millstones never breach 35°C, ensuring every jar crackles with the intense living perfume of the harvest season.
            </p>

            {/* Three Pillar Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t border-[#C89B3C]/20">
              <div className="flex items-start gap-2.5">
                <Leaf size={16} className="text-[#064D3B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#241711]">
                    Direct From Estate Co-ops
                  </h4>
                  <p className="text-xs text-[#404944] mt-0.5">Zero middlemen brokers or multi-year godown storage.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Leaf size={16} className="text-[#064D3B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#241711]">
                    No Polishing or Dyes
                  </h4>
                  <p className="text-xs text-[#404944] mt-0.5">Raw sun-dried color without lead chromate or starch fillers.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-10">
              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate('our-story')}
                icon={<ArrowRight size={15} />}
              >
                Discover Our Story
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
