import React from 'react';
import logo from "../assets/logo2.png";
import facebook from '../assets/facebook.png'; 
import applestore from '../assets/applestore.png'; 
import googleplay from '../assets/googleplaystore.png'; 


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1">
          <img
            alt="Company Logo"
            className="mb-4"
            height="150"
            src={logo}
            width="150"
          />
          <p className="text-sm">
            Code And Marketing, Creative Design, Web Development, Digital Marketing, Software Testing, Innovative Solutions for Business Websites
          </p>
          <div className="flex space-x-2 mt-4">
            <a className="text-white" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a className="text-sm" href="#">About Us</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Our Company</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Events & Meetups</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">In The News</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Services</h3>
          <ul>
            <li className="mb-2">
              <a className="text-sm" href="#">Custom Software Development</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Mobile App Development</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Web Development</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Software Testing</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">On-Demand App Development</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Reach Out To Us</h3>
          <ul>
            <li className="mb-2">
              <a className="text-sm" href="#">Schedule For A Free Call</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Careers</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Contact Us</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">7910XXXXXX10</a>
            </li>
            <li className="mb-2">
              <a className="text-sm" href="#">Welcome123@Gmail.Com</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold mb-4">Subscribe To Our Insights</h3>
          <div className="flex mb-4">
            <input
              className="p-2 rounded-l-[0.6rem] bg-gray-800 text-white border border-gray-700"
              placeholder="Enter your Email"
              type="email"
            />
            <button className="px-2 bg-custom-gradient text-black rounded-r-[0.6rem]">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-2">
            <a href="#">
              <img
                alt="Google Play Store"
                height="50"
src={googleplay}
                width="150"
              />
            </a>
            <a href="#">
              <img
                alt="Apple App Store"
                height="50"
src={applestore}
                width="150"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;