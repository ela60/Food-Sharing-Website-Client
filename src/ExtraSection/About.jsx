import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-12 pt-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-purple-800">About Us</h1>
        <p className="text-gray-600 mt-4">
          We believe in sharing food and reducing waste. Our mission is to
          connect people who have extra food with those who need it.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To create a world where no food goes to waste and everyone has
            access to healthy meals. We empower communities by sharing surplus
            food.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            A world where food waste is minimized, and every person has access
            to fresh and nutritious food through a caring community.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-2">Passionate people behind FoodShare</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Team Members */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 font-semibold text-lg text-gray-800">
              Alex Johnson
            </h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 font-semibold text-lg text-gray-800">
              Sarah Lee
            </h3>
            <p className="text-gray-600">Head of Community</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 font-semibold text-lg text-gray-800">
              Michael Smith
            </h3>
            <p className="text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
