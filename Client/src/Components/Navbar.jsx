import React from 'react'
import { FaHeart, FaExchangeAlt, FaShoppingCart, FaUtensils } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            <li><a href="#" className="text-gray-700 hover:text-green-600">PAGES</a></li>
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