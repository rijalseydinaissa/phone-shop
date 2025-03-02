// src/components/sections/Brands.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { brands } from '../../data/brands';

const Brands = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const brandRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animation du titre
          if (titleRef.current) {
            titleRef.current.style.opacity = '1';
            titleRef.current.style.transform = 'translateY(0)';
          }
          
          // Animation des logos avec délai
          brandRefs.current.forEach((brand, index) => {
            setTimeout(() => {
              if (brand) {
                brand.style.opacity = '1';
                brand.style.transform = 'translateY(0) rotate(0deg)';
              }
            }, 100 * index);
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
    <section ref={sectionRef} className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className="text-center mb-12 opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nos Marques Partenaires</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les plus grandes marques de smartphones disponibles dans notre boutique
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <Link 
              key={brand.id}
              to={`/brands/${brand.id}`}
              ref={el => brandRefs.current[index] = el}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-lg hover:transform hover:scale-105 opacity-0 transform translate-y-8 rotate-3"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-12 mb-4 object-contain"
              />
              <div className="text-center">
                <h3 className="font-medium text-gray-900">{brand.name}</h3>
                <p className="text-sm text-gray-500">{brand.products} produits</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;