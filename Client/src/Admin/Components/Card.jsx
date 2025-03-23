import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaExchangeAlt, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Card = ({ imageUrl, name, cost, id, refreshData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Navigate to the update product page
  const handleUpdate = () => {
    navigate(`/admin/update-product/${id}`);
  };

  // Delete product function
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:3000/api/products/${id}`, {
          headers: {
            Authorization: `${import.meta.env.VITE_APP_TOKEN}`,
          },
        });
        toast.success("Product deleted successfully!");
        refreshData(); // Refresh the product list after deletion
      } catch (error) {
        toast.error("Failed to delete product.");
        console.error(error);
      }
    }
  };

  return (
    <div
      className="relative bg-white shadow-lg rounded-lg overflow-hidden w-56 h-74 border border-gray-200 hover:shadow-xl transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div
          className={`absolute bottom-0 left-0 w-full bg-white bg-opacity-50 p-2 flex justify-center gap-4 transition-all duration-300 ease-in-out transform ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button
            onClick={handleUpdate}
            className="p-2 bg-white hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-200"
          >
            <FaExchangeAlt className="text-sm" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 bg-white hover:bg-red-600 hover:text-white rounded-full transition-colors duration-200"
          >
            <FaTrash className="text-sm" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
        <p className="text-gray-600 font-medium mt-1 text-center">₹{cost}</p>
      </div>
    </div>
  );
};

export default Card;
