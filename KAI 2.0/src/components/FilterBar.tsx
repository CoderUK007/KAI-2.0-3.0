import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useRecipes } from '../context/RecipeContext';
import { Cuisine, DietaryFilter, TimeFilter } from '../types/Recipe';

const FilterBar: React.FC = () => {
  const { filters, updateFilters, clearFilters } = useRecipes();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const cuisines: Cuisine[] = ['Italian', 'Mexican', 'Asian', 'American', 'Mediterranean', 'Indian', 'All'];
  const dietaryOptions: DietaryFilter[] = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'All'];
  const timeOptions: TimeFilter[] = ['Quick', 'Medium', 'Slow', 'All'];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleCuisineChange = (cuisine: Cuisine) => {
    updateFilters({ cuisine });
    setActiveDropdown(null);
  };

  const handleDietaryChange = (dietary: DietaryFilter) => {
    updateFilters({ dietary });
    setActiveDropdown(null);
  };

  const handleTimeChange = (time: TimeFilter) => {
    updateFilters({ time });
    setActiveDropdown(null);
  };

  const hasActiveFilters = 
    filters.cuisine !== 'All' || 
    filters.dietary !== 'All' || 
    filters.time !== 'All';

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-8">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">Filters</h2>
        
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          {/* Cuisine Filter */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('cuisine')}
              className={`px-4 py-2 rounded-full border flex items-center space-x-1 transition-colors ${
                filters.cuisine !== 'All' 
                  ? 'border-emerald-500 text-emerald-700 bg-emerald-50'
                  : 'border-gray-300 text-gray-700 hover:border-emerald-400'
              }`}
              aria-expanded={activeDropdown === 'cuisine'}
              aria-haspopup="listbox"
            >
              <span>{filters.cuisine}</span>
              <ChevronDown size={16} />
            </button>
            
            {activeDropdown === 'cuisine' && (
              <div className="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                <ul className="py-1 max-h-60 overflow-auto" role="listbox">
                  {cuisines.map((cuisine) => (
                    <li 
                      key={cuisine}
                      onClick={() => handleCuisineChange(cuisine)}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        filters.cuisine === cuisine ? 'bg-emerald-50 text-emerald-700' : ''
                      }`}
                      role="option"
                    >
                      {cuisine}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Dietary Filter */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('dietary')}
              className={`px-4 py-2 rounded-full border flex items-center space-x-1 transition-colors ${
                filters.dietary !== 'All' 
                  ? 'border-emerald-500 text-emerald-700 bg-emerald-50'
                  : 'border-gray-300 text-gray-700 hover:border-emerald-400'
              }`}
              aria-expanded={activeDropdown === 'dietary'}
              aria-haspopup="listbox"
            >
              <span>{filters.dietary}</span>
              <ChevronDown size={16} />
            </button>
            
            {activeDropdown === 'dietary' && (
              <div className="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                <ul className="py-1" role="listbox">
                  {dietaryOptions.map((option) => (
                    <li 
                      key={option}
                      onClick={() => handleDietaryChange(option)}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        filters.dietary === option ? 'bg-emerald-50 text-emerald-700' : ''
                      }`}
                      role="option"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Time Filter */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('time')}
              className={`px-4 py-2 rounded-full border flex items-center space-x-1 transition-colors ${
                filters.time !== 'All' 
                  ? 'border-emerald-500 text-emerald-700 bg-emerald-50'
                  : 'border-gray-300 text-gray-700 hover:border-emerald-400'
              }`}
              aria-expanded={activeDropdown === 'time'}
              aria-haspopup="listbox"
            >
              <span>{filters.time}</span>
              <ChevronDown size={16} />
            </button>
            
            {activeDropdown === 'time' && (
              <div className="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                <ul className="py-1" role="listbox">
                  {timeOptions.map((option) => (
                    <li 
                      key={option}
                      onClick={() => handleTimeChange(option)}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        filters.time === option ? 'bg-emerald-50 text-emerald-700' : ''
                      }`}
                      role="option"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-full border border-red-300 text-red-600 hover:bg-red-50 flex items-center space-x-1 transition-colors"
            >
              <X size={16} />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;