// src/components/sections/Promotions.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Promotions = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animation des cartes avec délai
          cardRefs.current.forEach((card, index) => {
            setTimeout(() => {
              if (card) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }
            }, 150 * index);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Données fictives pour les promotions
  const promotions = [
    {
      id: 1,
      title: "Offre de Lancement",
      description: "Jusqu'à -20% sur tous les nouveaux modèles",
      image: "/images/promos/launch.jpg",
      color: "from-blue-500 to-purple-600",
      buttonText: "Découvrir"
    },
    {
      id: 2,
      title: "Pack Accessoires",
      description: "Un étui offert pour tout achat d'un smartphone",
      image: "/images/promos/accessories.jpg",
      color: "from-green-500 to-teal-600",
      buttonText: "En savoir plus"
    },
    {
      id: 3,
      title: "Économies Étudiantes",
      description: "-15% pour les étudiants sur présentation de carte",
      image: "/images/promos/student.jpg",
      color: "from-orange-500 to-red-600",
      buttonText: "Voir l'offre"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Promotions Exclusives</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ne manquez pas nos offres spéciales à durée limitée
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div 
              key={promo.id}
              ref={el => cardRefs.current[index] = el}
              className="opacity-0 transform translate-y-12 transition-all duration-700 ease-out"
            >
              <div className={`rounded-2xl overflow-hidden shadow-lg h-full bg-gradient-to-br ${promo.color} text-white`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                  <p className="mb-6 opacity-90">{promo.description}</p>
                  
                  <Link 
                    to={`/promotions/${promo.id}`}
                    className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors shadow"
                  >
                    {promo.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;