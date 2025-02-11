import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <motion.h1
        className="text-9xl font-extrabold text-purple-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>
      
      <motion.p
        className="text-2xl text-gray-800 mt-4 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Oops! Page Not Found
      </motion.p>

      <p className="text-gray-600 mt-2 text-center px-4 md:px-0">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <motion.button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-600 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Go to Home
      </motion.button>
    </div>
  );
};

export default ErrorPage;
