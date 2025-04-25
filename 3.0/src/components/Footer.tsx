import React from 'react';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-emerald-600 mb-4 flex items-center">
              <span className="mr-1">Recipe</span>
              <span className="text-orange-500">Finder</span>
            </div>
            <p className="text-gray-600 mb-4">
              Discover delicious recipes tailored to your preferences and dietary needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Popular Recipes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">New Recipes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Seasonal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Cooking Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Techniques</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Nutrition Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Kitchen Hacks</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;