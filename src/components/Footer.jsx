import React, { useEffect, useRef } from "react";

function Footer() {
  const promoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
        }
      },
      {
        root: null, 
        threshold: 0.1,
      }
    );

    if (promoRef.current) {
      observer.observe(promoRef.current);
    }

    return () => {
      if (promoRef.current) observer.unobserve(promoRef.current);
    };
  }, []);

  return (
    <>
      <div ref={promoRef} className="promo-section" data-fade="up">
        <img src="/img/1.png" alt="Promo Left" className="promo-img left" />
        <img src="/img/2.png" alt="Promo Right" className="promo-img right" />
      </div>

      <footer className="footer">
        <p>&copy; 2026 MyShop. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
