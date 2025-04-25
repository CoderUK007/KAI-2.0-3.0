import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import RecipeDetails from '../components/RecipeDetails';
import { useRecipes } from '../context/RecipeContext';
import RecipeGrid from '../components/RecipeGrid';

const RecipeView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getRecipeById, filteredRecipes } = useRecipes();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!id) {
    return <Navigate to="/" />;
  }
  
  const recipe = getRecipeById(id);
  
  if (!recipe) {
    return <Navigate to="/" />;
  }
  
  // Get similar recipes (same cuisine, exclude current recipe)
  const similarRecipes = filteredRecipes
    .filter(r => r.cuisine === recipe.cuisine && r.id !== recipe.id)
    .slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <RecipeDetails recipe={recipe} />
      
      {similarRecipes.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Recipes</h2>
          <RecipeGrid recipes={similarRecipes} />
        </div>
      )}
    </div>
  );
};

export default RecipeView;