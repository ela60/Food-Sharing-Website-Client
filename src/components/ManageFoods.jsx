import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageFoods = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

        const response = await axios.get("https://food-sharing-server-rho.vercel.app/myfoods", {
         
          withCredentials: true,
        });
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };
    fetchFoods();
  }, []);

  const handleUpdate = (foodId) => {
    navigate(`/updateFood/${foodId}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this food item?")) {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

        await axios.delete(`https://food-sharing-server-rho.vercel.app/myfoods/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setFoods((prevFoods) => prevFoods.filter((food) => food._id !== id));
      } catch (error) {
        console.error("Error deleting food:", error);
      }
    }
  };

  return (
    <div className="pt-24">
      <h1 className="text-2xl font-bold mb-4">Manage Your Foods</h1>
      {foods.length === 0 ? (
        <p className="text-center"><span className="loading loading-spinner text-error"></span></p>
      ) : (
        <table className="min-w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Food Name</th>
                <th className="border p-2">Food Image</th>
                <th className="border p-2">Quantity</th>
              <th className="border p-2">Actions</th>
             
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id}>
                <td className="border p-2 text-center">{food.foodName}</td>
                <td className="border p-2 ">
                  <img  src={food.foodImage} alt={food.foodName} width="100" />
                </td>
                <td className="border p-2 text-center">{food.
foodQuantity}</td>
                <td className="border p-2 text-center">
                  <button
                    className="bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleUpdate(food._id)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(food._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageFoods;
