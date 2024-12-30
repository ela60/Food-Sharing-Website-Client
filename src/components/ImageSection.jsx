import React, { useEffect } from "react";

const ImageSection = () => {
  const images = [
    {
      src: "https://i.ibb.co/k2VBGgF/food-sharing-banner.jpg", // Image 1
      title: "Share Your Meals",
      description: "Join a community that shares food for a better future!",
    },
    {
      src: "https://i.ibb.co/DfzFfzQ/food-sharing-2.jpg", // Image 2
      title: "Reduce Food Waste",
      description: "Help reduce food waste by donating food to those in need.",
    },
    {
      src: "https://i.ibb.co/4PYz0cv/food-sharing-3.jpg", // Image 3
      title: "Feed the Hungry",
      description: "Every meal shared makes a difference in the world.",
    },
  ];

  // Fade-in Animation on Scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
    elements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className="container mx-auto my-16 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Get Involved & Make a Difference
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer fade-in"
          >
            <div
              className="parallax bg-cover bg-center h-64 sm:h-80 md:h-[450px] transition-all duration-500"
              style={{ backgroundImage: `url(${image.src})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center text-white px-4 py-6">
              <h3 className="text-xl font-semibold mb-2 text-shadow">{image.title}</h3>
              <p className="text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
