import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { RECIPES } from '../data/mockData';
import { Recipe } from '../types';
import { Clock, Users, Sparkles, X } from 'lucide-react';

export const Recipes: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes =
    selectedDifficulty === 'all'
      ? RECIPES
      : RECIPES.filter((r) => r.difficulty.toLowerCase() === selectedDifficulty.toLowerCase());

  return (
    <div className="pt-8 pb-24 bg-[#F6F0E4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="py-12 border-b border-[#C89B3C]/30 text-center">
          <SectionHeading
            tagline="ROYAL FEASTS & HERITAGE HEARTHS"
            title="The Imperial"
            italicTitle="Recipe Archive"
            subtitle="Master classical dishes where authentic whole spices and single-estate powders are celebrated as the primary culinary instrument."
            align="center"
            className="mx-auto"
          />
        </div>

        {/* Filter Pills */}
        <div className="py-6 flex items-center justify-center gap-2">
          {['all', 'gentle', 'intermediate', 'masterclass'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`label-caps px-4 py-2 text-xs transition-colors border ${
                selectedDifficulty === diff
                  ? 'bg-[#064D3B] text-[#F6F0E4] border-[#C89B3C]'
                  : 'bg-[#EFE6D4] text-[#241711] border-[#C89B3C]/30 hover:border-[#C89B3C]'
              }`}
            >
              {diff === 'all' ? 'All Masterclasses' : `${diff} Level`}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedRecipe(recipe)}
              className="bg-[#FFF8F6] border-2 border-[#C89B3C]/40 hover:border-[#C89B3C] p-4 sm:p-6 flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:shadow-luxury-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#241711] mb-5">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#7A1624] text-[#F6F0E4] px-3 py-1 label-caps text-[10px] border border-[#C89B3C]">
                  {recipe.difficulty}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#064D3B]/90 text-[#F6F0E4] px-2.5 py-1 text-xs font-mono border border-[#C89B3C]/30 flex items-center gap-1.5">
                  <Clock size={13} className="text-[#C89B3C]" />
                  <span>{recipe.cookTime}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#7A1624] mb-1.5 uppercase">
                  <Sparkles size={13} className="text-[#C89B3C]" />
                  <span>Spice Profile: {recipe.spiceUsed}</span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-[#241711] group-hover:text-[#064D3B] transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-xs text-[#404944] italic font-serif mt-1">
                  {recipe.subtitle}
                </p>

                {/* Secret Snippet */}
                <div className="mt-4 p-3 bg-[#EFE6D4] border-l-2 border-[#C89B3C] text-xs text-[#241711] line-clamp-2">
                  <strong>The Secret:</strong> {recipe.spiceSecret}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C89B3C]/20 flex items-center justify-between">
                <span className="text-xs font-mono text-[#404944] flex items-center gap-1">
                  <Users size={13} className="text-[#064D3B]" /> {recipe.servings}
                </span>
                <span className="label-caps text-xs text-[#064D3B] group-hover:text-[#C89B3C] transition-colors">
                  View Full Masterclass →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Masterclass Detail Modal */}
        <AnimatePresence>
          {selectedRecipe && (
            <div
              className="fixed inset-0 z-50 bg-[#002117]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedRecipe(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#F6F0E4] border-2 border-[#C89B3C] max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative my-8 max-h-[92vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-5 right-5 text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-[#C89B3C] bg-[#EFE6D4]"
                >
                  <X size={16} />
                </button>

                <div className="text-left">
                  <span className="label-caps text-xs text-[#7A1624] block mb-1">
                    {selectedRecipe.difficulty} CULINARY MASTERCLASS
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#241711]">
                    {selectedRecipe.title}
                  </h2>
                  <p className="text-sm text-[#404944] italic font-serif mt-1">
                    {selectedRecipe.subtitle}
                  </p>

                  <div className="my-6 aspect-[16/9] overflow-hidden bg-[#241711] border border-[#C89B3C]/40">
                    <img
                      src={selectedRecipe.image}
                      alt={selectedRecipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 bg-[#EFE6D4] border-l-4 border-[#C89B3C] text-xs text-[#241711] mb-6">
                    <span className="label-caps text-[#7A1624] block mb-1 font-semibold">
                      ◆ BOTANICAL SECRET
                    </span>
                    <p className="leading-relaxed font-light">
                      {selectedRecipe.spiceSecret}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-5 bg-[#FFF8F6] p-5 border border-[#C89B3C]/30">
                      <h4 className="font-serif text-lg font-medium text-[#241711] mb-3 pb-2 border-b border-[#C89B3C]/20">
                        Ingredients
                      </h4>
                      <ul className="space-y-2 text-xs text-[#241711]/90">
                        {selectedRecipe.ingredients.map((ing, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#C89B3C]">•</span>
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-7">
                      <h4 className="font-serif text-lg font-medium text-[#241711] mb-3 pb-2 border-b border-[#C89B3C]/20">
                        Preparation Method
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
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
