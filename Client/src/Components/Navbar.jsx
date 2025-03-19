import React, { useState, useEffect } from 'react';
import { FaHeart, FaExchangeAlt, FaShoppingCart, FaUtensils, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const orders = useSelector((state) => state.orderReducer.orders);
  const total=orders.reduce((acc,order)=>acc+order.quantity,0);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-100 transition-all duration-300 ease-in-out ${
        isScrolled ? 'top-0 w-full h-16 bg-white shadow-lg rounded-none' : 'top-6 w-5/6 h-24 bg-white shadow-md rounded-lg'
      } flex items-center px-6`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 gap-3">
          <div className="flex items-center">
            <img
              src="https://jrssnacks.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-13.18.56_dd82a117.jpg"
              alt="Logo"
              className="h-10 mr-4 rounded transition-all duration-300"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden h-10 w-10 bg-green-600 text-white rounded mr-4 items-center justify-center">
              <FaUtensils className="text-xl" />
            </div>
            <div>
              <h1 className={`font-bold transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                JRS SNACKS
              </h1>
              <p className={`text-sm transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                UNVEIL THE DELICACY
              </p>
            </div>
          </div>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-green-600">HOME</Link></li>
            <li><Link to="/aboutus" className="text-gray-700 hover:text-green-600">ABOUT US</Link></li>
            <li><Link to="/shop" className="text-gray-700 hover:text-green-600">SHOP</Link></li>
            <li><Link to="/contactus" className="text-gray-700 hover:text-green-600">CONTACT US</Link></li>
            <li className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-green-600"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                PAGES
                <FaChevronDown className="ml-1 text-xs" />
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 ${
                  isDropdownOpen ? 'block' : 'hidden'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  FAQ
                </Link>
                <Link to="/privacy-policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Terms & Conditions
                </Link>
                <Link to="/shipping" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600">
                  Shipping Information
                </Link>
              </div>
            </li>
            <li><Link to="/cart" className="text-gray-700 hover:text-green-600">CART</Link></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a href="login" className="text-gray-700 hover:text-green-600">LOGIN / REGISTER</a>
          <div className="relative">
            <FaHeart className="text-gray-700 hover:text-green-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-3.5 w-3.5 flex items-center justify-center text-[8px]">0</span>
          </div>
          <div className="relative">
            <FaExchangeAlt className="text-gray-700 hover:text-green-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-3.5 w-3.5 flex items-center justify-center text-[8px]">0</span>
          </div>
          <div className="relative">
            <FaShoppingCart className="text-gray-700 hover:text-green-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-3.5 w-3.5 flex items-center justify-center text-[8px]">{total}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
