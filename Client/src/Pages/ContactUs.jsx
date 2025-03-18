import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="mt-50">
        <div></div>
        <div className="flex mt-10 mb-10 ml-10 mr-10 ">
          <div className="w-1/2 border-r-2 border-gray-200 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              JRS Snacks
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h3>
            <hr className="border-t-2 border-gray-300 mb-4" />
            <p className="text-gray-700 leading-relaxed mb-4">
              JRS Snacks is a brand steeped in tradition, offering high-quality,
              flavorful snacks that cater to a wide variety of tastes.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong className="text-gray-800">Address:</strong> Lorem ipsum
                dolor sit amet.
              </li>
              <li>
                <strong className="text-gray-800">Email:</strong>{" "}
                <a
                  href="mailto:Support@jrssnacks.com"
                  className="text-green-600 hover:underline"
                >
                  Support@jrssnacks.com
                </a>
              </li>
              <li>
                <strong className="text-gray-800">Phone:</strong>{" "}
                <a
                  href="tel:+918310715585"
                  className="text-green-600 hover:underline"
                >
                  +91-8310715585
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-4 w-1/2">
            <p className="text-2xl font-semibold text-gray-800"> INFORMATION ABOUT US</p>
            <p className="text-lg font-medium text-gray-700 mb-6">CONTACT US FOR ANY QUESTIONS</p>
            <form
              action=""
              className="mt-8 flex flex-wrap gap-x-50 gap-y-10 mb-5"
            >
              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition duration-200 block"
                />
              </div>
              <div>
                <label>Your Email</label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition duration-200 block"
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="number"
                  name=""
                  id=""
                  className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition duration-200 block"
                />
              </div>
              <div>
                <label>Company</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-2 border-gray-300 w-full p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition duration-200 block"
                />
              </div>
              <div>
                <label>Your Message</label>
                <textarea class=" w-150 h-40 border-2 border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 transition duration-200 block"></textarea>
              </div>
            </form>
            <button className="mt-4 px-6 py-3 cursor-pointer bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200">
              Ask A Question
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUs;
