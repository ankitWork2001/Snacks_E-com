import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    address: {
      address_line: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    },
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let res;
      if (isRegistering) {
        res = await axios.post("http://localhost:3000/api/auth/register", formData);
        alert(res.data.message);
      } else {
        res = await axios.post("http://localhost:3000/api/auth/login", {
          email: formData.email,
          password: formData.password,
        });
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-4 "
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#6A1B9A]">
          {isRegistering ? "Register" : "Login"}
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full p-2 border rounded" />
              <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required className="w-full p-2 border rounded" />
              <input type="text" name="address.address_line" value={formData.address.address_line} onChange={handleChange} placeholder="Address Line" required className="w-full p-2 border rounded" />
              <input type="text" name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" required className="w-full p-2 border rounded" />
              <input type="text" name="address.state" value={formData.address.state} onChange={handleChange} placeholder="State" required className="w-full p-2 border rounded" />
              <input type="text" name="address.postal_code" value={formData.address.postal_code} onChange={handleChange} placeholder="Postal Code" required className="w-full p-2 border rounded" />
              <input type="text" name="address.country" value={formData.address.country} onChange={handleChange} placeholder="Country" required className="w-full p-2 border rounded" />
            </>
          )}
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition" disabled={loading}>
            {loading ? "Processing..." : isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">{isRegistering ? "Already have an account?" : "Don't have an account?"}</p>
          <button onClick={() => setIsRegistering(!isRegistering)} className="mt-2 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">
            {isRegistering ? "Login" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
