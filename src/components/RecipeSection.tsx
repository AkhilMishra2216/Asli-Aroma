import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowUpRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { RECIPES } from '../data/mockData';
import { Recipe } from '../types';

export const RecipeSection: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#F6F0E4] relative border-b border-[#C89B3C]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tagline="THE CULINARY JOURNAL"
          title="Bring ASLI AROMA™"
          italicTitle="Home."
          subtitle="Heritage recipes from royal courts and slow kitchens to celebrate the perfumes and nuances of unadulterated spice."
        />

        {/* Recipe Cards 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
          {RECIPES.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              onClick={() => setSelectedRecipe(recipe)}
              className="group bg-[#FFF8F6] border border-[#C89B3C]/30 hover:border-[#C89B3C] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:shadow-luxury-hover overflow-hidden"
            >
              {/* Inner Jaipur Miniature Hairline Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241711]">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/60 via-transparent to-transparent pointer-events-none" />

                {/* Difficulty & Time Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="label-caps bg-[#241711]/90 text-[#F6F0E4] px-2 py-0.5 text-[9px] border border-[#C89B3C]/40">
                    {recipe.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 bg-[#064D3B]/90 text-[#F6F0E4] px-2 py-0.5 text-[10px] font-mono border border-[#C89B3C]/30">
                  <Clock size={11} className="text-[#C89B3C]" />
                  <span>{recipe.cookTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  {/* Spice Used Highlight */}
                  <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-[#7A1624] mb-2">
                    <Sparkles size={11} className="text-[#C89B3C]" />
                    <span className="line-clamp-1">{recipe.spiceUsed}</span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#241711] group-hover:text-[#064D3B] transition-colors leading-snug">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-[#404944] mt-2 line-clamp-2 leading-relaxed">
                    {recipe.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#C89B3C]/20 flex items-center justify-between">
                  <span className="text-xs text-[#064D3B] font-medium tracking-wide uppercase flex items-center gap-1 group-hover:text-[#C89B3C] transition-colors">
                    Read Recipe
                    <ArrowUpRight size={14} />
                  </span>
                  <span className="text-[10px] font-mono text-[#404944]">
                    {recipe.servings}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recipe Masterclass Detail Modal */}
        <AnimatePresence>
          {selectedRecipe && (
            <div
              className="fixed inset-0 z-50 bg-[#003427]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedRecipe(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#F6F0E4] border-2 border-[#C89B3C] max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-5 right-5 text-[#241711] hover:text-[#7A1624] text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-[#C89B3C] bg-[#EFE6D4]"
                >
                  <X size={16} />
                </button>

                {/* Modal Header */}
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 text-xs label-caps text-[#7A1624] mb-2">
                    <span>{selectedRecipe.difficulty} CLASS</span>
                    <span className="text-[#C89B3C]">◆</span>
                    <span className="text-[#064D3B] font-semibold">{selectedRecipe.spiceUsed}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#241711]">
                    {selectedRecipe.title}
                  </h2>
                  <p className="text-sm text-[#404944] italic font-serif mt-1">
                    {selectedRecipe.subtitle}
                  </p>

                  {/* Recipe Metrics Bar */}
                  <div className="flex flex-wrap items-center gap-6 mt-4 py-3 border-y border-[#C89B3C]/30 text-xs font-mono text-[#241711]">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#C89B3C]" />
                      <span>Prep: {selectedRecipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ChefHat size={14} className="text-[#C89B3C]" />
                      <span>Cook: {selectedRecipe.cookTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-[#C89B3C]" />
                      <span>Serves: {selectedRecipe.servings}</span>
                    </div>
                  </div>

                  {/* Main Recipe Image */}
                  <div className="my-6 aspect-[16/9] overflow-hidden bg-[#241711] border border-[#C89B3C]/40">
                    <img
                      src={selectedRecipe.image}
                      alt={selectedRecipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Secret Spice Tip Box */}
                  <div className="p-4 bg-[#EFE6D4] border-l-4 border-[#C89B3C] text-xs text-[#241711] mb-6">
                    <span className="label-caps text-[#7A1624] block mb-1 font-semibold">
                      ◆ THE ASLI AROMA™ SECRET
                    </span>
                    <p className="leading-relaxed font-light">
                      {selectedRecipe.spiceSecret}
                    </p>
                  </div>

                  {/* Two Columns: Ingredients & Method */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Ingredients Column */}
                    <div className="md:col-span-5 bg-[#FFF8F6] p-5 border border-[#C89B3C]/30">
                      <h4 className="font-serif text-lg font-medium text-[#241711] mb-4 pb-2 border-b border-[#C89B3C]/20">
                        Ingredients
                      </h4>
                      <ul className="space-y-2.5 text-xs text-[#241711]/90">
                        {selectedRecipe.ingredients.map((ing, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#C89B3C] mt-0.5">•</span>
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Method Column */}
                    <div className="md:col-span-7">
                      <h4 className="font-serif text-lg font-medium text-[#241711] mb-4 pb-2 border-b border-[#C89B3C]/20">
                        Method & Culinary Execution
                      </h4>
                      <ol className="space-y-4 text-xs text-[#241711]/90 leading-relaxed">
                        {selectedRecipe.instructions.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#064D3B] text-[#F6F0E4] font-mono text-[10px] flex items-center justify-center font-bold">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Bottom Modal Confirmation */}
                  <div className="mt-8 pt-4 border-t border-[#C89B3C]/20 text-center">
                    <p className="text-[11px] font-mono text-[#064D3B] flex items-center justify-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#C89B3C]" />
                      Authentic Recipe tested with ASLI AROMA™ Single-Estate Botanicals
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
