import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeView from './pages/RecipeView';
import Favorites from './pages/Favorites';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeView />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App;