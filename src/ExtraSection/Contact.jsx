import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 pt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-700">
          <p>Email: support@foodshare.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Food Street, City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
