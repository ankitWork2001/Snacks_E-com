import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: "", description: "", stock: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${id}`, {
        headers: { Authorization: `${import.meta.env.VITE_APP_TOKEN}` },
      })
      .then((response) => setProduct(response.data.product))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, product, {
        headers: { Authorization: `${import.meta.env.VITE_APP_TOKEN}` },
      });
      toast.success("Product updated successfully!");
      navigate("/admin/products");
    } catch (error) {
      toast.error("Failed to update product.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700">Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

        <label className="block text-gray-700">Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

        <label className="block text-gray-700">Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

        <label className="block text-gray-700">Stock:</label>
        <input type="number" name="stock" value={product.stock} onChange={handleChange} className="w-full p-2 border rounded mb-4" />

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
