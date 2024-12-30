import React from 'react';
import { motion } from 'framer-motion';

const PopularTopics = () => {
  const topics = [
    'Burgers(2)',
    'Pizza(7)',
    'Pasta',
    'Sushi',
    'Salad(5)',
    'Seafood',
    'Tacos(8)',
    'Steak(4)',
    'Sandwich',
  ];

  return (
    <section className="py-4">
      <div className="container mx-auto px-6 overflow-hidden">
        <h2 className="text-xl font-bold mb-4 text-green-600">Popular Topics</h2>
        <div className="relative w-full">
          <motion.div
            className="flex space-x-4"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 10, 
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{ animationPlayState: 'paused' }} // Pause animation on hover
          >
            {topics.concat(topics).map((topic, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 text-white bg-gradient-to-r from-indigo-900 via-purple-800 to-black rounded-full text-[13px] font-medium hover:bg-purple-900 cursor-pointer transition duration-300 shadow-md"
                whileHover={{ scale: 1.1 }} 
              >
                {topic}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
