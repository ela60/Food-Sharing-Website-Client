import React from "react";

const About = () => {
  return (
    <div className="min-h-screen  dark:bg-gray-900 dark:text-white flex flex-col items-center px-4 py-12 pt-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-purple-800 ">
          About Us
        </h1>
        <p className="mt-4  ">
          We believe in sharing food and reducing waste. Our mission is to
          connect people who have extra food with those who need it.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-12 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-2 text-gray-600 ">
            To create a world where no food goes to waste and everyone has
            access to healthy meals. We empower communities by sharing surplus
            food.
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            A world where food waste is minimized, and every person has access
            to fresh and nutritious food through a caring community.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12 max-w-4xl text-center">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-2">Passionate people behind FoodShare</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example Team Members */}
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              img: "https://i.ibb.co.com/SXkMDNs9/Whats-App-Image-2025-01-08-at-11-39-49-AM.jpg",
            },
            {
              name: "Sarah Lee",
              role: "Head of Community",
              img: "https://i.ibb.co.com/fYCGC9bw/Pink-Gaming-You-Tube-Channel-Art-2.png",
            },
            {
              name: "Michael Smith",
              role: "Operations Manager",
              img: "https://i.ibb.co.com/SXkMDNs9/Whats-App-Image-2025-01-08-at-11-39-49-AM.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg p-4 bg-white dark:bg-gray-800"
            >
              <img
                src={member.img}
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
