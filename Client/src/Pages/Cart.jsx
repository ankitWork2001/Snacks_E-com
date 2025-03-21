import React from "react";
import Navbar from "../Components/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addOrder,
  removeOrder,
  decrementOrder,
} from "../Reducer/Order/orderSlice";
import axios from "axios";

const Cart = () => {
  const orders = useSelector((state) => state.orderReducer.orders);
  const dispatch = useDispatch();

  return (
    <div className="wrapper relative min-h-screen">
      <Navbar />
      <div className='bg-[url("https://jrssnacks.com/wp-content/uploads/2021/10/coffee-page-title.jpg")] bg-cover bg-center py-24 w-full h-[36vh] flex items-center justify-center flex-col'>
        <div className="flex gap-4 mt-28 items-center justify-between">
          <h1 className="text-xl text-white font-bold">SHOPPING CART</h1>
          <div className="text-4xl text-gray-300">
            <IoIosArrowRoundForward />
          </div>
          <h1 className="text-xl text-white font-bold">CHECKOUT</h1>
          <div className="text-4xl text-gray-300">
            <IoIosArrowRoundForward />
          </div>
          <h1 className="text-xl text-white font-bold">ORDER COMPLETE</h1>
        </div>
      </div>
      <div className="container mx-auto mt-10 flex">
        {orders && orders.length > 0 ? (
          <>
            <Full orders={orders} dispatch={dispatch} />
            <CartTotals orders={orders} />
          </>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

const Full = ({ orders, dispatch }) => {
  const handleRemove = (id) => dispatch(removeOrder({ id }));
  const handleIncrement = (item) =>
    dispatch(
      addOrder({
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        cost: item.cost,
        quantity: 1,
      })
    );
  const handleDecrement = (id) => dispatch(decrementOrder({ id }));

  return (
    <div className="w-3/4">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full border-b border-gray-200">
            <th className="py-2 px-4 text-left"></th>
            <th className="py-2 px-4 text-left"></th>
            <th className="py-2 px-4 text-left">Product</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.id} className="border-b border-gray-200">
              <td className="py-4 px-4 text-center">
                <button
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                  onClick={() => handleRemove(item.id)}
                >
                  ×
                </button>
              </td>
              <td className="py-4 px-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-4 px-4">{item.name}</td>
              <td className="py-4 px-4">₹{item.cost.toFixed(2)}</td>
              <td className="py-4 px-4">
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 border-2 border-gray-300 text-gray-600 cursor-pointer hover:bg-emerald-900 hover:text-white"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    className="w-12 px-2 py-1 text-center border-t-2 border-b-2 border-gray-300"
                    readOnly
                  />
                  <button
                    className="px-2 py-1 border-2 border-gray-300 text-gray-600 cursor-pointer hover:bg-emerald-900 hover:text-white"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4 px-4">
                ₹{(item.cost * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CartTotals = ({ orders }) => {
  const Total = orders.reduce((sum, item) => sum + item.cost * item.quantity, 0);
  const handleOrder = async () => {
    let data = JSON.stringify({
      "items": orders
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/orders/',
      headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('token'), 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));
        alert("Order placed successfully!");
      }
      catch (error) {
        console.log(error);
      }
    }
    
    makeRequest();
  }
  const handlePayment = async () => {
    
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/payments/initiate",

        { amount: Total, currency: "INR" }, 
        { headers: { Authorization: import.meta.env.VITE_APP_TOKEN } }
      );

      if (!data || !data.id) {
        alert("Failed to create order");
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Snacks E-com",
        description: "Purchase Snacks",
        order_id: data.id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "http://localhost:3000/api/payment/verify",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              { headers: { Authorization: import.meta.env.VITE_APP_TOKEN } }
            );

            if (verifyRes.data.success) {
              alert("Payment successful!");
            } else {
              alert("Payment verification failed!");
            }
          } catch (error) {
            console.error("Verification error:", error);
            alert("Payment verification failed!");
          }
          handleOrder();
        },
        prefill: {
          name: "Ashish",
          email: "ashish@example.com",
          contact: "9876543210",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed!");
    }
  };

  return (
    <div className="w-1/4 p-4 bg-white border-4 border-gray-200 rounded-lg shadow-lg ml-4 h-[40vh]">
      <h2 className="text-2xl font-bold mb-4">CART TOTALS</h2>
      <div className="flex justify-between mb-4 border-b border-gray-200 pb-4">
        <span className="text-gray-700">Total</span>
        <span className="text-gray-900">₹{Total.toFixed(2)}</span>
      </div>
      <button
        onClick={handlePayment}
        className="w-full bg-emerald-900 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

const Empty = () => {
    return (
      <div className="flex flex-col items-center justify-center w-[100vw] h-[70vh] bg-gray-100 mb-12">
        <div className="text-gray-400 text-[25vh] mb-4">
        <BsCart3 />
        </div>
        <h2 className="text-5xl font-bold mb-2">Your cart is currently empty.</h2>
        <p className="text-gray-600 m-4 text-center w-[35vw]">
          Before proceeding to checkout, you must add some products to your shopping cart.
          You will find a lot of interesting products on our "Shop" page.
        </p>
        <Link to="/shop">
          <button className="bg-emerald-900 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200">
            RETURN TO SHOP
          </button>
        </Link>
      </div>
    );
  };

export default Cart;
