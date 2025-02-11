import React from "react";
import { useNavigate } from "react-router-dom";

const SalesPromotion = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 px-6 text-center transition-colors duration-300 border-y-2">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">🔥 Limited-Time Offer! 🔥</h2>
        <p className="text-lg mb-6">
          Get <strong>50% OFF</strong> on all food donations & purchases. Hurry,
          offer ends soon!
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center gap-4 text-2xl font-semibold mb-6 ">
          <div className="p-4 rounded-lg bg-purple-700 text-white dark:bg-gray-700 dark:text-white">
            02 <span className="text-sm block">Days</span>
          </div>
          <div className="p-4 rounded-lg bg-purple-700 text-white dark:bg-gray-700 dark:text-white">
            14 <span className="text-sm block">Hours</span>
          </div>
          <div className="p-4 rounded-lg bg-purple-700 text-white dark:bg-gray-700 dark:text-white">
            35 <span className="text-sm block">Minutes</span>
          </div>
        </div>

        {/* Grab Deal Button */}
        <button
          className="px-6 py-3 rounded-lg text-lg font-semibold transition bg-purple-800 hover:bg-green-700 text-white dark:bg-green-600 dark:hover:bg-green-700"
          onClick={() => navigate("/promotions")}
        >
          Grab Your Deal Now!
        </button>
      </div>
    </div>
  );
};

export default SalesPromotion;
