import React, { useState, useEffect } from 'react';
import { Menu, Search, X, Heart, Home } from 'lucide-react';
import { useRecipes } from '../context/RecipeContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { updateFilters, filters, clearFilters } = useRecipes();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({ searchQuery: e.target.value });
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (isSearchActive) {
      updateFilters({ searchQuery: '' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="text-2xl font-bold text-emerald-600 flex items-center" 
            onClick={() => {
              clearFilters();
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="mr-2">Recipe</span>
            <span className="text-orange-500">Finder</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-all duration-200 hover:text-emerald-600 ${
                location.pathname === '/' ? 'text-emerald-600 font-medium' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/favorites" 
              className={`transition-all duration-200 hover:text-emerald-600 ${
                location.pathname === '/favorites' ? 'text-emerald-600 font-medium' : 'text-gray-700'
              }`}
            >
              Favorites
            </Link>
            <div className="relative">
              <div className={`flex items-center border rounded-full overflow-hidden transition-all duration-300 ${
                isSearchActive ? 'w-64 bg-white border-emerald-300' : 'w-10 bg-gray-100'
              }`}>
                <button 
                  onClick={toggleSearch}
                  className="p-2 text-gray-500 hover:text-emerald-600 transition-colors"
                  aria-label="Search"
                >
                  {isSearchActive ? <X size={20} /> : <Search size={20} />}
                </button>
                {isSearchActive && (
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    className="w-full py-2 pr-4 outline-none"
                    value={filters.searchQuery}
                    onChange={handleSearch}
                    autoFocus
                  />
                )}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              aria-label="Search"
            >
              {isSearchActive ? <X size={20} /> : <Search size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchActive && (
          <div className="md:hidden mt-2 px-4 pb-2">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full py-2 px-4 border border-gray-300 rounded-full outline-none focus:border-emerald-500"
              value={filters.searchQuery}
              onChange={handleSearch}
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-30 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl`}
      >
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-emerald-600">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-emerald-600"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link 
                to="/" 
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => {
                  clearFilters();
                  setIsMobileMenuOpen(false);
                }}
              >
                <Home size={20} className="mr-3 text-emerald-600" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/favorites" 
                className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart size={20} className="mr-3 text-emerald-600" />
                <span>Favorites</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;