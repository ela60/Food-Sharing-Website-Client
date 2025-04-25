import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/(1).webp";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="text-center sm:text-left">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
              <span className=" text-lg font-bold font-poppins tracking-wider hover:text-yellow-500 transition duration-300">
                Taste Swap
              </span>
            </Link>
            <p className="text-gray-400 mt-2">
              A platform for sharing food, saving money, and reducing food
              waste.
            </p>
          </div>

          {/* Useful Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              Useful Links
            </h3>
            <ul>
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul>
              <li className="flex items-center mb-3">
                <FaEnvelope className="text-yellow-500 mr-2" />
                <span className="text-gray-400">support@foodshare.com</span>
              </li>
              <li className="flex items-center mb-3">
                <span className="text-gray-400">+123 456 7890</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-10">
          <div className="hidden md:flex justify-center gap-4 mb-4">
            <h4 className="text-gray-300 mt-4 font-bold">
              Subscribe to our Newsletter
            </h4>
            <form className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-green-600 text-white px-6 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Food App Links */}
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaApple size={30} />
              <span className="ml-2">Download on the App Store</span>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGooglePlay size={30} />
              <span className="ml-2">Get it on Google Play</span>
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © 2024 FoodShare, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
