import React from "react";
import bgpic3 from "../assets/Group 216.png";
import bgpic from "../assets/image-removebg-preview (6) 1.png";
import arrow from "../assets/Vector.png";

const Hero = () => {
  return (
    <div className="pt-[2.5rem] md:pt-[4.5rem] flex flex-col lg:flex-row justify-between items-center lg:items-start">
      {/* Left Section */}
      <div className="relative flex flex-col items-center lg:items-start">
        <img
          src={bgpic}
          className="w-full lg:h-[37rem] object-cover"
          alt="Background"
        />
        <h1 className="absolute top-10 lg:top-auto mr-7 sm:mr-0 lg:mt-24 lg:ml-20 text-4xl sm:text-4xl lg:text-6xl font-bold text-customBodyColor w-4/5 lg:w-[42rem] leading-tight lg:leading-[5rem]  text-left">
          Global Software Development Company in India
        </h1>
        <h4 className="absolute top-48 lg:top-80 mr-7 sm:mr-0 lg:mt-14 lg:ml-20 text-lg sm:text-xl lg:text-3xl w-4/5 lg:w-[35rem] font-light text-customBodyColor text-left">
          Going the extra mile and creating a tangible impact!
        </h4>
        <button className="relative bottom-48 md:bottom-32 mr-10 md:mr-0 md:left-16 flex items-center justify-center bg-custom-gradient w-72 sm:w-48 lg:w-72 h-12 sm:h-14 rounded-full opacity-80 text-black text-xs sm:text-sm hover:shadow-xl transition-transform transform hover:scale-105">
  <span className="text-center">Get a Free Consultation</span>
  <img
    className="absolute right-7 top-1/2 transform -translate-y-1/2 "
    src={arrow}
    alt="Arrow"
  />
</button>

      </div>

      {/* Right Section */}
      <div className="relative bottom-32 md:bottom-0 lg:mt-0">
        <img
          src={bgpic3}
          alt="Decorative"
          className=" lg:w-full lg:h-[35rem] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
