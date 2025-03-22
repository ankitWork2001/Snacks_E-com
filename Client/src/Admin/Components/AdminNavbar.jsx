import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaExchangeAlt,
  FaShoppingCart,
  FaUtensils,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const location = useLocation();
  const orders = useSelector((state) => state.orderReducer.orders);
  const total = orders.reduce((acc, order) => acc + order.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
      console.log(user);
    }
  }, [location]);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-100 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-0 w-full h-16 bg-white shadow-lg rounded-none"
          : "top-6 w-5/6 h-24 bg-white shadow-md rounded-lg"
      } flex items-center px-6`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 gap-3">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://jrssnacks.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-13.18.56_dd82a117.jpg"
                alt="Logo"
                className="h-10 mr-4 rounded transition-all duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            </Link>
            <div className="hidden h-10 w-10 bg-green-600 text-white rounded mr-4 items-center justify-center">
              <FaUtensils className="text-xl" />
            </div>
            <div>
              <h1
                className={`font-bold transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
              >
                JRS SNACKS
              </h1>
              <p
                className={`text-sm transition-opacity duration-300 ${
                  isScrolled ? "opacity-0" : "opacity-100"
                }`}
              >
                UNVEIL THE DELICACY
              </p>
            </div>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-green-600">
                HOME
              </Link>
            </li>
            
            
            
            
            <li>
              <Link to="/cart" className="text-gray-700 hover:text-green-600">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-700 hover:text-green-600">
                Orders
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer text-emerald-800 text-lg font-medium">
                Hi, Admin <FaChevronDown className="ml-1 text-xs" />
              </div>

          <div className="relative">
            <FaHeart className="text-gray-700 hover:text-green-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-3.5 w-3.5 flex items-center justify-center text-[8px]">
              0
            </span>
          </div>
          <div className="relative">
            <FaExchangeAlt className="text-gray-700 hover:text-green-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-3.5 w-3.5 flex items-center justify-center text-[8px]">
              0
            </span>
          </div>
          <div className="relative">
            <FaShoppingCart className="text-gray-700 hover:text-green-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-3.5 w-3.5 flex items-center justify-center text-[8px]">
              {total}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
