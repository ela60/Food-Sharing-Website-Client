import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/(1).webp";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [notifications] = useState([
    "New recipe added!",
    "User commented on your post!",
    "Weekly update available!",
  ]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed bg-gradient-to-r from-indigo-900 via-purple-800 to-black text-white py-4 px-6 shadow-md bg-opacity-80 top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="relative flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full -mt-1" />
          <span className="hidden md:block absolute  top-8  text-[15px] text-nowrap  font-bold bg-gradient-to-r from-red-500 to-yellow-200 bg-clip-text text-transparent">
            Taste Swap
          </span>
        </Link>

        <div className="hidden lg:flex items-center bg-gray-700 px-2 py-2 rounded-lg w-60">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-40 lg:w-60"
          />
          <button className="text-yellow-500 hover:text-yellow-400 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16l-4-4m0 0l4-4m-4 4h16"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center text-[15px] text-nowrap text-yellow-400 space-x-2 font-bold">
          <Link
            to="/"
            className="hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600  px-1 py-2 rounded transition duration-300"
          >
            <i className="fas fa-home "></i> Home
          </Link>
          <Link
            to="/available-foods"
            className="hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600  px-1 py-2 rounded transition duration-300"
          >
            <i className="fas fa-utensils "></i> Available Foods
          </Link>
          {user ? (
            <>
              <Link
                to="/add-food"
                className="hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600  px-1 py-2 rounded transition duration-300"
              >
                <i className="fas fa-plus-circle "></i> Add Food
              </Link>
              <Link
                to="/myfoods"
                className="hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600  px-1 py-2 rounded transition duration-300"
              >
                <i className="fas fa-cogs "></i> Manage My Foods
              </Link>
              <Link
                to="/myfoodrequests"
                className="hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600  px-1 py-2 rounded transition duration-300"
              >
                <i className="fas fa-list "></i> My Food Request
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600  px-1 py-2 rounded transition duration-300"
              >
                <i className="fas fa-sign-in-alt mr-2"></i> Login
              </Link>
              <Link
                to="/auth/register"
                className="hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600  px-1 py-2 rounded transition duration-300"
              >
                <i className="fas fa-user-plus mr-2"></i> Register
              </Link>
            </>
          )}
        </div>

        {/* Action Items */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <div className="relative group mt-2">
            <button className="text-yellow-500 hover:text-yellow-400">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M19 13h-1v-2a7 7 0 10-6 6h-1v-2h4"
            />
          </svg>
            </button>
            <div className="absolute right-0 top-10 bg-gray-800 text-white text-sm w-48 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              {notifications.length ? (
                notifications.map((note, index) => (
                  <div key={index} className="p-2 border-b border-gray-700">
                    {note}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-400">No notifications</div>
              )}
            </div>
          </div>

          {/* Theme Toggle */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="hidden"
            />
            <div className="bg-gray-600 w-12 h-6 rounded-full flex items-center px-1">
              <div
                className={`h-4 w-4 rounded-full transform transition ${
                  theme === "dark" ? "translate-x-6 bg-yellow-500" : "bg-white"
                }`}
              ></div>
            </div>
          </label>

          {/* Profile and Logout */}
          {user ? (
            <>
              {user.photoURL && (
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt="User"
                    className="w-10 h-10 rounded-full shadow-lg cursor-pointer"
                  />
                  {user.displayName && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {user.displayName}
                    </div>
                  )}
                </div>
              )}
              <button
                onClick={logOut}
                className="bg-yellow-500 text-[12px] text-nowrap px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Log-Out
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-yellow-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-3 p-4 bg-gray-800 text-white shadow-lg">
          <Link
            to="/"
            className="hover:text-yellow-500 transition duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/available-foods"
            className="hover:text-yellow-500 transition duration-300"
            onClick={toggleMenu}
          >
            Available Foods
          </Link>
          {user ? (
            <>
              <Link
                to="/myfoods"
                className="hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                Manage My Foods
              </Link>
              <Link
                to="/myfoodrequests"
                className="hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                My Food Request
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="hover:text-yellow-500 transition duration-300"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
