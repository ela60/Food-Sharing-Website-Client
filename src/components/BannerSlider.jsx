import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image paths from the public/images folder
  const images = [
    "/images/(1).webp",  // Path to banner1.webp
    "/images/2.jpg",  // Path to banner2.jpg
    "/images/3.jpg",  // Path to banner3.jpg
    "/images/6.webp",  // Path to banner4.jfif
    "/images/5(1).jpg",  // Path to banner5.jfif
  ];

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <motion.div
      className="relative w-full h-64 sm:h-96"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden pt-20">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
        >
          {/* Slider Images */}
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BannerSlider;
