import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const Snack = () => {
  const [snacks, setSnacks] = useState();

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
        // console.log(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }, []);

return (
    <div className="p-4 m-4">
        <p className="text-6xl text-emerald-900 font-bold mb-2 text-center">Our Snacks</p>
        <h4 className="text-2xl mb-4 text-center">Satisfy your cravings with JRS Snacks – where every bite is a celebration of flavor!</h4>
        <div className="flex flex-wrap gap-4 justify-center">
            {snacks?.map((item, index) => {
                return (
                    <Card
                        key={index}
                        imageUrl={item.images[0]}
                        name={item.name}
                        cost={item.price}
                        className="m-2"
                    />
                );
            })}
        </div>
    </div>
);
};

export default Snack;
