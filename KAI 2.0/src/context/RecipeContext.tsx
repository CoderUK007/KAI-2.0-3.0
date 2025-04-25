import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Recipe, RecipeFilters, Cuisine, DietaryFilter, TimeFilter } from '../types/Recipe';
import { sampleRecipes } from '../data/sampleRecipes';

interface RecipeContextType {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
  favorites: Recipe[];
  filters: RecipeFilters;
  updateFilters: (newFilters: Partial<RecipeFilters>) => void;
  toggleFavorite: (id: string) => void;
  getRecipeById: (id: string) => Recipe | undefined;
  clearFilters: () => void;
}

const defaultFilters: RecipeFilters = {
  searchQuery: '',
  cuisine: 'All',
  dietary: 'All',
  time: 'All'
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(sampleRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [filters, setFilters] = useState<RecipeFilters>(defaultFilters);

  // Initialize favorites from recipes marked as favorite
  useEffect(() => {
    const initialFavorites = recipes.filter(recipe => recipe.isFavorite);
    setFavorites(initialFavorites);
  }, []);

  // Apply filters whenever filters or recipes change
  useEffect(() => {
    let result = [...recipes];

    // Apply search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(recipe => 
        recipe.title.toLowerCase().includes(query) || 
        recipe.description.toLowerCase().includes(query) || 
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Apply cuisine filter
    if (filters.cuisine !== 'All') {
      result = result.filter(recipe => recipe.cuisine === filters.cuisine);
    }

    // Apply dietary filter
    if (filters.dietary !== 'All') {
      const dietaryFilter = filters.dietary.toLowerCase();
      result = result.filter(recipe => 
        recipe.tags.some(tag => tag.toLowerCase() === dietaryFilter)
      );
    }

    // Apply time filter
    if (filters.time !== 'All') {
      result = result.filter(recipe => {
        const totalTime = recipe.prepTime + recipe.cookTime;
        switch (filters.time) {
          case 'Quick': return totalTime <= 30;
          case 'Medium': return totalTime > 30 && totalTime <= 60;
          case 'Slow': return totalTime > 60;
          default: return true;
        }
      });
    }

    setFilteredRecipes(result);
  }, [filters, recipes]);

  const updateFilters = (newFilters: Partial<RecipeFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const toggleFavorite = (id: string) => {
    const updatedRecipes = recipes.map(recipe => 
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    );
    
    setRecipes(updatedRecipes);
    
    // Update favorites list
    const updatedRecipe = updatedRecipes.find(recipe => recipe.id === id);
    if (updatedRecipe) {
      if (updatedRecipe.isFavorite) {
        setFavorites(prev => [...prev, updatedRecipe]);
      } else {
        setFavorites(prev => prev.filter(recipe => recipe.id !== id));
      }
    }
  };

  const getRecipeById = (id: string) => {
    return recipes.find(recipe => recipe.id === id);
  };

  return (
    <RecipeContext.Provider value={{
      recipes,
      filteredRecipes,
      favorites,
      filters,
      updateFilters,
      toggleFavorite,
      getRecipeById,
      clearFilters
    }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};