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
          <div className="w-1/2 border-r-2 border-gray-200 p-2">
            <p className="font-bold" >JRS Snacks</p>
            <p className="font-bold"> Contact Us</p>
            <hr className="text-gray-200" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              dolor quibusdam odit temporibus consequatur perferendis error eius
              ullam quasi quaerat!
            </p>
            <ul>
              <li>Address : Lorem ipsum dolor sit amet.</li>
              <li>Email : Lorem, ipsum.</li>
              <li>Phone : Lorem, ipsum.</li>
            </ul>
          </div>
          <div className="ml-4 w-1/2">
            <p className="font-bold"> INFORMATION ABOUT US</p>
            <p className="font-bold">CONTACT US FOR ANY QUESTIONS</p>
            <form action="" className="mt-8 flex flex-wrap gap-x-50 gap-y-10 mb-5">
              <div>
                <label>Your Name</label>
                <input type="text" name="" id="" className="border-2 block" />
              </div>
              <div>
                <label>Your Email</label>
                <input type="text" name="" id="" className="border-2 block" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" name="" id="" className="border-2 block" />
              </div>
              <div>
                <label>Company</label>
                <input type="text" name="" id="" className="border-2 block" />
              </div>
              <div>
                <label>Your Message</label>
                <textarea class=" w-150 h-40 border p-2 block"></textarea>
              </div>
            </form>
            <p>Ask A Question</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUs;
