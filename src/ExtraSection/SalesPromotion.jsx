import React from "react";
import { useNavigate } from "react-router-dom";

const SalesPromotion = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">🔥 Limited-Time Offer! 🔥</h2>
        <p className="text-lg mb-6">
          Get **50% OFF** on all food donations & purchases. Hurry, offer ends
          soon!
        </p>
        
        {/* Optional: Countdown Timer */}
        <div className="flex justify-center items-center gap-4 text-2xl font-semibold mb-6">
          <div className="p-4 bg-white text-black rounded-lg">02 <span className="text-sm block">Days</span></div>
          <div className="p-4 bg-white text-black rounded-lg">14 <span className="text-sm block">Hours</span></div>
          <div className="p-4 bg-white text-black rounded-lg">35 <span className="text-sm block">Minutes</span></div>
        </div>

        <button
          className="bg-purple-800 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          onClick={() => navigate("/promotions")}
        >
          Grab Your Deal Now!
        </button>
      </div>
    </div>
  );
};

export default SalesPromotion;
