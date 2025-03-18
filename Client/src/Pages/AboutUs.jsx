import React from 'react';
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-45 ml-20 flex mb-2'>
     <div className="flex w-1/2 " >
        <img src="https://jrssnacks.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-13.18.56_dd82a117.jpg" alt="" className='h-120'/>
     </div>
     <div className="flex-col w-1/2 ">
      <p className='m-4 text-2xl font-semibold'>JRS Snacks</p>
      <p className='m-4 text-3xl font-bold'>About our online store</p>
      <p className='m-4 text-2xl font-semibold text-gray-500'>About Us:</p>
      <p className='m-4 text-2xl text-gray-400'>JRS is a frozen foods manufacturer that not only believes in great taste, but also in a variety of great palates. What began as a humble hustle during the 90s, our products have grown over the years to create an established and well-trusted brand of their own. Each of our snacks is a reflection of our consistent drive to innovate and create nothing less than the best.</p>
     </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
