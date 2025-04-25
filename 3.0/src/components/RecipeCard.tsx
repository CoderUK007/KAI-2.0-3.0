import React from 'react';
import { Clock, User, Heart } from 'lucide-react';
import { Recipe } from '../types/Recipe';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { toggleFavorite } = useRecipes();
  
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  return (
    <Link 
      to={`/recipe/${recipe.id}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            recipe.isFavorite
              ? 'bg-white text-red-500'
              : 'bg-white bg-opacity-70 text-gray-500 hover:text-red-500'
          } transition-colors`}
          aria-label={recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart size={20} fill={recipe.isFavorite ? '#EF4444' : 'none'} />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pt-8">
          <div className="flex space-x-2">
            {recipe.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-white bg-opacity-90 rounded-full text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center text-sm">
              <Clock size={16} className="mr-1" />
              <span>{totalTime} min</span>
            </div>
            <div className="flex items-center text-sm">
              <User size={16} className="mr-1" />
              <span>{recipe.servings}</span>
            </div>
          </div>
          <span className={`text-sm font-medium ${
            recipe.difficulty === 'Easy' ? 'text-green-600' : 
            recipe.difficulty === 'Medium' ? 'text-amber-600' : 'text-red-600'
          }`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;