import React from 'react';
import img1 from "../assets/Group 233.png";

const Advertisment = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img src={img1} alt="banner" className="w-full object-cover h-[19rem]" />
      
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1
          className="text-4xl  md:text-6xl text-white font-bold md:mb-10"
          style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}
        >
          Grow your business with Codes And Marketing
        </h1>
        <p
          className="mb-16 md:mb-16 text-xl md:text-3xl text-customBodyColor font-medium"
        >
          Bring your ideas to reality with our Digital Transformation Services
        </p>
      </div>
      
      {/* Button */}
      <div className="absolute bottom-7 w-full flex justify-center">
        <button className="w-64 sm:w-72 md:w-80 h-12 sm:h-14 text-sm sm:text-md bg-custom-gradient text-customBodyColor font-medium rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          Get a Free Consultation
        </button>
      </div>
    

    </div>
  );
};

export default Advertisment;