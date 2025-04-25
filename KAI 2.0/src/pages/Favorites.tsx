import React from 'react';
import RecipeGrid from '../components/RecipeGrid';
import { useRecipes } from '../context/RecipeContext';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const { favorites } = useRecipes();

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="mb-12 text-center">
        <Heart size={48} className="mx-auto text-red-500 mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Favorite Recipes</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          All your saved recipes in one place for easy access.
        </p>
      </div>
      
      {favorites.length > 0 ? (
        <RecipeGrid 
          recipes={favorites} 
        />
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-2xl mx-auto">
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No favorites yet</h3>
          <p className="text-gray-500 mb-6">
            You haven't saved any recipes to your favorites yet. Browse our collection and click the heart icon to save recipes you love.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors"
          >
            Browse Recipes
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;