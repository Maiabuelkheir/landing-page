import React, { useEffect } from 'react';
import LandingPage from './components/Header';
import BannerGrid from './components/BannerGrid';
import BannerSlider from './components/BannerSlider';
import ProductSlider from './components/ProductSlider';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/style.css';

function App() {
useEffect(() => {
  AOS.init({ duration: 800, once: false , mirror: true, loop:true });
  AOS.refresh(); 
}, []);


  return (
    <div>
      <LandingPage data-aos="fade-down" />
      <BannerSlider data-aos="fade-up" />
      <BannerGrid data-aos="fade-up" />
      <ProductSlider data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </div>
  );
}

export default App;
