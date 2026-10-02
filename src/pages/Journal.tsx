import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Calendar, BookOpen, Clock } from 'lucide-react';

export const Journal: React.FC = () => {
  const articles = [
    {
      title: 'The Eugenol Matrix: Why Single-Estate Malabar Cloves Numb and Warm with Precision',
      category: 'BOTANICAL CHEMISTRY',
      date: 'Harvest Winter 2025',
      readTime: '6 min read',
      excerpt: 'Natural whole cloves contain up to 18% volatile essential oil, primarily eugenol. When hand-picked before flowering and sun-cured on reed mats, this fragile compound remains trapped inside the cellular envelope until crushed.',
      image: '/assets/asli_aroma_cloves_jar.jpg'
    },
    {
      title: 'Curcumin Under the Sun: How Industrial Mills Destroy Turmeric’s Soul',
      category: 'AYURVEDIC TERROIR',
      date: 'Autumn Solstice 2025',
      readTime: '8 min read',
      excerpt: 'Mass market turmeric is steamed at high pressure and dried artificially in fuel-fired kilns before being pulverised at high RPMs. Learn why cold water-jacketed granite chakki stones produce a completely different medicinal food.',
      image: '/assets/spice_turmeric.jpg'
    },
    {
      title: 'The Art of the Tadka: Temperature Windows for Blooming Fragile Aromatics',
      category: 'GASTRONOMY TECHNIQUE',
      date: 'Monsoon Lot 2025',
      readTime: '5 min read',
      excerpt: 'Tadka (chhonk) is not mere frying; it is lipid-phase volatile extraction. Fat-soluble flavor compounds like cuminaldehyde and thymol dissolve in clarified butter within 12 seconds between 165°C and 180°C.',
      image: '/assets/recipe_paneer_tikka.jpg'
    },
    {
      title: 'Inside Wayanad Sanctuary: Why Shade Canopies Preserve Terpene Concentration',
      category: 'FOREST ECOLOGY',
      date: 'Spring Equinox 2025',
      readTime: '7 min read',
      excerpt: 'Walking through our high-canopy cardamom groves in Wayanad feels like stepping into an ancient rainforest. How native shade trees protect fragile flower buds from scorching midday UV rays.',
      image: '/assets/kerala_plantation.jpg'
    }
  ];

  return (
    <div className="pt-8 pb-24 bg-[#F6F0E4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="py-12 border-b border-[#C89B3C]/30 text-center">
          <SectionHeading
            tagline="SENSORY ESSAYS & BOTANICAL RESEARCH"
            title="The Terroir"
            italicTitle="Dispatch"
            subtitle="Deep-dive chronicles exploring spice science, ancient culinary history, and the sacred botany of Indian kitchens."
            align="center"
            className="mx-auto"
          />
        </div>

        {/* Featured Journal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {articles.map((art, idx) => (
            <motion.article
              key={art.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#FFF8F6] border-2 border-[#C89B3C]/40 hover:border-[#C89B3C] p-6 flex flex-col justify-between group transition-all duration-500 hover:shadow-luxury-hover cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#241711] mb-5">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#064D3B] text-[#F6F0E4] px-2.5 py-1 text-[10px] label-caps border border-[#C89B3C]">
                    {art.category}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#7A1624] mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#C89B3C]" />
                    {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} className="text-[#C89B3C]" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#241711] group-hover:text-[#064D3B] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#404944] leading-relaxed font-light">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C89B3C]/20 flex items-center justify-between text-xs">
                <span className="label-caps text-[#064D3B] group-hover:text-[#C89B3C] font-semibold transition-colors flex items-center gap-1.5">
                  <BookOpen size={14} />
                  Read Full Monograph →
                </span>
                <span className="font-mono text-[10px] text-[#064D3B] font-bold">
                  ASLI AROMA™ LABS
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};
