// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Brands from '../components/sections/Brands';
import Promotions from '../components/sections/Promotions';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  return (
    <div className="pt-16"> {/* Pour compenser la hauteur du header fixe */}
      <Hero />
      <FeaturedProducts />
      <Promotions />
      <Brands />
      <Newsletter />
    </div>
  );
};

export default Home;