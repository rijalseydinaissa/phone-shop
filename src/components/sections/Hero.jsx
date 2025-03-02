// src/components/sections/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const phoneRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation pour faire apparaître le téléphone avec une rotation
    if (phoneRef.current) {
      phoneRef.current.style.opacity = '0';
      phoneRef.current.style.transform = 'translateY(50px) rotate(-10deg)';
      
      setTimeout(() => {
        phoneRef.current.style.transition = 'all 1s ease-out';
        phoneRef.current.style.opacity = '1';
        phoneRef.current.style.transform = 'translateY(0) rotate(0deg)';
      }, 300);
    }

    // Animation pour faire apparaître le texte
    if (textRef.current) {
      const children = textRef.current.children;
      for (let i = 0; i < children.length; i++) {
        children[i].style.opacity = '0';
        children[i].style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          children[i].style.transition = 'all 0.7s ease-out';
          children[i].style.opacity = '1';
          children[i].style.transform = 'translateY(0)';
        }, 500 + (i * 200));
      }
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28 flex flex-col md:flex-row items-center">
          {/* Texte du Hero */}
          <div ref={textRef} className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Découvrez le Futur de la Téléphonie
            </h1>
            <p className="mt-6 text-xl text-blue-200">
              Les derniers smartphones haut de gamme aux meilleurs prix
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link 
                to="/products" 
                className="px-8 py-4 bg-blue-600 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Voir Tous les Téléphones
              </Link>
              {/* <Link 
                to="/promotion" 
                className="px-8 py-4 bg-transparent border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-800/20 transition-all duration-300"
              >
                Offres Spéciales
              </Link> */}
            </div>
          </div>
          
          {/* Image du téléphone */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div ref={phoneRef} className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <img 
                src="public/images/phones/iphone-12-pro-max-graphite-hero-1.jpg" 
                alt="Smartphone dernière génération" 
                className="relative z-10 max-h-76 md:max-h-[22rem] object-contain"
              />
              
              {/* Cercles décoratifs */}
              <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-purple-500/30 blur-md"></div>
              <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-blue-400/40 blur-md"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vagues décoratives en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 73.3C480 66.7 600 73.3 720 70C840 66.7 960 53.3 1080 50C1200 46.7 1320 53.3 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;