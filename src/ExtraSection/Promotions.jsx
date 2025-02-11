import React from "react";

const Promotions = () => {
  const deals = [
    {
      id: 1,
      title: "Buy 1 Get 1 Free - Healthy Meals",
      description: "Order one healthy meal and get another one absolutely free!",
      discount: "50% OFF",
      image: "/images/2.jpg",
      expires: "Feb 20, 2025",
    },
    {
      id: 2,
      title: "20% OFF on First Order",
      description: "New users get an instant 20% discount on their first food order.",
      discount: "20% OFF",
      image: "/images/3.jpg",
      expires: "Feb 25, 2025",
    },
    {
      id: 3,
      title: "Save Big on Bulk Orders",
      description: "Order in bulk and get amazing discounts on shared food.",
      discount: "Up to 30% OFF",
      image: "/images/10.jpeg",
      expires: "Feb 28, 2025",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-24">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">🔥 Exclusive Deals for You! 🔥</h1>
      <p className="text-center text-gray-600 text-lg mb-8">
        Grab these **limited-time offers** before they expire!
      </p>

      {/* Deals Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="border rounded-lg shadow-md p-4 bg-white">
            <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">{deal.title}</h3>
            <p className="text-gray-600">{deal.description}</p>
            <p className="text-purple-800 font-bold">{deal.discount}</p>
            <p className="text-gray-500 text-sm">Expires on: {deal.expires}</p>

            {/* Claim Deal Button */}
            <button
              className="mt-4 w-full bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
              onClick={() => alert(`You claimed: ${deal.title}`)}
            >
              Claim Deal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
