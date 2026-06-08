import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './components/Header';
import BannerGrid from './components/BannerGrid';
import BannerSlider from './components/BannerSlider';
import ProductSlider from './components/ProductSlider';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/css/style.css';

function Home() {
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

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true, loop: true });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;