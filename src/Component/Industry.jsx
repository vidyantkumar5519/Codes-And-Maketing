import React from 'react';
import img1 from '../assets/ex1.png';
import img2 from '../assets/ex2.png';
import img3 from '../assets/ex3.png';
import img4 from '../assets/ex4.png';
import img5 from "../assets/Group 130.png";

const products = [
  { id: 1, title: 'Database Security', image: img1, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
  { id: 2, title: 'Insurance Solutions', image: img2, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
  { id: 3, title: 'Workflow Automation', image: img3, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
  { id: 4, title: 'Energy Optimization', image: img4, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
  { id: 5, title: 'Custom Software', image: img3, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
  { id: 6, title: 'Custom Software', image: img2, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
  { id: 7, title: 'Custom Software', image: img1, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
  { id: 8, title: 'Custom Software', image: img3, description: 'We empower energy enterprises with software solutions to automate workflows. We offer user-centric solutions for insurance firms to enhance the customer experience.', link: 'Read more' },
];

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const Industry = () => {
  return (
    <div className=''>
      <div className="flex justify-center p-4 md:p-10">
        <h1 className="font-bold mt-2 text-customBodyColor text-2xl text-center  md:text-4xl">
          Driving Results Through Dedicated Industry Expertise
        </h1>
      </div>
      <div
        className="flex overflow-x-auto space-x-12 gap-2 px-12 p-5"
        style={{
          overflowX: 'auto', 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
          WebkitOverflowScrolling: 'touch', 
          scrollbarColor: 'transparent transparent'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 h-[27rem] w-72 rounded-custom border shadow-lg bg-white flex flex-col transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[14rem] object-cover rounded-t-custom"
            />
            <h3 className="text-gray-800 text-2xl font-medium relative top-7 ml-5 truncate">{product.title}</h3>
            <p className="text-gray-600 text-sm p-1 ml-3 relative top-7">
              {truncateText(product.description, 21)}
            </p>
            <img src={img5} alt="logo" className="relative bottom-44 mr-52 mx-auto" />
            <p className="text-blue-600 text-sm ml-4 relative bottom-4 hover:underline cursor-pointer">
              {truncateText(product.link, 21)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
