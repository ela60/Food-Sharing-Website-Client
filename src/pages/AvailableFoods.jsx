import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sortedFoods, setSortedFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);
  const navigate = useNavigate();

  // Fetch available foods
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("https://food-sharing-server-rho.vercel.app/foods?status=available");
        const data = await response.json();
        setFoods(data);
        setSortedFoods(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  // Handle sorting by expiredDate
  const handleSort = () => {
    const sorted = [...sortedFoods].sort((a, b) => {
      const dateA = new Date(a.expiredDate);
      const dateB = new Date(b.expiredDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setSortedFoods(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter foods based on search query
  const filteredFoods = sortedFoods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle layout between 3 columns and 2 columns
  const toggleLayout = () => {
    setIsThreeColumnLayout(!isThreeColumnLayout);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">Available Foods</h1>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for food by name"
        className="mb-4 p-2 border rounded w-full text-sm md:text-base"
      />

      {/* Sort button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <button
          onClick={handleSort}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-sm md:text-base"
        >
          Sort by Expiry Date ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>

        {/* Layout toggle button */}
        <button
          onClick={toggleLayout}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-gray-600 text-sm md:text-base"
        >
          Switch to {isThreeColumnLayout ? "2 Column" : "3 Column"} Layout
        </button>
      </div>

      {filteredFoods.length === 0 ? (
        <p className="text-center"><span className="loading loading-spinner text-error"></span></p>
      ) : (
        <div
          className={`grid ${
            isThreeColumnLayout
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          } gap-4`}
        >
          {filteredFoods.map((food) => (
            <div
              key={food._id}
              className="border rounded p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold mb-2 text-center md:text-left">
                {food.foodName}
              </h2>
              <p className="text-sm md:text-base">Quantity: {food.foodQuantity}</p>
              <p className="text-sm md:text-base">Pickup Location: {food.pickupLocation}</p>
              <p className="text-sm md:text-base">
                Expires: {new Date(food.expiredDate).toLocaleString()}
              </p>
              <p className="text-sm md:text-base">Status: {food.foodStatus}</p>
              <button
                onClick={() => navigate(`/foods/${food._id}`)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mt-4 block w-full text-sm md:text-base"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
