// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0); // Simulé pour le moment

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
            PmgApple
            </span>
          </Link>

          {/* Navigation - version desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/products" 
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Téléphones
            </Link>
            {/* <Link 
              to="/brands" 
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Marques
            </Link> */}
            <Link 
              to="/promotions" 
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Promotions
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions - recherche, panier, etc. */}
          <div className="flex items-center space-x-4">
            <button 
              className={`p-2 rounded-full hover:bg-blue-100 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link 
              to="/cart" 
              className={`p-2 rounded-full hover:bg-blue-100 transition-colors relative ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Bouton menu hamburger (mobile) */}
            <button 
              className={`md:hidden p-2 rounded-full hover:bg-blue-100 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/products" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Téléphones
            </Link>
            <Link 
              to="/brands" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Marques
            </Link>
            <Link 
              to="/promotions" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Promotions
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;