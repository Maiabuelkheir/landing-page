import React from 'react';
import LandingPage from './components/Header';
import BannerGrid from './components/BannerGrid';
import BannerSlider from './components/BannerSlider';
import ProductSlider from './components/ProductSlider';


import './assets/css/style.css';

function App() {
  return (
    <div>
      <LandingPage />
      <BannerSlider />
      <BannerGrid />
      <ProductSlider />
    </div>
  );
}

export default App;
