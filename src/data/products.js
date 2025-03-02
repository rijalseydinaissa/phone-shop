// src/data/products.js
export const products = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      brand: "Apple",
      price: 999,
      discountPrice: 899,
      image: "/public/images/phones/iphone-12-pro-max-graphite-hero-1.jpg",
      colors: ["Noir sidéral", "Argent", "Or", "Violet profond"],
      storage: ["128GB", "256GB", "512GB", "1TB"],
      specs: {
        screen: "6.1 pouces Super Retina XDR",
        camera: "Triple caméra 48MP",
        processor: "A16 Bionic",
        battery: "Jusqu'à 23 heures"
      },
      featured: true,
      inStock: true,
      rating: 4.8
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      brand: "Samsung",
      price: 1199,
      discountPrice: null,
      image: "/public/images/phones/iphone-12-pro-max-graphite-hero-1.jpg",
      colors: ["Noir fantôme", "Vert", "Crème", "Lavande"],
      storage: ["256GB", "512GB", "1TB"],
      specs: {
        screen: "6.8 pouces Dynamic AMOLED 2X",
        camera: "Quad caméra 200MP",
        processor: "Snapdragon 8 Gen 2",
        battery: "5000mAh"
      },
      featured: true,
      inStock: true,
      rating: 4.7
    },
    {
      id: 3,
      name: "Google Pixel 7 Pro",
      brand: "Google",
      price: 899,
      discountPrice: 799,
      image: "/public/images/phones/iphone-12-pro-max-graphite-hero-1.jpg",
      colors: ["Noir obsidienne", "Blanc neige", "Vert sauge"],
      storage: ["128GB", "256GB", "512GB"],
      specs: {
        screen: "6.7 pouces LTPO OLED",
        camera: "Triple caméra 50MP",
        processor: "Google Tensor G2",
        battery: "5000mAh"
      },
      featured: false,
      inStock: true,
      rating: 4.5
    },
    {
      id: 4,
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      price: 799,
      discountPrice: 749,
      image: "public/images/phones/téléchargement (2).jpeg",
      colors: ["Noir céramique", "Blanc céramique", "Vert"],
      storage: ["128GB", "256GB", "512GB"],
      specs: {
        screen: "6.73 pouces AMOLED",
        camera: "Triple caméra 50MP Leica",
        processor: "Snapdragon 8 Gen 2",
        battery: "4820mAh"
      },
      featured: false,
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: "Nothing Phone (2)",
      brand: "Nothing",
      price: 699,
      discountPrice: 649,
      image: "public/images/phones/téléchargement (2).jpeg",
      colors: ["Blanc", "Noir"],
      storage: ["128GB", "256GB"],
      specs: {
        screen: "6.7 pouces LTPO OLED",
        camera: "Double caméra 50MP",
        processor: "Snapdragon 8+ Gen 1",
        battery: "4700mAh"
      },
      featured: true,
      inStock: true,
      rating: 4.3
    }
  ];
  
  