import React, { useState } from "react";
import logo from "../assets/Group 115.png";
import search from "../assets/iconamoon_search-bold.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-[4.3rem] bg-white flex items-center justify-between px-4 sm:px-8 lg:px-16 shadow-sm">
        {/* Logo Section */}
        <div>
          <img src={logo} alt="Company Logo" className="h-8 sm:h-10" />
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[4.3rem] left-0 w-full bg-white md:static md:block md:w-auto`}
          aria-label="Main Navigation"
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 text-sm lg:text-base font-semibold text-customBodyColor px-4 py-2 md:py-0 text-[1rem]">
            {["Home", "Services", "Technology", "Industries", "Company", "Insights"].map(
              (item, index) => (
                <li key={index} className="hover:text-greenColor transition duration-300">
                  <a href={`#${item.toLowerCase()}`} className="block">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Search */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button aria-label="Search" className="relative focus:outline-none">
            <img className="h-5 sm:h-6 w-5 sm:w-6" src={search} alt="Search" />
          </button>

          {/* Hamburger Menu Button*/}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Contact Us Button*/}
          <a
            href="#contact"
            className="hidden md:block bg-custom-gradient text-black px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
          >
            Contact us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
