import React from 'react';
import img1 from '../assets/Group 129.png';
import img2 from '../assets/face.png';
import img3 from '../assets/image 90.png';
import img4 from '../assets/image 91.png';
import img5 from '../assets/image 92.png';
import img6 from '../assets/image 93.png';

const servicesData = [
  {
    image: img3,
    title: 'Custom Software Development',
    description:
      'We are a reputed software development company that provides creative solutions for businesses.',
  },
  {
    image: img4,
    title: 'Application Development',
    description:
      'We are a reputed software development company that provides creative solutions for businesses.',
  },
  {
    image: img5,
    title: 'AI as a Service',
    description:
      'We are a reputed software development company that provides creative solutions for businesses.',
  },
  {
    image: img6,
    title: 'ServiceNow implementation',
    description:
      'We are a reputed software development company that provides creative solutions for businesses.',
  },
];

const Services = () => {
  return (
    <>
      <div className="hidden lg:flex justify-between">
        {/* Left Section */}
        <div>
        
          <h1 className="text-customBodyColor text-center font-bold text-4xl w-[50rem] mt-20 ml-10">
            Unlock Innovation with Our Comprehensive Service Offerings
          </h1>

          <div className="relative">
            {/* Background Image */}
            <img src={img2} className="h-[28rem] ml-60 absolute" alt="background" />

            {/* Overlay Images */}
            <div className="absolute top-6 left-28">
              <img src={img3} alt="overlay 1" />
              <h1 className="font-medium text-2xl w-52">Custom Software Development</h1>
              <p className="w-60 text-xs">We are a reputed software development company that provides creative solutions for businesses.</p>
            </div>
            <div className="absolute top-60 left-28">
              <img src={img4} alt="overlay 2" />
              <h1 className="font-medium text-2xl w-52">Application Development</h1>
              <p className="w-60 text-xs">We are a reputed software development company that provides creative solutions for businesses.</p>
            </div>
            <div className="absolute top-6 right-10">
              <img src={img5} alt="overlay 3" />
              <h1 className="font-medium text-2xl w-52">AI as a Service</h1>
              <p className="w-60 text-xs">We are a reputed software development company that provides creative solutions for businesses.</p>
            </div>
            <div className="absolute top-60 right-10">
              <img src={img6} alt="overlay 4" />
              <h1 className="font-medium text-2xl w-52">ServiceNow implementation</h1>
              <p className="w-60 text-xs">We are a reputed software development company that provides creative solutions for businesses.</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <img src={img1} alt="group image" className="h-[30rem] mt-20 mr-16" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden ">
   
        <div className="grid grid-cols-1 gap-8">
        
          <h1 className="text-customBodyColor text-center font-bold text-3xl relative bottom-12 mb-8 max-w-lg mx-auto">
            Unlock Innovation with Our Comprehensive Service Offerings
          </h1>

        
          <img src={img2} className="h-96 max-w-lg mx-auto mb-8 hidden" alt="background" />


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative bottom-12 ">
            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img src={service.image} alt={service.title} className="w-16 h-16 mb-4" />
                <h2 className="font-medium text-lg">{service.title}</h2>
                <p className="text-xs mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
