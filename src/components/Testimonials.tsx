import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const publications = [
    { name: 'VOGUE INDIA', tag: '“The New Vanguard of Indian Gastronomy”' },
    { name: 'ARCHITECTURAL DIGEST', tag: '“Packaging as Fine Architectural Art”' },
    { name: 'CONDÉ NAST TRAVELLER', tag: '“Rediscovering India’s Sacred Terroirs”' },
    { name: 'MICHELIN GUIDE', tag: '“Essential Spice Foundation for Master Chefs”' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FFF8F6] relative border-b border-[#C89B3C]/25 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antique Gold Monogram Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 rounded-full border border-[#C89B3C] text-[#C89B3C] flex items-center justify-center mx-auto mb-8 font-serif text-xl font-bold bg-[#F6F0E4]"
        >
          “
        </motion.div>

        {/* Master Patron Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#241711] font-normal leading-[1.3] italic"
        >
          “The moment you unseal the jar of ASLI AROMA™ cloves, the crackle and perfume fill the entire room. This is the rare caliber of Indian spice our grandmothers spoke of — untouched by industrial heat.”
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center"
        >
          <span className="label-caps font-semibold text-xs text-[#7A1624] tracking-[0.2em]">
            CHEF RANVEER BRAR
          </span>
          <span className="text-xs text-[#404944] mt-1 font-light">
            Master Culinary Patron & Gastronomic Author
          </span>
          
          <div className="w-12 h-[1px] bg-[#C89B3C] mt-6" />
        </motion.div>

        {/* Press Logo Strip */}
        <div className="mt-16 pt-12 border-t border-[#C89B3C]/20 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-2 group"
            >
              <span className="font-serif text-sm sm:text-base font-bold tracking-[0.2em] text-[#241711]/70 group-hover:text-[#064D3B] transition-colors">
                {pub.name}
              </span>
              <span className="text-[9px] text-[#7A1624] font-mono mt-1 opacity-80">
                {pub.tag}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
