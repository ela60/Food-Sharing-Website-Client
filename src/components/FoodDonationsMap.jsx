import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const foodDonations = [
  {
    id: 1,
    foodName: 'Pizza',
    donatorName: 'Ambia ela',
    donatorEmail: 'ela@example.com',
    location: [40.7128, -74.0060], // New York City
    pickupLocation: '123 Main St, New York, NY',
    expireDate: '2024-12-25',
  },
  {
    id: 2,
    foodName: 'Apple Pie',
    donatorName: 'Jane Smith',
    donatorEmail: 'janesmith@example.com',
    location: [34.0522, -118.2437], // Los Angeles
    pickupLocation: '456 Oak Ave, Los Angeles, CA',
    expireDate: '2024-12-20',
  },
];

const FoodDonationsMap = () => {
  const [donations, setDonations] = useState(foodDonations);
  const [search, setSearch] = useState(''); 

  useEffect(() => {
    
  }, []);

  
  const filteredDonations = donations.filter(
    (donation) =>
      donation.foodName.toLowerCase().includes(search.toLowerCase()) ||
      donation.pickupLocation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <h2 className="text-center text-2xl font-bold text-purple-800 mb-6">Food Donations Map</h2>
      <p className="text-purple-800 text-center mb-4">
      Explore the locations of available food donations on the map. Click on
        a marker to view details about the donation, including the donor's name,
        email, pickup location, and expiration date.
      </p>
      <input
        type="text"
        placeholder="Search by food name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />
      <MapContainer
        center={[40.7128, -74.0060]} 
        zoom={12}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '500px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredDonations.map((donation) => (
          <Marker
            key={donation.id}
            position={donation.location}
            icon={new L.Icon({
              iconUrl: 'https://cdn-icons-png.flaticon.com/512/170/170644.png', 
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            })}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-semibold text-gray-900">{donation.foodName}</h3>
                <p><strong>Donator:</strong> {donation.donatorName}</p>
                <p><strong>Email:</strong> {donation.donatorEmail}</p>
                <p><strong>Pickup Location:</strong> {donation.pickupLocation}</p>
                <p><strong>Expire Date:</strong> {donation.expireDate}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FoodDonationsMap;
