import React from "react";
import adminImage from "../../assets/image.png";
import { useState } from "react";
import axios from "axios";

const AdminSection = () => {
  let [formData, setFormData] = useState({
    name: "",
    images: "",
    description: "",
    price: "",
    stock: "",
    is_latest: false,
    category: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/products/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      data:JSON.stringify(formData)
    };
    async function makeRequest() {
      try {
        const response = await axios.request(config);
         console.log(response);
         if(response.data?.message=="Product added successfully")
         {
            alert("Product added successfully")
         }
         formData={};
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();

  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value === "true" : value,
    }));
  };

  return (
    <div className="mt-15 flex flex-col md:flex-row bg-gray-100 min-h-screen p-6">
      <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <figure>
          <img
            src={adminImage}
            alt="Admin"
            className="w-80 h-80 object-cover rounded-full shadow-md"
          />
          <figcaption className="text-center text-2xl font-semibold text-gray-800 mt-4">
            Welcome, Admin
          </figcaption>
        </figure>
      </div>

      <div className="md:w-2/3 bg-white shadow-lg rounded-lg p-6 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="w-2/3">
          <label className="block font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter product name"
          />

          <label className="block font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter image URL"
          />

          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter product description"
          />

          <label className="block font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter price"
          />

          <label className="block font-medium text-gray-700">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter stock quantity"
          />

          <fieldset className="mt-4">
            <legend className="font-medium text-gray-700">
              Latest Product
            </legend>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="is_latest"
                  value="true"
                  checked={formData.is_latest === true}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Latest</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="is_latest"
                  value="false"
                  checked={formData.is_latest === false}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Not Latest</span>
              </label>
            </div>
          </fieldset>

          <label className="block font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter product category"
          />

          <button
            type="submit"
            className="ml-55 mt-4 w-40 bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 cursor-pointer transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSection;
