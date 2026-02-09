import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

function ProductSlider() {
  const products = [...Array(8)];

  return (
    <div className="slider_products slide">
      <div className="container">
        <div className="top_slide">
          <motion.h2
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <i className="fa-solid fa-tags"></i> Hot Deals
          </motion.h2>
        </div>

        <Swiper
          className="slide_product mySwiper"
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {products.map((_, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="product"
                initial={{ y: 50, opacity: 0, scale: 0.5 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <span className="sale_present">50%</span>
                <div className="img_product">
                  <a href="#">
                    <img
                      src={`./img/product/${i}.png`}
                      alt={`Product ${i + 1}`}
                    />
                  </a>
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, star) => (
                    <i key={star} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="product_name">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                </p>
                <div className="price">
                  <p>
                    <span>50$</span>
                  </p>
                  <p className="old_price">80$</p>
                </div>
                <div className="icons">
                  <span className="btn_add_cart">
                    <i className="fa-solid fa-cart-shopping"></i> add to cart
                  </span>
                  <span className="icon_product">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
