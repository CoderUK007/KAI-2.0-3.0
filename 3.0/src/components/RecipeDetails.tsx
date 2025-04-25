import React, { useState } from 'react';
import { Clock, User, ChefHat, Flame, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Recipe } from '../types/Recipe';
import { useRecipes } from '../context/RecipeContext';
import { Link, useNavigate } from 'react-router-dom';

interface RecipeDetailsProps {
  recipe: Recipe;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  const { toggleFavorite } = useRecipes();
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  const navigate = useNavigate();
  
  const handleFavoriteClick = () => {
    toggleFavorite(recipe.id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: window.location.href,
      }).catch((error) => {
        console.log('Error sharing:', error);
      });
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          alert('Link copied to clipboard!');
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
    }
  };

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="relative h-72 md:h-full">
            <img 
              className="w-full h-full object-cover" 
              src={recipe.imageUrl} 
              alt={recipe.title} 
            />
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-emerald-600 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 md:w-1/2">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                  {recipe.cuisine}
                </span>
                {recipe.tags.slice(0, 1).map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{recipe.title}</h1>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handleFavoriteClick}
                className={`p-2 rounded-full transition-colors ${
                  recipe.isFavorite ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500 hover:text-red-500'
                }`}
                aria-label={recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart size={20} fill={recipe.isFavorite ? '#EF4444' : 'none'} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-100 text-gray-500 hover:text-emerald-600 transition-colors"
                aria-label="Share recipe"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <p className="mt-3 text-gray-600">{recipe.description}</p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-gray-50">
              <Clock className="mx-auto text-emerald-500 mb-1" size={20} />
              <span className="block text-xs text-gray-500">Total Time</span>
              <span className="block font-medium">{totalTime} min</span>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-50">
              <Flame className="mx-auto text-emerald-500 mb-1" size={20} />
              <span className="block text-xs text-gray-500">Calories</span>
              <span className="block font-medium">{recipe.calories}</span>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-50">
              <User className="mx-auto text-emerald-500 mb-1" size={20} />
              <span className="block text-xs text-gray-500">Servings</span>
              <span className="block font-medium">{recipe.servings}</span>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-50">
              <ChefHat className="mx-auto text-emerald-500 mb-1" size={20} />
              <span className="block text-xs text-gray-500">Difficulty</span>
              <span className={`block font-medium ${
                recipe.difficulty === 'Easy' ? 'text-green-600' : 
                recipe.difficulty === 'Medium' ? 'text-amber-600' : 'text-red-600'
              }`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 border-t">
        <div className="flex border-b mb-6">
          <button
            className={`pb-2 px-4 text-center ${
              activeTab === 'ingredients'
                ? 'border-b-2 border-emerald-500 text-emerald-600 font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
          <button
            className={`pb-2 px-4 text-center ${
              activeTab === 'instructions'
                ? 'border-b-2 border-emerald-500 text-emerald-600 font-medium'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </button>
        </div>

        {activeTab === 'ingredients' && (
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-emerald-500 rounded-full"></span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'instructions' && (
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mr-3 font-medium text-sm">
                  {index + 1}
                </span>
                <span className="mt-0.5">{instruction}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;