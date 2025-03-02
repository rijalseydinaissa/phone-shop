import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white"> PmgApple</span>
            </div>
            <p className="text-gray-400">
              Les derniers smartphones aux meilleurs prix. Votre boutique de confiance depuis 2023.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Téléphones</Link></li>
              <li><Link to="/brands" className="text-gray-400 hover:text-white transition-colors">Marques</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-white transition-colors">Promotions</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Livraison</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Retours & Remboursements</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions Générales</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.95-4.95a2 2 0 010-2.828l4.243-4.243a2 2 0 012.828 0l4.95 4.95a2 2 0 010 2.828z" />
                </svg>
                <span>123 Rue des Téléphones, Dakar, Sénégal</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
                <span>contact@techphone.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l1.25 2.5M9 21l2.5-5M21 10l-1.25 2.5M15 3l-2.5 5M9 3l2.5 5" />
                </svg>
                <span>+221 77 123 45 67</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">&copy; 2025 PmgApple. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
