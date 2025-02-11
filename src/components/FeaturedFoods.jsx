import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("https://food-sharing-server-rho.vercel.app/foods");
        const sortedFoods = response.data
          .sort((a, b) => b.foodQuantity - a.foodQuantity) 
          .slice(0, 6); 
        setFeaturedFoods(sortedFoods);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Featured Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredFoods.map((food) => (
          <div key={food._id} className="border rounded-lg shadow-md flex flex-col items-center p-4">
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{food.foodName}</h3>
            <p className="text-gray-500">Quantity: {food.foodQuantity}</p>
            <p><strong>Pickup Location:</strong> {food.pickupLocation}</p>
            <p><strong>Expire Date:</strong> {new Date(food.expiredDate).toLocaleString()}</p>

             {/* "See More" Button */}
             <button
              className="btn btn-outline mt-2 px-3 hover:bg-purple-700"
              onClick={() => navigate(`/foods/${food._id}`)}
            >
              See More
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="px-20 py-2  bg-purple-800 text-white rounded hover:bg-green-600"
          onClick={() => navigate("/available-foods")}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedFoods;
