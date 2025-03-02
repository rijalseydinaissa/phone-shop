// src/components/sections/FeaturedProducts.jsx
import React, { useEffect, useRef } from 'react';
import Card from '../ui/Card';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const titreRef = useRef(null);
  const cardsRef = useRef([]);
  
  // Filtrer les produits en vedette
  const featuredProducts = products.filter(product => product.featured);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animation du titre
          if (titreRef.current) {
            titreRef.current.style.opacity = '1';
            titreRef.current.style.transform = 'translateY(0)';
          }
          
          // Animation des cartes avec délai
          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              if (card) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }
            }, 200 * index);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titreRef} 
          className="text-center mb-12 opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Produits Vedettes</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection des meilleurs smartphones du moment
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              ref={el => cardsRef.current[index] = el}
              className="opacity-0 transform translate-y-16 transition-all duration-700"
            >
              <Card product={product} />
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Voir tous les téléphones
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProducts;