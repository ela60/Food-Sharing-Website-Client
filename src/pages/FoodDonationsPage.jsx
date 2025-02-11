import React from 'react';
import FoodDonationsMap from '../components/FoodDonationsMap';

const FoodDonationsPage = () => {
  return (
    <div className="bg-gray-300 min-h-screen py-24 px-4 ">
      <h1 className="text-4xl text-center font-extrabold text-purple-800 mb-8">Food Donations in Your Area</h1>
      <FoodDonationsMap />
    </div>
  );
};

export default FoodDonationsPage;
