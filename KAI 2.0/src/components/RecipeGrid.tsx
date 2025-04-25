import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types/Recipe';
import { ChefHat } from 'lucide-react';

interface RecipeGridProps {
  recipes: Recipe[];
  title?: string;
  emptyMessage?: string;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ 
  recipes, 
  title, 
  emptyMessage = "No recipes found matching your criteria."
}) => {
  return (
    <div>
      {title && <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>}
      
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <ChefHat size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Recipes Found</h3>
          <p className="text-gray-500">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeGrid;