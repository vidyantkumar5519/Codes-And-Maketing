import React from "react";
import img1 from "../assets/Group 235.png";
import img2 from "../assets/image 132.png";
import img3 from "../assets/Rectangle 190.png";
const Insights = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between bg-white px-5 md:px-10 py-10 space-y-10 md:space-y-0 ">
        <div className="">
          <h1 className="text-customBodyColor font-bold text-center text-[1.8rem] md:text-2xl mt-5  ">
            Latest Industry Insights
          </h1>
          <div className=" md:h-96   h-96 w-80 rounded-3xl mt-5 bg-whiteShade ml-2 ">
            <img src={img1} className="relative bottom-2 w-full rounded-3xl" />
            <p className="font-thin text-custom ml-3">Dec 18</p>
            <p className="font-medium text-bold ml-3 mt-10">
              Top 10+ DevOps Consulting Companies to Watch in 2025
            </p>
            <img
              src={img2}
              className="font-thin text-custom ml-3 h-8 w-8 mt-4"
            />
            <div className="flex justify-between space-x-1">
              <div>
                <p className="font-thin text-sm ml-3 mt-4">Cloud & DevOps</p>
              </div>
              <div>
                <button className="bg-custom-gradient w-28 h-6  rounded-full mr-5 text-[0.7rem] font-medium">
                  Treding
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block ">
          <h1 className=" text-lg md:text-2xl font-light mt-1 md:mt-0 ml-0 md:ml-24 text-center md:text-left  ">
            Check out the blog section for recent developments, trends, and
            developments in the development industry.
          </h1>
          <div
            className=" space-y-5   md:ml-20 h-96 overflow-y-auto "
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              scrollbarColor: "transparent transparent",
            }}
          >
            <div className="w-[50rem] h-44 bg-whiteShade ml-9 rounded-xl">
              <p className="ml-52 relative mt-1  top-5 text-xl w-[29rem] font-medium">
                A Practical Guide to Building A Pharmacy App Like Walgreens
              </p>
              <img src={img3} alt="" className="h-44 relative bottom-14" />
              <img src={img2} alt="" className="h-6 ml-52 relative bottom-32" />
              <div className="flex justify-between">
                <div>
                  <p className="font-thin text-sm relative bottom-28 ml-52 ">
                    Dec 18 , 2024
                  </p>
                </div>
                <div>
                  <button className="bg-custom-gradient w-28 h-6   rounded-full mr-5 text-[0.7rem] relative bottom-32 font-medium">
                    Trending
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[50rem] h-44 bg-whiteShade ml-9 rounded-xl">
              <p className="ml-52 relative mt-1  top-5 text-xl w-[29rem] font-medium">
                A Practical Guide to Building A Pharmacy App Like Walgreens
              </p>
              <img src={img3} alt="" className="h-44 relative bottom-14" />
              <img src={img2} alt="" className="h-6 ml-52 relative bottom-32" />
              <div className="flex justify-between">
                <div>
                  <p className="font-thin text-sm relative bottom-28 ml-52 ">
                    Dec 18 , 2024
                  </p>
                </div>
                <div>
                  <button className="bg-custom-gradient w-28 h-6   rounded-full mr-5 text-[0.7rem] relative bottom-32 font-medium">
                    Treding
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[50rem] h-44 bg-whiteShade ml-9 rounded-xl">
              <p className="ml-52 relative mt-1  top-5 text-xl w-[29rem] font-medium">
                A Practical Guide to Building A Pharmacy App Like Walgreens
              </p>
              <img src={img3} alt="" className="h-44 relative bottom-14" />
              <img src={img2} alt="" className="h-6 ml-52 relative bottom-32" />
              <div className="flex justify-between">
                <div>
                  <p className="font-thin text-sm relative bottom-28 ml-52 ">
                    Dec 18 , 2024
                  </p>
                </div>
                <div>
                  <button className="bg-custom-gradient w-28 h-6   rounded-full mr-5 text-[0.7rem] relative bottom-32 font-medium">
                    Treding
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
