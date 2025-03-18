import React from 'react';
import { X } from 'lucide-react';

const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={() => window.location.href = '/'}
        >
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        <p className="text-gray-600">Your cart is currently empty.</p>
      </div>
    </div>
  );
}

export default Cart;