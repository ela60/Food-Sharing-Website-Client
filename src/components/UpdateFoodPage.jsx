import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateFoodPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [foodData, setFoodData] = useState({
    foodName: "",
    foodImage: "",
    foodQuantity: "",
    pickupLocation: "",
    expiredDateTime: "",
    additionalNotes: "",
    donatorName: "", 
    donatorEmail: "", 
    donatorImage: "", 
    foodStatus: "available",
  });
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        console.log("Fetching food details for ID:", id);
        const response = await axios.get(`https://food-sharing-server-rho.vercel.app/myfoods/${id}`);
        console.log("Food details fetched:", response.data);
        setFoodData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error.response || error.message);
        setError("Failed to fetch food details. Please try again later.");
        setLoading(false);
      }
    };

    fetchFoodDetails();
  }, [id]);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prevData) => ({ ...prevData, [name]: value }));
  };

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Updating food data:", foodData);
      const response = await axios.put(`https://food-sharing-server-rho.vercel.app/myfoods/${id}`, foodData);
      if (response.status === 200) {
        alert("Food updated successfully!");
        navigate("/myfoods"); 
      }
    } catch (error) {
      console.error("Error updating food:", error.response || error.message);
      setError("Failed to update food. Please try again.");
    }
  };

  if (loading) {
    return <div><span className="loading loading-spinner text-error"></span></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Update Food</h1>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            value={foodData.foodName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Food Image URL</label>
          <input
            type="url"
            name="foodImage"
            value={foodData.foodImage}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Food Quantity</label>
          <input
            type="number"
            name="foodQuantity"
            value={foodData.
              foodQuantity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            value={foodData.pickupLocation}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {/* <div className="mb-4">
          <label className="block font-medium mb-1">Expired Date/Time</label>
          <input
            type="datetime-local"
            name="expiredDateTime"
            value={foodData.expiredDateTime}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div> */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Additional Notes</label>
          <textarea
            name="additionalNotes"
            value={foodData.additionalNotes}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 text-black bg-red-600 rounded mr-2"
            onClick={() => navigate("/myfoods")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Update Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFoodPage;
