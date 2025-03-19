import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaExchangeAlt, FaHeart } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { addOrder } from "../Reducer/Order/orderSlice";
const Card = ({ imageUrl, name, cost, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const dispatch=useDispatch();

  const handleAddToCart=()=>{
    dispatch(addOrder({
      id:id,
      name:name,
      imageUrl:imageUrl,
      cost:cost,
      quantity:1
    }))
    toast.success(name +' added to cart');
  }
  return (
    <>
    
    <div 
      className="relative bg-white shadow-lg rounded-lg overflow-hidden w-56 h-74 border border-gray-200 hover:shadow-xl transition duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        {/* Tool component */}
        <div 
          className={`
            absolute bottom-0 left-0 w-full 
            bg-white bg-opacity-50 p-2 
            flex justify-center gap-4 
            transition-all duration-300 ease-in-out
            transform ${isHovered ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          <button onClick={handleAddToCart} className="p-2 bg-white hover:bg-green-600 hover:text-white rounded-full transition-colors duration-200">
            <FaShoppingCart className="text-sm" />
          </button>
          <button className="p-2 bg-white hover:bg-green-600 hover:text-white rounded-full transition-colors duration-200">
            <FaSearch className="text-sm" />
          </button>
          <button className="p-2 bg-white hover:bg-green-600 hover:text-white rounded-full transition-colors duration-200">
            <FaExchangeAlt className="text-sm" />
          </button>
          <button className="p-2 bg-white hover:bg-green-600 hover:text-white rounded-full transition-colors duration-200">
            <FaHeart className="text-sm" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
        <p className="text-gray-600 font-medium mt-1 text-center">₹{cost}</p>
      </div>
    </div>
    </>
  );
};

export default Card;