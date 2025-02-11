import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [foodData, setFoodData] = useState({
    foodName: "",
    foodImage: "",
    foodQuantity: "",
    pickupLocation: "",
    expiredDate: "",
    additionalNotes: "",
    donatorName: user?.displayName || "",
    donatorEmail: user?.email || "",
    donatorImage: user?.photoURL || "",
    foodStatus: "available", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const addFood = async (newFood) => {
    const response = await axios.post("https://food-sharing-server-rho.vercel.app/foods", newFood);
    return response.data;
  };

  // Mutation to add food
  const mutation = useMutation({
    mutationFn: addFood,
    onSuccess: () => {
      alert("Food added successfully!");
      navigate("/available-foods");
    },
    onError: (error) => {
      console.error(error);
      alert("Failed to add food.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(foodData);  
  };

  return (
    <div className="max-w-2xl mx-auto p-4 pt-24">
      <h1 className="text-2xl font-semibold mb-4">Add Food</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="foodName"
          value={foodData.foodName}
          onChange={handleChange}
          placeholder="Food Name"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="url"
          name="foodImage"
          value={foodData.foodImage}
          onChange={handleChange}
          placeholder="Food Image URL"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="number"
          name="foodQuantity"
          value={foodData.foodQuantity}
          onChange={handleChange}
          placeholder="Food Quantity"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="pickupLocation"
          value={foodData.pickupLocation}
          onChange={handleChange}
          placeholder="Pickup Location"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="datetime-local"
          name="expiredDate"
          value={foodData.expiredDate}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <textarea
          name="additionalNotes"
          value={foodData.additionalNotes}
          onChange={handleChange}
          placeholder="Additional Notes"
          className="w-full mb-2 p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white py-2 px-4 rounded hover:bg-green-600"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Adding..." : "Add Food"}
        </button>
      </form>
      {mutation.isError && (
        <p className="text-red-500 mt-2">Failed to add food. Please try again.</p>
      )}
      {mutation.isSuccess && (
        <p className="text-green-500 mt-2">Food added successfully!</p>
      )}
    </div>
  );
};

export default AddFood;
