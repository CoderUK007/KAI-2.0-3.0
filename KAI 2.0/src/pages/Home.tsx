import React, { useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import RecipeGrid from '../components/RecipeGrid';
import { useRecipes } from '../context/RecipeContext';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { filteredRecipes, favorites, clearFilters } = useRecipes();

  // Clear filters when component mounts
  useEffect(() => {
    clearFilters();
  }, []);

  // Get featured recipes (in a real app, this would be determined by some criteria)
  const featuredRecipes = filteredRecipes.slice(0, 3);

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your Next <span className="text-emerald-600">Delicious</span> Meal
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover recipes tailored to your taste, dietary needs, and available ingredients.
          Find inspiration for your next culinary adventure.
        </p>
      </div>
      
      {/* Filters */}
      <FilterBar />
      
      {/* Featured Recipes */}
      {featuredRecipes.length > 0 && filteredRecipes.length === sampleRecipes.length && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Recipes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      )}
      
      {/* Recently Favorited (show only when there are favorites and no search is active) */}
      {favorites.length > 0 && filteredRecipes.length === sampleRecipes.length && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Favorites</h2>
            <Link 
              to="/favorites" 
              className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>View all</span>
              <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {favorites.slice(0, 3).map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      )}
      
      {/* All Recipes or Search Results */}
      <div>
        <RecipeGrid 
          recipes={filteredRecipes} 
          title={filteredRecipes.length !== sampleRecipes.length ? "Search Results" : "All Recipes"}
          emptyMessage="No recipes match your search criteria. Try adjusting your filters or search term."
        />
      </div>
    </div>
  );
};

// Get this from context to avoid circular imports
const sampleRecipes = Array(6).fill(null);

export default Home;