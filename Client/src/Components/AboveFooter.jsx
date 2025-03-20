import React from 'react';
import { Link } from 'react-router-dom';

const AboveFooter = () => {
  return (
    <>
    <div className="flex justify-evenly ">
        <div className='w-2/3'>
          <img
            src="https://jrssnacks.com/wp-content/uploads/2024/10/Untitled-design-7-2048x1024.png"
            alt="Gallery Image"
            className="w-230 h-125 object-cover m-4 p-2"
          />
        </div>
        <div className="w-1/3 mt-20 mr-40 ml-20">
          <p className="text-4xl text-emerald-900 mt-1 p-1 font-extrabold font-serif">
          JRS Snacks brings the true taste of India to your doorstep.
          </p>
          <p className="text-1xl mt-3 p-1 text-gray-400">
          Shop with us and experience snacks that are not just delicious, but are crafted with love and care.
          </p>
          <div className="mt-10">
          <Link to="/shop">
            <button className="border-2 font-semibold text-white bg-emerald-900 ml-5 p-2 hover:cursor-pointer">
              READ MORE
            </button>
          </Link>
          <Link to="/shop">
            <button className="border-2 ml-5 p-2 font-semibold hover:cursor-pointer">
              VIEW MORE
            </button>
          </Link>
          </div>
        </div>
      </div>
      </>

  );
}

export default AboveFooter;
