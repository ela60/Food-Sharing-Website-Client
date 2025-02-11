import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(`https://food-sharing-server-rho.vercel.app/foods/${id}`);
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    };
    fetchFood();
  }, [id]);

  const handleRequest = async () => {
    const requestData = {
      
      ...food,
      userEmail: user.email,
      requestDate: new Date().toString(),
      additionalNotes: "",
      foodStatus: "requested",
    };

    try {
      const response = await fetch(`https://food-sharing-server-rho.vercel.app/foods-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        alert("Food requested successfully!");
        navigate("/myfoodrequests");
      } else {
        alert("Failed to request food. Please try again.");
      }
    } catch (error) {
      console.error("Error requesting food:", error);
    }
  };

  if (!food) {
    return (
      <div>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={food.foodImage}
            alt={food.foodName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{food.foodName}</h1>
            <p className="mb-2">
              <strong>Quantity:</strong> {food.foodQuantity}
            </p>
            <p className="mb-2">
              <strong>Pickup Location:</strong> {food.pickupLocation}
            </p>
            <p className="mb-2">
              <strong>Expire Date:</strong>{" "}
              {new Date(food.expiredDate).toLocaleString()}
            </p>
            <p className="mb-2">
              <strong>Donator Name:</strong> {food.donatorName}
            </p>
            <div className="mb-2">
              <p>
                <strong>Donator Image:</strong>
              </p>
              {food.donatorImage ? (
                <img
                  src={food.donatorImage}
                  alt={food.donatorName}
                  className="w-16 h-16 object-cover rounded-full"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <p className="mb-2">
              <strong>Donator Email:</strong> {food.donatorEmail}
            </p>
            <p>
              <strong>Status:</strong> {food.foodStatus}
            </p>
           
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Request Food
          </button>
        </div>
      </div>

      {/* Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Request Food</h2>
            <div>
              <p>
                <strong>Food Name:</strong> {food.foodName}
              </p>
              <p>
                <strong>Food ID:</strong> {food._id}
              </p>
              <p>
                <strong>Donator Email:</strong> {food.donatorEmail}
              </p>
              <p>
                <strong>Donator Name:</strong> {food.donatorName}
              </p>
              <p>
                <strong>User Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Request Date:</strong> {new Date().toLocaleString()}
              </p>
              <p>
                <strong>Pickup Location:</strong> {food.pickupLocation}
              </p>
              <p>
                <strong>Expire Date:</strong>{" "}
                {new Date(food.expiredDate).toLocaleString()}
              </p>
            </div>

            <textarea
              placeholder="Additional Notes (optional)"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full mt-4 p-2 border rounded-md"
            ></textarea>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleRequest}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
