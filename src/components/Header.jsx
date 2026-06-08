import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const products = [...Array(25)]; 

  return (
    <div className="landing-page">
      <div className="container">
        <header className="lp-header">
          <div className="logo">
            <img src="./img/logo.jpg" alt="Logo" className="logo-img" />
          </div>

          <i
            className="fa-solid fa-bars mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
          ></i>

          <div className="header-icons">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </header>


        <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
          <i
            className="fa-solid fa-xmark close-btn"
            onClick={() => setMenuOpen(false)}
          ></i>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <section className="hero">
          <div className="hero-text">
            <h1>Discover Amazing Products</h1>
            <p>Special deals just for you. Don’t miss out!</p>
            <button className="cta-btn">Shop Now</button>
          </div>

          <div className="hero-images" data-aos="fade-up">
            {["1.png", "2.png", "3.png"].map((img, i) => (
              <motion.img
                key={i}
                src={`img/${img}`}
                alt={`Product ${i + 1}`}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: i * 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`hero-img hero-img-${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Product Slider Section */}
        <section className="product-slider-section" data-aos="fade-up">
          <div className="top_slide">
            <motion.h2
              initial={{ x: 1000 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <i className="fa-solid fa-tags"></i> All Categories
            </motion.h2>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={10}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            navigation
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              576: { slidesPerView: 2, spaceBetween: 15 },
              992: { slidesPerView: 3, spaceBetween: 20 },
              1200: { slidesPerView: 8, spaceBetween: 20 },
            }}
          >
            {products.map((_, i) => (
              <SwiperSlide key={i}>
                <div className="product-card" data-aos="fade-up">
                  <img src={`./img/product/${i}.png`} alt={`Product ${i}`} />
                  <p>Product {i + 1}</p>
                  <div className="price">
                    <span>$50</span>
                    <span className="old-price">$80</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Second Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="top_header">
            <div className="container">
              <a href="#" className="logo">
                <img src="img/logo.jpg" alt="" />
              </a>
              <form className="search_box">
                <div className="select_box">
                  <select id="category" name="category">
                    <option value="All Categories">All Categories</option>
                    <option value="Cleansers">Cleansers</option>
                    <option value="Moisturizers">Moisturizers</option>
                    <option value="Serums">Serums</option>
                    <option value="Masks">Masks</option>
                    <option value="Sunscreen">Sunscreen</option>
                    <option value="Eye Care">Eye Care</option>
                    <option value="Lip Care">Lip Care</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for Products"
                  required
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <div className="header_icons">
                <div className="icon">
                  <a href="#">
                    <i className="fa-regular fa-heart"></i>
                    <span className="count count_favourite">0</span>
                  </a>
                </div>
                <div className="icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="count count_item_header">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_header">
            <div className="container">
              <nav className="nav">
                <div className="category_nav">
                  <div className="category_btn">
                    <i className="fa-solid fa-bars"></i>
                    <p>Browse Category</p>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div className="category_nav_list">
                    <a href="#">Top 10 Offers</a>
                    <a href="#">Electronics & Digital</a>
                    <a href="#">Phones & Tablet</a>
                    <a href="#">Fashion & Clothings</a>
                    <a href="#">Television & Monitor</a>
                    <a href="#">Jewelry & Watches</a>
                    <a href="#">Toys & Hobbies</a>
                  </div>
                </div>
                <ul className="nav_links">
                  <li className="active">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="login_signup btns">
               <Link to="/login" className="btn">
  Login <i className="fa-solid fa-right-to-bracket"></i>
</Link>
                 <Link to="/signup" className="btn">
                  Sign UP <i className="fa-solid fa-user-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </motion.header>
      </div>
    </div>
  );
}

export default Header;
