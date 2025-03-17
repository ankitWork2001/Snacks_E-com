import React from 'react'
import { FaHeart, FaExchangeAlt, FaShoppingCart, FaUtensils } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md absolute top-5 left-1/2 transform -translate-x-1/2 z-10 w-5/6 max-w-7xl h-24 rounded-lg flex items-center">
      <div className="px-4 py-2 flex justify-between items-center w-full">
        <div className='flex items-center space-x-4 gap-3'>
        <div className="flex items-center">
          {/* Image logo */}
          <img 
            src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" 
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
          <li><a href="#" className="text-gray-700 hover:text-green-600">HOME</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">ABOUT US</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">SHOP</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">CONTACT US</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">PAGES</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-600">CART</a></li>
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