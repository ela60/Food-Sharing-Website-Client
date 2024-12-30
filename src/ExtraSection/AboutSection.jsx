import React from 'react';

const AboutSection = () => {
  const features = [
    {
      title: 'Connect with Food Lovers',
      img: 'https://i.ibb.co.com/RC2P0vq/4.jpg',
      description: 'Join a community of food enthusiasts to share, discover, and enjoy meals together.',
    },
    {
      title: 'Easy Food Sharing',
      img: 'https://i.ibb.co.com/N6dzmhy/Sausage-roll-wreath-87c6faa.jpg',
      description: 'Post meals or food items you want to share with just a few clicks.',
    },
    {
      title: 'Track Contributions',
      img: 'https://i.ibb.co.com/6vbKHcp/shutterstock-1325761982.jpg',
      description: 'Keep track of the food you’ve shared and the meals you’ve enjoyed.',
    },
    {
      title: 'Promote Sustainability',
      img: 'https://i.ibb.co.com/P49y56H/Shareable-2024-GFPR-1920x1080-ch1.jpg',
      description: 'Reduce food waste and contribute to sustainable living by sharing excess food.',
    },
    {
      title: 'User-Friendly Interface',
      img: 'https://i.ibb.co.com/3m7MrFK/5.jpg',
      description: 'Enjoy an intuitive and seamless browsing experience on our platform.',
    },
    {
      title: 'Verified Profiles',
      img: 'https://i.ibb.co.com/CtXdppz/processed-food.webp',
      description: 'Interact with verified users to ensure safety and trust while sharing food.',
    },
  ];

  return (
    <section className="py-10 bg-purple-600">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">Why Choose Our Food Sharing Website?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-700 
              hover:scale-105 hover:shadow-2xl w-68`}  // Set fixed width to medium size (320px)
             
            >
              <div className="relative group">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
