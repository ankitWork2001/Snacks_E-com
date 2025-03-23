import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaExchangeAlt,
  FaShoppingCart,
  FaUtensils,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AdminNavbar = () => {
  const [username, setUsername] = useState(null);
  const location = useLocation();
  const navigate=useNavigate();
  



  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
      console.log(user);
    }
  }, [location]);

  return (
    <nav
      className="flex justify-center items-center w-full h-16 bg-white shadow-lg rounded-none"  
    >
      <div className="flex justify-between items-center w-full mx-auto px-12">
        <div className="flex items-center space-x-4 gap-3">
          <div className="flex items-center">
            <Link to="/admin">
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
                className="font-bold transition-all duration-300 text-lg" 
              >
                JRS SNACKS
              </h1>
              <p
                className="text-sm transition-opacity duration-300" 
              >
                UNVEIL THE DELICACY
              </p>
            </div>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/admin" className="text-gray-700 hover:text-green-600">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/admin/products" className="text-gray-700 hover:text-green-600">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="text-gray-700 hover:text-green-600">
                All Orders
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <div className="flex items-center cursor-pointer text-emerald-800 text-lg font-medium">
                <div className="relative flex items-center">  
                  Hi, {username} (Admin) <FaChevronDown className="ml-1 text-xs" />
                </div>
                <div className="group-hover:flex hidden flex-col items-center absolute top-6 right-0 bg-white shadow-lg rounded w-40 py-2">
                <button 
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                  className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 hover:text-red-700 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414L11.414 3H3zm7 2a1 1 0 010 2H7v7h8V7.414L13.586 7H10z" clipRule="evenodd" />
                    <path d="M3 4a1 1 0 011-1h6.414L16 8.586V16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                  </svg>
                  Logout
                </button>
                  
                </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
