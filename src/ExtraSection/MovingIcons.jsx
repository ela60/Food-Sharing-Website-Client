import React from 'react';
import { motion } from 'framer-motion';

const MovingIcons = () => {
  const images = [
    'https://i.ibb.co.com/HrXwFZL/xhllywpkl1ab1.jpg',
    'https://i.ibb.co.com/SVSHrsp/Untitled-design-2024-12-02-T161120-326.webp',
    'https://i.ibb.co.com/dj38TmC/sweets-snacks.jpg',
    'https://i.ibb.co.com/tH0kN6B/vegetarian-diet-qualit.jpg',
    'https://i.ibb.co.com/Q96CbMT/Street-food-non-veg.jpg',
    'https://i.ibb.co.com/bWW3wks/Variety-fruits-vegetables.webp',
  ];

  return (
    <section className="py-4 ">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="relative w-full">
          <motion.div
            className="flex space-x-6"
            initial={{ x: '100%' }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 10, 
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {images.concat(images).map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`icon-${index}`}
                className="w-24 h-24 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MovingIcons;
