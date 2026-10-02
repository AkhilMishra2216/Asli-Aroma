export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: 'whole' | 'ground' | 'blends' | 'gifts' | 'achars';
  shortDescription: string;
  description: string;
  origin: string;
  terroir: string;
  weight: string;
  availableWeights: string[];
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  volatileOil: string;
  aromaNotes: string[];
  flavorProfile: string;
  pairingSuggestions: string[];
  harvestSeason: string;
  inStock: boolean;
  isSignature?: boolean;
  badge?: string;
  packagingType: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight: string;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  spiceUsed: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: 'Gentle' | 'Intermediate' | 'Masterclass';
  ingredients: string[];
  spiceSecret: string;
  instructions: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  detail: string;
}

export interface SpiceExplorerItem {
  id: string;
  name: string;
  hindiName: string;
  image: string;
  origin: string;
  estateTag: string;
  description: string;
  volatileOil: string;
  aromaNotes: string[];
  pairing: string;
}

export type PageRoute = 'home' | 'shop' | 'our-story' | 'recipes' | 'journal';
