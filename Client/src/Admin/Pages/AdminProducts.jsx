import Card from "../Components/Card.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../Components/AdminNavbar.jsx";

const Snack = () => {
  const [snacks, setSnacks] = useState();
  const [originalSnacks, setOriginalSnacks] = useState();

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
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }, []);

  async function handleLatest() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/products/latest",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${import.meta.env.VITE_APP_TOKEN}`,
      },
    };
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        setSnacks(response?.data?.products);
       
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }

  async function handleJain() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/products/category/67d1314d8fb5c68631e6d3ba",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${import.meta.env.VITE_APP_TOKEN}`,
      },
    };
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        setSnacks(response?.data?.products);
       
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }

  async function handleSweet() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/products/category/67d131748fb5c68631e6d3bb",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${import.meta.env.VITE_APP_TOKEN}`,
      },
    };
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        setSnacks(response?.data?.products);
        
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }

  async function handleAll()
  {
    setSnacks(originalSnacks)
  }
  return (
    <>
    <AdminNavbar/>
    <div className="p-4 m-4">
      <p className="text-6xl text-emerald-900 font-bold mb-2 text-center">
        Our Snacks
      </p>
     
      <div className="flex m-4 justify-center gap-x-10">
        <button className="font-bold text-gray-600 hover:underline cursor-pointer" onClick={handleAll}>
          ALL
        </button>
        <button className="font-bold text-gray-600 hover:underline cursor-pointer">
          READY TO COOK
        </button>
        <button
          className="font-bold text-gray-600 hover:underline cursor-pointer"
          onClick={handleLatest}
        >
          NEW PRODUCTS
        </button>
        <button className="font-bold text-gray-600 hover:underline cursor-pointer" onClick={handleJain}>
          JAIN
        </button>
        <button
          className="font-bold text-gray-600 hover:underline cursor-pointer"
          onClick={handleSweet}
        >
          SWEET AND SAVOURIES
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
  {snacks?.map((item, index) => {
    return (
      <Card
        key={index}
        imageUrl={item?.images[0]}
        name={item?.name}
        cost={item?.price}
        id={item?._id}
        refreshData={() => window.location.reload()} // Refresh page after delete
      />
    );
  })}
</div>
    </div>
    </>
  );
};

export default Snack;
