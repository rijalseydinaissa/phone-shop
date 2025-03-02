// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="text-center py-16">Produit non trouvé</div>;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image du produit */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Détails du produit */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-xl text-gray-600">{product.brand}</p>

            {/* Prix */}
            <div className="mt-6">
              {product.discountPrice ? (
                <>
                  <span className="text-3xl font-bold text-blue-600">
                    ${product.discountPrice}
                  </span>
                  <span className="ml-4 text-xl text-gray-500 line-through">
                    ${product.price}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
              )}
            </div>

            {/* Couleurs disponibles */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">Couleurs disponibles</h3>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-gray-200"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Stockage disponible */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">Stockage</h3>
              <div className="flex gap-2 mt-2">
                {product.storage.map((storage, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                  >
                    {storage}
                  </div>
                ))}
              </div>
            </div>

            {/* Bouton d'ajout au panier */}
            <div className="mt-8">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>

        {/* Spécifications techniques */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Spécifications techniques</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{key}</h3>
                <p className="mt-2 text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;