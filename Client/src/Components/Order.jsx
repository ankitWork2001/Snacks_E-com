import Card from "./Card.jsx";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 z-10 top-1/2 -translate-y-1/2 -translate-x-6 bg-green-600 p-2 rounded-full text-white hover:bg-green-700"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 z-10 top-1/2 -translate-y-1/2 translate-x-6 bg-green-600 p-2 rounded-full text-white hover:bg-green-700"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};

const Order = () => {
  const [orders, setOrders] = useState();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
        setOrders(response?.data?.products);
        // console.log(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }, []);

return (
    <div className="p-4 m-4">
        <p className="text-6xl text-emerald-900 font-bold mb-2 text-center">Order Now</p>
        <h4 className="text-2xl mb-8 text-center">Whether you're craving a mid-day snack, looking for party treats, or just indulging in comfort food</h4>
        <div className="w-[90%] mx-auto relative">
        <Slider {...settings} className="slider-container">
            {orders?.map((item, index) => {
                return (
                    <div key={index} className="px-2">
                        <Card
                            imageUrl={item.images[0]}
                            name={item.name}
                            cost={item.price}
                            id={item._id}
                        />
                    </div>
                );
            })}
             </Slider>
        </div>
    </div>
);
};

export default Order;
