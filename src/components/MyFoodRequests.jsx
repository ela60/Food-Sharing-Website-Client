import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (user && user.email) {
      axios
        .get(`https://food-sharing-server-rho.vercel.app/requests/${user?.email}`)
        .then((response) => {
          const data = response.data.filter(
            (request) => request.status === "requested"
          );
          // setRequests(filteredRequests);
          setRequests(response.data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching food requests:", error);
          setError("Failed to load food requests. Please try again later.");
          setLoading(false); 
        });
    } else {
      setLoading(false); 
    }
  }, [user]);

  if (!user) {
    return (
      <p className="text-center mt-8">Please log in to view your food requests.</p>
    );
  }

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 mt-24">
      {/* Left Side: Form */}
      <div className="w-1/3 flex justify-center">
        <img
          src="https://i.ibb.co/SKbwYqp/Variety-fruits-vegetables.webp"
          alt="Food Illustration"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Side: Table */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4 text-center">My Food Requests</h2>
        {loading ? (
          <p className="text-center text-gray-600"><span className="loading loading-spinner text-error"></span></p>
        ) : error ? (
          <p className="text-red-500 text-center mb-4">{error}</p>
        ) : requests.length === 0 ? (
          <p className="text-center text-gray-600"><span className="loading loading-spinner text-error"></span></p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-200 text-sm text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 border-b">Donor Name</th>
                  <th className="p-4 border-b">Pickup Location</th>
                  <th className="p-4 border-b">Expire Date</th>
                  <th className="p-4 border-b">Request Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-4 border-b">{request.donatorName}</td>
                    <td className="p-4 border-b">{request.pickupLocation}</td>
                    <td className="p-4 border-b">
                      {new Date(request.expiredDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 border-b">
                      {new Date(request.updatedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFoodRequests;
