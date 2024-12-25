import React from 'react';
import img10 from '../assets/Adani_Group_logo_vector-removebg-preview 1.png';
import img1 from '../assets/image-removebg-preview (12) 1.png';
import img2 from '../assets/image-removebg-preview (13) 1.png';
import img3 from '../assets/image-removebg-preview (14) 1.png';
import img4 from '../assets/image-removebg-preview (15) 1.png';
import img5 from '../assets/image-removebg-preview (16) 1.png';
import img6 from '../assets/image-removebg-preview (17) 1.png';
import img7 from '../assets/image-removebg-preview (18) 1.png';
import img8 from '../assets/image-removebg-preview (19) 1.png';
import img9 from '../assets/image-removebg-preview (20) 1.png';
import model from '../assets/model.png';
import vector from '../assets/Vector 33.png';
import arrow from '../assets/Vector.png';

const Information = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <div className='mt-0 md:mt-16 ml-4 md:ml-16 order-2 md:order-1 hidden md:block'>
          <img src={model} alt='model' className='h-auto w-[80%] md:w-auto max-w-full' />
        </div>
        <div className='mt-16 md:mt-16 mr-4 md:mr-24 order-1 md:order-2'>
          <img
            className="absolute md:left-1/2 md:w-5/12 opacity-100 -z-10"
            src={vector}
            alt="background vector"
          />
          <div className="relative bottom-36 md:bottom-0 mt-0 ml-4 md:ml-44 w-auto">
            <div className="group-container">
              <h1 className='font-medium text-center md:text-left md:font-bold text-[1.5rem] md:text-[1.95rem] text-customBodyColor'>
                Understanding Codes And Marketing‘s Expertise
              </h1>
              <div className="flex justify-center md:justify-start items-center text-center md:text-left p-4">
                <p className='text-lg md:text-[0.95rem] text-customFontSmall md:w-[45rem] leading-loose'>
                  Codes And Marketing is a leading software development company passionate about delivering innovative solutions to meet the unique needs of clients. Whether a business requires custom software solutions, cross-platform app development services, or quality engineering services, we take care of it all.
                </p>
              </div>
              <button className="mt-7 ml-24 md:ml-0 bg-whiteshade md:bg-custom-gradient w-[14.1rem] h-10 rounded-full font-bold text-customBodyColor text-[10px] md:text-[10px] flex items-center justify-between md:px-8 md:hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="flex items-center space-x-4 transition-transform transform hover:scale-10">
                  <span>Get a Free Consultation</span>
                  <img src={arrow} alt="arrow" />
                </div>
              </button>
            </div>
          </div>
          <div className='group-container'>
            <h2 className='font-medium text-center md:text-left text-3xl md:text-2xl text-customBodyColor relative bottom-28 md:bottom-0 md:ml-[28rem] ml-4 md:mt-16'>
              Featured case studies
            </h2>
            <div className="p-4 grid grid-cols-2 md:grid-cols-5 gap-4  bottom-24 md:bottom-0 md:gap-6 h-auto md:h-auto md:mt-6 w-[90%] md:w-[65%] relative justify-center items-center md:left-72 ml-10">
              <img src={img1} className="" />
              <img src={img2} className="" />
              <img src={img3} className="" />
              <img src={img4} className=" hidden md:block" />
              <img src={img5} className="" />
              <img src={img6} className="" />
              <img src={img7} className="" />
              <img src={img8} className=" hidden md:block" />
              <img src={img9} className=" hidden md:block" />
              <img src={img10} className=" hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
