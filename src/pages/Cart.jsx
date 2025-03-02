// src/pages/Cart.jsx
import React from 'react';

const Cart = () => {
  // Simuler des articles dans le panier
  const cartItems = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 999,
      quantity: 1,
      image: "/images/phones/iphone-12-pro-max-graphite-hero-1.jpg"
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      price: 1199,
      quantity: 1,
      image: "/images/phones/samsung-s23-ultra.jpg"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Votre Panier</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Liste des articles */}
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain mr-6"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="mt-2 flex items-center">
                      <button className="px-3 py-1 bg-gray-100 rounded-full">-</button>
                      <span className="mx-4">{item.quantity}</span>
                      <button className="px-3 py-1 bg-gray-100 rounded-full">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Résumé de la commande */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Résumé de la commande</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span className="font-medium">${total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className="font-medium">$0</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-900 font-semibold">Total</span>
                  <span className="text-blue-600 font-bold">${total}</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md">
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;