import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../Components/Card";

const Shop = () => {
  const [price, setPrice] = useState([100, 600]);
  const [snacks, setSnacks] = useState();
  const [originalSnacks,setOriginalSnacks]=useState()

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/products/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${import.meta.env.VITE_APP_TOKEN}`,
      },
    };
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        setSnacks(response?.data?.products);
        setOriginalSnacks(response?.data?.products);
        // console.log(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }, []);
  const handlePriceChange = (event) => {
    const value = event.target.value.split(",").map(Number);
    setPrice(value);
  };

  async function handleFilter()
  {
    try{
      let mini=price;
      let filtered_snacks=originalSnacks.filter((item)=>{
      if(item.price>=mini )
      {
        return item;
      }
    })
    setSnacks(filtered_snacks);
    }
    catch(error)
    {
      console.log(error)
    }
  };

  return (
    <div className="wrapper relative min-h-screen">
      <Navbar />
      <div className="bg-[url('https://jrssnacks.com/wp-content/uploads/2021/10/coffee-page-title.jpg')] bg-cover bg-center py-24 w-full h-7/13 flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg mt-28">
          Shop
        </h1>
        <div className="flex items-center space-x-2 mt-14 text-white gap-4">
          <div className="flex flex-col">
            <h3 className="font-bold">JAIN</h3>
            <p className="text-gray-400">1 product</p>
          </div>
          <div>
            <h3 className="font-bold">NEW PRODUCTS</h3>
            <p className="text-gray-400">0 product</p>
          </div>
          <div>
            <h3 className="font-bold">READY TO COOK</h3>
            <p className="text-gray-400">7 product</p>
          </div>
          <div>
            <h3 className="font-bold">SWEET & SAVOURIES</h3>
            <p className="text-gray-400">1 product</p>
          </div>
        </div>
      </div>
      <div className="shop mt-10 flex mx-[8vw] h-full">
        <div className="left min-w-1/4 p-4">
          <h3 className="font-bold mb-4">FILTER BY PRICE</h3>
          <div className="flex flex-col items-start border-b border-gray-300 pb-9">
            <input
              type="range"
              min="100"
              max="600"
              value={price}
              onChange={handlePriceChange}
              className="w-full mb-4"
              multiple
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-gray-700">
                Price: ₹{price[0]} — ₹{600}
              </span>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-1 rounded cursor-pointer"
                onClick={handleFilter}
              >
                FILTER
              </button>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold mb-4">STOCK STATUS</h3>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="on-sale" className="mr-2" />
              <label htmlFor="on-sale" className="text-gray-700">
                On sale
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="in-stock" className="mr-2" />
              <label htmlFor="in-stock" className="text-gray-700">
                In stock
              </label>
            </div>
          </div>
        </div>
        <div className="right min-w-3/4">
          <div className="right-top flex items-center justify-between p-4 bg-white">
            <div className="breadcrumbs text-gray-600">
              <span>
                <Link to={"/"}>Home</Link>
              </span>{" "}
              / <span className="font-bold">Shop</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Show :</span>
              <div className="flex space-x-2">
                <span className="text-gray-600 cursor-pointer">9</span>
                <span className="text-gray-600 cursor-pointer">/</span>
                <span className="text-gray-600 cursor-pointer">12</span>
                <span className="text-gray-600 cursor-pointer">/</span>
                <span className="text-gray-600 cursor-pointer">18</span>
                <span className="text-gray-600 cursor-pointer">/</span>
                <span className="text-gray-600 cursor-pointer font-bold">
                  24
                </span>
              </div>
              <div className="flex space-x-2">
                <div className="cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 3h4v4H3V3zM3 9h4v4H3V9zM3 15h4v4H3v-4zM9 3h4v4H9V3zM9 9h4v4H9V9zM9 15h4v4H9v-4zM15 3h4v4h-4V3zM15 9h4v4h-4V9zM15 15h4v4h-4v-4z" />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 3h4v4H3V3zM3 9h4v4H3V9zM3 15h4v4H3v-4zM9 3h4v4H9V3zM9 9h4v4H9V9zM9 15h4v4H9v-4zM15 3h4v4h-4V3zM15 9h4v4h-4V9zM15 15h4v4h-4v-4z" />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 3h4v4H3V3zM3 9h4v4H3V9zM3 15h4v4H3v-4zM9 3h4v4H9V3zM9 9h4v4H9V9zM9 15h4v4H9v-4zM15 3h4v4h-4V3zM15 9h4v4h-4V9zM15 15h4v4h-4v-4z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-evenly m-2">
            {snacks?.map((item, index) => {
              return (
                <div key={index} className="w-1/4 h-1/4">
                  <Card
                    imageUrl={item?.images[0]}
                    name={item?.name}
                    cost={item?.price}
                    className="m-2"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
