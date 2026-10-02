import React from 'react';
import { Hero } from '../components/Hero';
import { BrandStory } from '../components/BrandStory';
import { SpiceExplorer } from '../components/SpiceExplorer';
import { ProductShowcase } from '../components/ProductShowcase';
import { Authenticity } from '../components/Authenticity';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { RecipeSection } from '../components/RecipeSection';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { Product, PageRoute, SpiceExplorerItem } from '../types';

interface HomeProps {
  onNavigate: (page: PageRoute) => void;
  onQuickView: (product: Product) => void;
  onSelectSpice?: (spice: SpiceExplorerItem) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onQuickView,
  onSelectSpice
}) => {
  return (
    <main className="w-full">
      <Hero onNavigate={onNavigate} />
      <BrandStory onNavigate={onNavigate} />
      <SpiceExplorer onSelectSpice={onSelectSpice} />
      <ProductShowcase onQuickView={onQuickView} />
      <Authenticity />
      <ProcessTimeline />
      <RecipeSection />
      <Testimonials />
      <Newsletter />
    </main>
  );
};
