import React from "react";
import Slider from "react-slick";
// Required CSS imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    cssEase: "linear",
    dotsClass: "slick-dots custom-dots" // Add custom class for dots
  };

  // Restaurant food images with dinner images
  const foodImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Ribeye Steak Dinner"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Gourmet Dinner Plate"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Assorted Fried Snacks"
    }
  ];

  return (
    <div className="slider-container w-full mx-auto relative">
      <style jsx>{`
        .slick-prev, .slick-next {
          z-index: 10;
          font-size: 24px;
        }
        .slick-prev {
          left: 25px;
        }
        .slick-next {
          right: 25px;
        }
        .slick-prev:before, .slick-next:before {
          font-size: 30px;
          opacity: 0.8;
        }
        /* Position dots on the carousel instead of below it */
        .custom-dots {
          position: absolute;
          bottom: 25px;
          width: 100%;
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: center;
          z-index: 5;
        }
        .custom-dots li {
          position: relative;
          display: inline-block;
          margin: 0 5px;
          padding: 0;
          cursor: pointer;
        }
        .custom-dots li button {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 10px;
          height: 10px;
          padding: 5px;
          cursor: pointer;
          border: 0;
          outline: none;
          background: transparent;
        }
        .custom-dots li button:before {
          font-size: 12px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          content: '•';
          text-align: center;
          opacity: 0.75;
          color: white;
          text-shadow: 0 0 3px rgba(0,0,0,0.8);
        }
        .custom-dots li.slick-active button:before {
          opacity: 1;
          color: white;
        }
      `}</style>
      <Slider {...settings}>
        {foodImages.map(image => (
          <div key={image.id} className="w-full">
            <div className="relative">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-screen object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeCarousel;