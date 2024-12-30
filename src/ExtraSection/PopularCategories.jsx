import React from "react";
import { motion } from "framer-motion";

const PopularCategories = () => {
  const categories = [
    { name: "Vegetarian", image: "https://i.ibb.co.com/tH0kN6B/vegetarian-diet-qualit.jpg" },
    { name: "Non-Vegetarian", image: "https://i.ibb.co.com/Q96CbMT/Street-food-non-veg.jpg" },
    { name: "Desserts", image: "https://i.ibb.co.com/SVSHrsp/Untitled-design-2024-12-02-T161120-326.webp" },
    { name: "Snacks", image: "https://i.ibb.co.com/dj38TmC/sweets-snacks.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold  text-center mb-8">Popular Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden group shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-56 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 flex items-end justify-center p-4 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold">{category.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
