export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  ingredients: string[];
  instructions: string[];
  isFavorite: boolean;
}

export type Cuisine = 'Italian' | 'Mexican' | 'Asian' | 'American' | 'Mediterranean' | 'Indian' | 'All';
export type DietaryFilter = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Dairy-Free' | 'All';
export type TimeFilter = 'Quick' | 'Medium' | 'Slow' | 'All';

export interface RecipeFilters {
  searchQuery: string;
  cuisine: Cuisine;
  dietary: DietaryFilter;
  time: TimeFilter;
}