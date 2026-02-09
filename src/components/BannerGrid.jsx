import { motion } from "framer-motion";

function BannerGrid() {
  return (
    
   <div className="banners_4" data-aos="fade-left">
         
  <div className="container">
    {["1","2","3","4"].map((num) => (
      <motion.div
        className="box"
        key={num}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: num * 0.2 }}
      >
            
        <a href="#" className="link_btn"></a>
        <img src={`img/banner3_${num}.jpg`} alt="" />
        <div className="text">
          <h5>Break Disc</h5>
          <h5>deals on this</h5>
          <div className="sale">
            <p>Up <br /> To</p>
            <span>70%</span>
          </div>
          <h6>Shop Now</h6>
        </div>
      </motion.div>
    ))}
    
  </div>
</div>

  );
}

export default BannerGrid;
