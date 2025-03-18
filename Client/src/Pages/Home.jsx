import React from 'react';
import Navbar from '../Components/Navbar';
import HomeCarousel from '../Components/homeCarousel';
import Snack from "../Components/Snack"
import Order from '../Components/Order';
import Gallery from "../Components/Gallery"
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HomeCarousel/>
      <Snack/>
      <Gallery/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default Home;
