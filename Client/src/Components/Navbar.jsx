import React, { useState } from 'react'
import { FaHeart, FaExchangeAlt, FaShoppingCart, FaUtensils, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md absolute top-5 left-1/2 transform -translate-x-1/2 z-10 w-5/6 max-w-7xl h-24 rounded-lg flex items-center">
      <div className="px-4 py-2 flex justify-between items-center w-full">
        <div className='flex items-center space-x-4 gap-3'>
        <div className="flex items-center">
          {/* Image logo */}
          <img 
            src="https://jrssnacks.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-13.18.56_dd82a117.jpg" 
            alt="Logo" 
            className="h-10 mr-4 rounded"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }} 
          />
          {/* Fallback icon if image fails to load */}
          <div className="hidden h-10 w-10 bg-green-600 text-white rounded mr-4 items-center justify-center">
            <FaUtensils className="text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold">JRS SNACKS</h1>
            <p className="text-sm">UNVEIL THE DELICACY</p>
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
          <a href="#" className="text-gray-700 hover:text-green-600">LOGIN / REGISTER</a>
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
            <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full h-3.5 w-3.5 flex items-center justify-center text-[8px]">0</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar