const Gallery = () => {
  return (
    <>
     <div className="flex justify-evenly items-center h-screen">
  <div className="w-2xl">
    <p className="text-4xl text-emerald-900 m-2 p-1">Check out our products</p>
    <p className="text-2xl m-3 p-1"> From crispy savories to sweet delights</p>
    <img
      src="https://res.cloudinary.com/dujpbtj8q/image/upload/v1740397125/cld-sample-4.jpg"
      alt="Gallery Image"
      className="w-full h-85 object-cover m-4 p-2"
    />
    <button className="text-2xl ml-12 underline hover:cursor-pointer">Find Us</button>
  </div>
  <div className="w-2xl">
  <p className="text-4xl text-emerald-900 m-2 p-1">Our products are crafted with care</p>
  <p className="text-2xl m-3 p-1">Ensuring high quality taste and freshness in every bite</p>
    <img
      src="https://res.cloudinary.com/dujpbtj8q/image/upload/v1740397125/cld-sample-4.jpg"
      alt="Gallery Image"
      className="w-full h-65 object-cover m-2 p-2"
    />
    <button className="text-2xl ml-12 underline hover:cursor-pointer">Contact Us</button>
  </div>
</div>

    </>
  );
};

export default Gallery;
