// src/components/ui/Card.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { id, name, brand, price, discountPrice, image, rating, inStock } = product;
  
  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      style={{ 
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)', 
        transition: 'transform 0.3s ease-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge de réduction */}
      {/* {discountPrice && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
          -{Math.round((price - discountPrice) / price * 100)}%
        </div>
      )} */}
      
      {/* Badge "Rupture de stock" */}
      {!inStock && (
        <div className="absolute top-3 right-3 z-10 bg-gray-700 text-white text-sm font-bold px-2 py-1 rounded-full">
          Rupture
        </div>
      )}
      
      {/* Image du produit */}
      <div className="relative pt-8 px-6 flex justify-center h-64 bg-gradient-to-b from-gray-100 to-white">
        <img 
          src={image} 
          alt={name} 
          className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay des actions rapides */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
        >
          <div className="flex gap-3">
            <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Informations sur le produit */}
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-1">{brand}</p>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        
        {/* Prix */}
        <div className="flex items-center gap-2 mb-3">
          {discountPrice ? (
            <>
              <span className="text-xl font-bold text-blue-600">{discountPrice}Fcfa</span>
              <span className="text-sm text-gray-500 line-through">{price}Fcfa</span>
            </>
          ) : (
            <span className="text-xl font-bold text-blue-600">{price}Fcfa</span>
          )}
        </div>
        {/* Étoiles */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-1 text-sm text-gray-500">({rating})</span>
        </div>
        
        {/* Bouton d'ajout au panier */}
        <div className="flex items-center justify-between">
          <Link 
            to={`/products/${id}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Voir détails
          </Link>
          
          <button 
            className={`flex items-center justify-center px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
              inStock 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
            disabled={!inStock}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;