import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src="https://jrssnacks.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-13.18.56_dd82a117.jpg" alt="Logo" className="h-10 mb-4" />
            <p className="mb-4">
              <strong>JRS Snacks</strong> as a brand steeped in tradition, offering high-quality, flavorful snacks that cater to a wide variety of tastes.
            </p>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> 4th main road, nehru nagar, Bangalore 560020
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> Phone: +91-8310715585
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> Mail: Support@jrssnacks.com
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-white hover:text-gray-400"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-gray-400"><FaGoogle /></a>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-bold mb-4">RECENT POSTS</h3>
            {/* Add recent posts here */}
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/3">
            <h3 className="font-bold mb-4">USEFUL LINKS</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Return and Refund policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms and Service</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Shipping Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">My account</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>Copyright 2024 @ www.jrssnacks.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer