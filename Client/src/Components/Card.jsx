import React from "react";

const Card = ({ imageUrl, name, cost }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 border border-gray-200 hover:shadow-xl transition duration-300">
      <img src={imageUrl} alt={name} className="w-full h-65 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
        <p className="text-gray-600 font-medium mt-1 text-center">₹{cost}</p>
      </div>
    </div>
  );
};

export default Card;
