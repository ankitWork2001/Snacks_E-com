import React, { useState } from 'react';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        {isRegistering ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
              >
                Register
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-600">Already have an account?</p>
              <button 
                onClick={() => setIsRegistering(false)}
                className="mt-2 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
              >
                Login
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-600">Don't have an account?</p>
              <button 
                onClick={() => setIsRegistering(true)}
                className="mt-2 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
